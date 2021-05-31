import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import allMediaBackgroundImage from "../images/all-media-background.jpg";

function AllMedia() {
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
  const addMediaItemTofavouritelist = (i, image, name, url) => {
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
     if not, an alert will come up asking the user to enter an artists name before trying to search for media.  */
  async function searchForSongs() {
    const apiUrl = `/all/${artist}`;
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
  const displayMediaInformation = () => {
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
                the array and I am displaying the relevant values/elements needed in their own 
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
                    <p className="AllMediaArtistsName">{res.artistName}</p>
                    <div className="albumArtworkContainer">
                      <div className="allMediaAlbumArtworkInnerContainer">
                        <img
                          src={res.artworkUrl100}
                          alt={res.artistName}
                          className="allMediaAlbumArtworkImage"
                        />
                      </div>
                    </div>
                  </a>
                  <button
                    className="favouritesButton"
                    onClick={() =>
                      addMediaItemTofavouritelist(
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
    displayMediaInformation();
  }

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
      {/* Creating a div to contain the results from the 'displayMediaInformation' function. */}
      <div id="outerMusicInfoContainer">{displayMediaInformation()}</div>
      <div className="goToHomeLinkContainer">
        <a href="/" className="goToHomeLink">
          <em>Go to home</em>
        </a>
      </div>
    </div>
  );
}

export default AllMedia;
