import React from "react";


const Header = () => {
  return (
      <header> 
          <img
            className="imagelogo"
            src="https://logo.clearbit.com/spotify.com"
            alt=""
          />
          <span>Name</span>
          <button className="imageDownload">
            <img
              className="imageDownload"
              src="/images/download.svg"
              alt=""
              ></img>
            Download
          </button>
      </header>
  );
};

export default Header;

