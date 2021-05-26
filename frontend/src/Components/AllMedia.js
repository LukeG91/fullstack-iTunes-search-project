import React from "react";
import allMediaBackgroundImage from "../images/all-media-background.jpg";

function AllMedia() {
  return (
    <div className="mainAllMediaContainer">
      <img
        src={allMediaBackgroundImage}
        alt="allMediaBackgroundImage"
        className="backgroundImage"
      />
      <div className="subAllMediaContainer">
        <h1 className="pageHeading">
          <em>Welcome to the All Media section:</em>
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

export default AllMedia;
