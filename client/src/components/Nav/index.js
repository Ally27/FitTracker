import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function showNavigation() {
    return (
      <ul className={`flex-row ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <li className="mx-1">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/" onClick={closeMenu}>
            Calendar
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/" onClick={closeMenu}>
            Profile
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/" onClick={closeMenu}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="container">
      <header className="flex-row px-1">
        <nav className="navbar">
          <Link to="/">
            <img src={"FitLogo.png"} alt="FitTracker Logo" className="logo" />
          </Link>
  
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
  
        {showNavigation()}
      </header>
    </div>
  );
}

export default Nav;