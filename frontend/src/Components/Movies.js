import React from "react";
import moviesBackGroundImage from "../images/pop-corn-background.jpg";
import { motion } from "framer-motion";
import "../App.css";

function Movies() {
  const fadeImageIn = {
    hidden: { opacity: 0, x: -1200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mainContainerMoviesComponent">
      <motion.img
        variants={fadeImageIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        src={moviesBackGroundImage}
        alt="popcorn-background"
        className="backgroundImage"
      />
      <div className="subContainerMoviesComponent">
        <h1 className="pageHeading">
          <em>Welcome to the Movies section:</em>
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

export default Movies;
