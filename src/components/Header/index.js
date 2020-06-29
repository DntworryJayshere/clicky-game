import React from "react";
import "./style.css";

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <h1>Clicky Game!</h1>
      <h3>Click on an image to earn points, but don't click on any more than once!</h3>
    </header>
  );
}

export default Header;
