import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/">Calendar</Link>
        </li>
        <li className="mx-1">
          <Link to="/">Profile</Link>
        </li>
        <li className="mx-1">
          <a href="/">Logout</a>
        </li>
      </ul>
    );
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label=""></span>
          FitTracker
        </Link>
      </h1>

      <nav className="navbar">{showNavigation()}</nav>
    </header>
  );
}
export default Nav;
