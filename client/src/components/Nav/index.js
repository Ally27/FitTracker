import React, {useState} from "react";
import Auth from "../../utils/auth";
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
    if (Auth.loggedIn()) {
      return (
        <ul className={`flex-row ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        {/* <ul className={`flex-row `}> */}
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
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`flex-row ${isMenuOpen ? "slide-in" : "slide-out"}`}>
          <li className="mx-1">
            <Link to="/signup" onClick={closeMenu}>
              Signup
            </Link>
          </li>
          <li className="mx-1" onClick={closeMenu}>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    } 
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