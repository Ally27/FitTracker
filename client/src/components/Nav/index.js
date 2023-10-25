import React, {useState} from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavigationLinks = () => {
    const links = ["Home", "Calendar", "Profile", "Logout"];

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%"
            }}
          >
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
          </div>

          <NavigationLinks />
        </nav>
      </header>
    </div>
  );
}

export default Nav;
