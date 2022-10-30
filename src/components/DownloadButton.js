import React from "react";

const DownloadButton = () => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
      }}
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
  );
};

export default DownloadButton;