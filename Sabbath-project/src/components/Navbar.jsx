import React from 'react';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getNavbarColor = () => {
    switch (location.pathname) {
      case '/':
        return 'navbar-home';
      case '/live':
        return 'navbar-live';
      case '/video':
        return 'navbar-video';
      case '/about':
        return 'navbar-about';
      case '/music':
        return 'navbar-music';
      case '/podcast':
        return 'navbar-podcast';
      case '/contact':
        return 'navbar-contact';
      default:
        return 'navbar-default';
    }
  };

  return (
    <nav className={`navbar ${getNavbarColor()}`}>
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/live">Live</Link>
        <Link to="/video">Video</Link>
        <Link to="/about">About</Link>
        <Link to="/music">Music</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </nav>
  );
};

export default Navbar;
