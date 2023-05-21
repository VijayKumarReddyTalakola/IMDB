import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}  style={{ textDecoration: "none", color: "white" }}>
          <div className="cards">
            <img className="card_img" src={`https://image.tmdb.org/t/p/original${ movie.poster_path || ""}`}alt="poster"/>
            <div className="card_overlay">
              <div className="card_title">{movie.original_title || ""}</div>
              <div className="card_runtime">
                {movie.release_date || ""}
                <span className="card_rating">
                  {movie.vote_average || ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card_description">
                {movie ? `${movie.overview.slice(0, 118)}...` : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
