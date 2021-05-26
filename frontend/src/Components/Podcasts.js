import React from "react";
import "../App.css";
import podcastsBackgroundImage from "../images/podcasts-backgground.jpg";

function Podcasts() {
  return (
    <div className="mainPodcastContainer">
      <img
        src={podcastsBackgroundImage}
        alt="podcasts-background"
        className="backgroundImage"
      />
      <div className="subPodcastContainer">
        <h1 className="pageHeading">
          <em>Welcome to the Podcasts section:</em>
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

export default Podcasts;
