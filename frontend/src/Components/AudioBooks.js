import React from "react";
import audiBookBackgroundImage from "../images/audioBooks-background.jpg";

function AudioBooks() {
  return (
    <div className="mainAudiBookContainer">
      <img
        src={audiBookBackgroundImage}
        alt="audiBookBackgroundImage"
        className="backgroundImage"
      />
      <div className="subAudiBookContainer">
        <h1 className="pageHeading">
          <em>Welcome to the Audio books section:</em>
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

export default AudioBooks;
