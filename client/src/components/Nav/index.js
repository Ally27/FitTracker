import React, { useState } from "react";
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

    return (
      <ul className={`flex-row ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        {links.map((link, index) => (
          <li className="mx-1" key={index}>
            <Link to={link.toLowerCase()} onClick={closeMenu}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

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
            }}
          >
            <Link to="/">
              <img src={"FitLogo.png"} alt="FitTracker Logo" className="logo" />
            </Link>

            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
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
