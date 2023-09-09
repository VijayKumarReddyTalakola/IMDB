import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Search.css";

const SearchResults = () => {
  const { query } = useParams();
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setSearchedResults(data.results));
  }, [query]);

  return (
    <>
      {query?.trim() !== "" && searchedResults.length > 0 ? (
        <div className="movie_list">
          <h2 className="list_title">Results for {query?.toUpperCase()}</h2>
          <div className="list_cards">
            {searchedResults.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="not_found">No Match Found</div>
      )}
    </>
  );
};

export default SearchResults;
