import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const getData = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type || "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [type]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type || "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        { movieList.map((movie) => (
           <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
