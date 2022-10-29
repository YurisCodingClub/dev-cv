import React from "react";
import DownloadButton from "./DownloadButton";


const Header = () => {
  return (
      <header> 
          <img
            className="imagelogo"
            src="https://logo.clearbit.com/spotify.com"
            alt=""
          />
          <span>Name</span>
          <DownloadButton />
      </header>
  );
};

export default Header;

