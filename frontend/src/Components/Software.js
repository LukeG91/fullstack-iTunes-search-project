import React from "react";
import softwareBackgroundImage from "../images/software-background-image.jpg";

function Software() {
  return (
    <div className="mainSoftwareContainer">
      <img
        src={softwareBackgroundImage}
        alt="softwareBackgroundImage"
        className="backgroundImage"
      />
      <div className="subSoftwareContainer">
        <h1 className="pageHeading">
          <em>Welcome to the Software section:</em>
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

export default Software;
