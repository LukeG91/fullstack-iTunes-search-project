import React from "react";
import shortFilmsBackgroundImage from "../images/short-films-background.jpg";

function ShortFilms() {
  return (
    <div className="mainShortFilmContainer">
      <img
        src={shortFilmsBackgroundImage}
        alt="shortFilmsBackgroundImage"
        className="backgroundImage"
      />
      <div className="subShortFilmContainer">
        <h1 className="pageHeading">
          <em>Welcome to the Short Films section:</em>
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

export default ShortFilms;
