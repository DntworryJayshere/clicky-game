import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li>
          <div>You guessed Correclty!</div>
        </li>
        <li>
          <div>Score: <span></span>| Top Score: <span></span></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
