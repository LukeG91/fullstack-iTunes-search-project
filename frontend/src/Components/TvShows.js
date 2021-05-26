import React from "react";
import "../App.css";
import tvShowBackgroundImage from "../images/tv-shows-background.jpg";

function TvShows() {
  return (
    <div className="mainTvShowContainer">
      <img
        src={tvShowBackgroundImage}
        alt="tvShowBackgroundImage"
        className="backgroundImage"
      />
      <div className="subTvShowContainer">
        <h1 className="pageHeading">
          <em>Welcome to the TvShows section:</em>
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

export default TvShows;
