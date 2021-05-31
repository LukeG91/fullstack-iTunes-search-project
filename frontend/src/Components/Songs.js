import React, { useState } from "react";
import "isomorphic-fetch";
/* Importing axios into my app, Axios is an HTTP client that is used in the browser as well as within Node.js.  Axios is used
   to pass asynchronous HTTP requests to backend API's or end-points in order for CRUD operations to be performed on the data that 
   is being passed from the front-end to backend/API. */
import axios from "axios";
import songsBackgroundImage from "../images/music-background.jpg";

function Songs() {
  /* Setting state */
  const [artist, setArtist] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  /* Creating a function to add favourite items to local storage. */
  const addFavouritesToSessionStorage = (favourites) => {
    localStorage.setItem("FavouriteMediaItems", JSON.stringify(favourites));
  };

  /* Creating a variable to store the favourite items. */
  const currentFavourites =
    JSON.parse(localStorage.getItem("FavouriteMediaItems")) || [];

  /* Setting state for favouriteMedia. */
  const [favouriteMedia, setFavoriteMedia] = useState(currentFavourites);

  /* Creating a function to add an item to a user's favourite list. */
  const addSongItemTofavouritelist = (i, image, name, url) => {
    let favouriteMediaItem = {
      itemId: i,
      itemImage: image,
      itemName: name,
      linkToPreview: url,
    };

    setFavoriteMedia([...favouriteMedia, favouriteMediaItem]);
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
    /* I added the code below as I wanted to check that the type of the variables
       were strings as my search wasn't returning the correct data.*/
    console.log(typeof artist);
    console.log(typeof chosenArtist);
    console.log(typeof favoriteMedia);
  };

  /* Creating an asynchronous function to perform the API call using axios. I am requesting the data
     from my local API by setting a variable that contains the URL that needs to be used in order to
     initiate the relevant API call on the local API/Express server.  I have included an if statement to
     check if there is data in the 'artist' piece of state and if there is then the API call will be made,
     if not, an alert will come up asking the user to enter an artists name before trying to search for music.  */
  async function searchForSongs() {
    const apiUrl = `/music/${artist}`;
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
                    <p className="artistsName">{res.artistName}</p>
                    <div className="albumArtworkContainer">
                      <div className="albumArtworkInnerContainer">
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
                      addSongItemTofavouritelist(
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

  return (
    <div className="mainContainerSongsComponent">
      <img
        src={songsBackgroundImage}
        alt="songs-background-image"
        className="backgroundImage"
      />
      <div className="subContainerSongsComponent">
        <h1 className="songsPageHeading">
          <em>Welcome to the music section:</em>
        </h1>
        {/* Creating an input field to allow the user to type in a specific artist. */}
        <input
          type="text"
          placeholder="Enter artist's name:"
          onChange={searchInputHandler}
          className="artistsInputField"
        />
        <br />
        <br />
        {/* Creating a button to allow the user to search for a specific artist. */}
        <button onClick={showAll} className="searchButton">
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

export default Songs;
