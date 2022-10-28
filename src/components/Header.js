import React from "react";
import "../Header.css";
import "../index.css";
const Header = () => {
  return (
    <div className="navbar container">
      <nav>
        <div className="logo">
          <img
            className="imagelogo"
            src="https://logo.clearbit.com/spotify.com"
            alt="logo"
          />
        </div>
        <div className="name">
          <h2>Name</h2>
        </div>
      </nav>
    </div>
  );
};

export default Header;
