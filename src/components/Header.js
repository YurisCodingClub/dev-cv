import React from "react";
import "../index";

const Header = () => {
  return (
    <header>
      <nav className="logo">
          <img
            className="imagelogo"
            src="https://logo.clearbit.com/spotify.com"
            alt=""
          />
          <span >Name</span>
          <button
      style={{
        display: "flex",
        alignItems: "center",

      } } className="button-download"
    >
      <img
        src="/images/download.svg"
        alt=""
        style={{
          padding: "5px",
        }}
      ></img>
      Download
    </button>
      </nav>
    </header>
  );
};

export default Header;
