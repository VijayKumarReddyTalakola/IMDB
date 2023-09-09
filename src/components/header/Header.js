import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSearch }from 'react-icons/bi'
import "./Header.css";
const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search/${query}`);
      setQuery("")
    }
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src={logo} alt="logo" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movies/popular">
          <span>Popular</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movies/top_rated">
          <span>Top Rated</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movies/upcoming">
          <span>Upcoming</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movies/now_playing">
          <span>Now Playing</span>
        </Link>
      </div>
      <div className="headerRight">
        <input
          className="search_bar"
          type="search"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search_btn" onClick={handleSearch}>
          <BiSearch className="icon"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
