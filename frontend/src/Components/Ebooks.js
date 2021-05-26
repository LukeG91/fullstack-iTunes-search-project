import React from "react";
import ebookBackgroundImage from "../images/ebook-backgroundImage.jpg";

function Ebooks() {
  return (
    <div className="mainEbookContainer">
      <img
        src={ebookBackgroundImage}
        alt="ebookBackgroundImage"
        className="backgroundImage"
      />
      <div className="subEbookContainer">
        <h1 className="pageHeading">
          <em>Welcome to the Ebooks section:</em>
        </h1>
        <input type="text" placeholder="Enter artist's name" />
        <br />
        <br />
        <button className="searchButton">Search</button>
      </div>
      <div className="goToHomeLinkContainer">
        <a href="/" className="goToHomeLink">
          <em>Go to home</em>
        </a>
      </div>
    </div>
  );
}

export default Ebooks;
