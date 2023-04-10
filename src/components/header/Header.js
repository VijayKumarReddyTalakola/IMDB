import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><img className="header_icon" src={logo} alt='logo' /></Link>
        <Link style={{ textDecoration : "none" }} to="/movies/popular"><span>Popular</span></Link>
        <Link style={{ textDecoration : "none" }} to="/movies/top_rated"><span>Top Rated</span></Link>
        <Link style={{ textDecoration : "none" }} to="/movies/upcoming"><span>Upcoming</span></Link>
        <Link style={{ textDecoration : "none" }} to="/movies/now_playing"><span>Now Playing</span></Link>
      </div>
    </div>
  );
}

export default Header