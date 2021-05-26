import React from "react";
import "../App.css";
import backgroundImage from "../images/background-image.jpg";
import { motion } from "framer-motion";

function Header() {
  /* Creating variables that I can use to animate HTML  elements on my component. I am using the 'framer-motion' library
     to add animations to this component. */

  const fadeTextInLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeTextInRight = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mainHeaderContainer">
      <img
        src={backgroundImage}
        alt="background-img"
        className="backgroundImage"
      />
      <div className="subHeaderContainer">
        {/* Adding animations to the main heading on this component. */}
        <motion.h1
          variants={fadeTextInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          Welcome to my iTunes search app:
        </motion.h1>
        {/* Adding animations to the heading that tells the user to select a media type. */}
        <motion.h3
          className="headerComponentSearchOptionHeading"
          variants={fadeTextInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          <em>Click the media type that you would like to search for below:</em>
        </motion.h3>
        {/* Adding animations to the container that stores the different media links. */}
        <motion.div
          className="searchBarContainer"
          variants={fadeTextInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          <div className="searchBarOptionsContainer">
            <a href="/movies" className="searchLinks">
              Movies
            </a>
            <a href="/podcasts" className="searchLinks">
              Podcasts
            </a>
            <a href="/music" className="searchLinks">
              Music
            </a>
            <a href="/audiobooks" className="searchLinks">
              Audibooks
            </a>
            <a href="/short-films" className="searchLinks">
              Short Films
            </a>
            <a href="/tv-shows" className="searchLinks">
              TV Shows
            </a>
            <a href="/software" className="searchLinks">
              Software
            </a>
            <a href="/ebooks" className="searchLinks">
              Ebooks
            </a>
            <a href="/all" className="searchLinks">
              All
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;

/* 
Resources used:
============================================================================
YouTube video:  
Video Title: How to Make a React Website with Animations using Framer Motion
Date video was published: Dec, 8 2020
Video published by: Brian Design
Link to video: https://www.youtube.com/watch?v=fuaVNHW-GYE
*/
