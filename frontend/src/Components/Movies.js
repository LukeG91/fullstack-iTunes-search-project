import React, { useState } from "react";
import moviesBackGroundImage from "../images/pop-corn-background.jpg";
/* Motion is a React library that assists to create animations. */
import { motion } from "framer-motion";
import axios from "axios";
import "../App.css";

function Movies() {
  /* Setting state */
  const [artist, setArtist] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  /* Creating a function to add favourite items to local storage. */
  const addFavouritesToSessionStorage = (favourites) => {
    localStorage.setItem("FavouriteMediaItems", JSON.stringify(favourites));
  };

  /* Resource used for the code below: (2 variables (currentFavourites and favouriteMedia))
     ====================================================================================
     Stack overflow article:
     Title: Local Storage Keeps Resetting On Page Reload
     Answer posted by: Alberto Anderick Jr
     Date answer was posted: Nov 19 202
     Link to article: https://stackoverflow.com/questions/64903227/local-storage-keeps-resetting-on-page-reload
  */

  const currentFavourites =
    JSON.parse(localStorage.getItem("FavouriteMediaItems")) || [];
  const [favouriteMedia, setFavouriteMedia] = useState(currentFavourites);

  /* ==================================================================================== */

  /* Creating a function to add items to the favourite list. */
  const addMovieItemToFavouriteList = (i, image, name, url) => {
    let favouriteMovieItem = {
      itemId: i,
      itemImage: image,
      itemName: name,
      itemPreviewUrl: url,
    };

    setFavouriteMedia([...favouriteMedia, favouriteMovieItem]);
    addFavouritesToSessionStorage(favouriteMedia);
    console.log(favouriteMedia);
  };

  /* Creating an event handler to update the relevant piece of state (artist)
     when a user enters data into the input field to search for the
     artist they are looking for. */
  const searchInputHandler = (e) => {
    /* Setting a variable to store the text that the user enters
       into the input/search field. */
    let chosenArtist = e.target.value;
    setArtist(chosenArtist);
    console.log(artist);
  };

  /* Creating an asynchronous function to perform the API call using axios. I am requesting the data
     from my local API by setting a variable that contains the URL that needs to be used in order to
     initiate the relevant API call on the local API/Express server.  I have included an if statement to
     check if there is data in the 'artist' piece of state and if there is then the API call will be made,
     if not, an alert will come up asking the user to enter an artists name before trying to search for music.  */
  async function searchForSongs() {
    const apiUrl = `/movies/${artist}`;
    try {
      if (artist) {
        await axios.get(apiUrl).then((res) => {
          const resultsFromApiCall = res.data.results;
          setSearchResults([...resultsFromApiCall]);
          setPageHasLoaded({ pageHasLoaded: true });
          console.log(searchResults);
        });
      } else {
        alert("Please enter an artist's name before searching.");
      }
      {
        /* Catching errors that may occur and I am logging them to the console and alerting
           the user to the error. */
      }
    } catch (e) {
      alert("The error encountered is: " + e.message);
      console.log("The error encountered is: " + e.message);
    }
  }
  /* Creating a function to display the results from the API call onto the DOM. */
  const displayMusicInformation = () => {
    if (searchResults) {
      return (
        <>
          {/* Creating a div and I am giving it a condition in order to only make it
              display on the DOM if the search results have been returned. */}
          <div
            className={`musicInformation ${
              pageHasLoaded ? "musicInformationMaineContainer" : "hideContainer"
            }`}
          >
            {/* I am mapping through the 'searchResults' array and I am using each value from
                the array and I am displaying the relevant values/elements needed in there own 
                individual containers. I am using the index of each element as the key. */}
            {searchResults.map((res, i) => {
              return (
                <div className="individualElementContainer">
                  <a
                    key={i}
                    href={res.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <p className="moviesArtistsName">{res.artistName}</p>
                    <div className="albumArtworkContainer">
                      <div className="moviesAlbumArtworkInnerContainer">
                        <img
                          src={res.artworkUrl100}
                          alt={res.artistName}
                          className="albumArtworkImage"
                        />
                      </div>
                    </div>
                  </a>
                  <button
                    className="favouritesButton"
                    onClick={() =>
                      addMovieItemToFavouriteList(
                        i,
                        res.artworkUrl100,
                        res.artistName,
                        res.previewUrl
                      )
                    }
                  >
                    Add to favourites
                  </button>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  };
  /* Creating a function that I can pass as an onClick function
     to the 'search' button.  This function will run 2 functions
     that are required to obtain the results from the API and display
     them on the web page. */

  function showAll() {
    searchForSongs();
    displayMusicInformation();
  }

  /* Creating a variable that I can use to animate HTML elements on the component. 
     I am using the 'framer-motion' library to add animations to this component. */
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
        <input
          type="text"
          placeholder="Enter artist's name:"
          onChange={searchInputHandler}
          className="artistsInputField"
        />
        <br />
        <br />
        <button className="searchButton" onClick={showAll}>
          Search
        </button>
        <br />
        <br />
      </div>
      {/* Creating a div to contain the results from the 'displayMusicInformation' function. */}
      <div id="outerMusicInfoContainer">{displayMusicInformation()}</div>
      <div className="goToHomeLinkContainer">
        <a href="/" className="goToHomeLink">
          <em>Go to home</em>
        </a>
      </div>
    </div>
  );
}

export default Movies;

/* Resource used: 
   ==========================================================
   YouTube video:
   Video Title: React Movie App Tutorial
   Published By: Chris Blakely
   Date published: 5th November 2020
   Link to video: https://www.youtube.com/watch?v=jc9_Bqzy2YQ
   ==========================================================
*/
