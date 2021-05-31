import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import shortFilmsBackgroundImage from "../images/short-films-background.jpg";

function ShortFilms() {
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
  const addShortFilmItemTofavouritelist = (i, image, name, url) => {
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
  };

  /* Creating an asynchronous function to perform the API call using axios. I am requesting the data
     from my local API by setting a variable that contains the URL that needs to be used in order to
     initiate the relevant API call on the local API/Express server.  I have included an if statement to
     check if there is data in the 'artist' piece of state and if there is then the API call will be made,
     if not, an alert will come up asking the user to enter an artists name before trying to search for short films.  */
  async function searchForSongs() {
    const apiUrl = `/short-films/${artist}`;
    try {
      if (artist) {
        await axios.get(apiUrl).then((res) => {
          const resultsFromApiCall = res.data.results;
          setSearchResults([...resultsFromApiCall]);
          setPageHasLoaded({ pageHasLoaded: true });
          console.log(searchResults);
          if (searchResults < 1) {
            alert("There are no results for your search, please try again.");
          }
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
    if (searchResults.length >= 1) {
      return (
        <>
          {/* Creating a div and I am giving it a condition in order to onlymake it
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
                    href={res.trackViewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <p className="artistsName">{res.artistName}</p>
                    <div className="albumArtworkContainer">
                      <div className="podcastsAlbumArtworkInnerContainer">
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
                      addShortFilmItemTofavouritelist(
                        i,
                        res.artworkUrl100,
                        res.artistName,
                        res.trackViewUrl
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

export default ShortFilms;
