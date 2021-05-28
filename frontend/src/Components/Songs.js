import React, { useState } from "react";
import "isomorphic-fetch";
/* Importing axios into my app, Axios is an HTTP client that is used in the browser as well as within Node.js.  Axios is used
   to pass asynchronous HTTP requests to backend API's or end-points in order for CRUD operations to be performed on the data that 
   is being passed from the front-end to backend/API. */
import axios from "axios";
import songsBackgroundImage from "../images/music-background.jpg";

function Songs() {
  /* Setting state for this component. */
  const [artist, setArtist] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [pageHasLoaded, setPageHasLoaded] = useState(false);
  const [favoriteMedia, setFavoriteMedia] = useState([]);
  /* Creating an event handler to update the relevant piece of state (artist)
     when a user enters data into the input field to search for the
     artist they are looking for. */

  const inputChangeHandler = (e) => {
    let chosenArtist = e.target.value;
    setArtist(chosenArtist);
    // state.artist = chosenArtist;
    console.log(artist);
    console.log(typeof artist);
    console.log(typeof chosenArtist);
  };

  /* Creating an asynchronous function to perform the API call using axios. I am requesting the data
     from my local API by setting a variable that contains the URL that needs to be used in order to
     initiate the elevant API call on the local API/Express server.  I have included an if statement to
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
          // state.searchResults = resultsFromApiCall;
          // state.pageHasLoaded = true;
          // console.log(resultsFromApiCall);
          console.log(searchResults);
          console.log(pageHasLoaded);
          console.log(resultsFromApiCall);
          console.log(Array.isArray(resultsFromApiCall));
          console.log(Array.isArray(searchResults));
        });
      } else {
        alert("Please enter an artist's name before searching.");
      }
      {
        /* Catching errors that may occur and I am loggin them to the console and alerting
           the user to the error. */
      }
    } catch (e) {
      alert("The error encountered is: " + e.message);
      console.log("The error encountered is: " + e.message);
    }
  }

  const displayMusicInformation = () => {
    if (searchResults) {
      return (
        <>
          <div
            className={`musicInformation ${
              pageHasLoaded ? "musicInformationMaineContainer" : "hideContainer"
            }`}
          >
            {searchResults.map((res, index) => {
              return (
                <div className="individulaSongContainer">
                  <a
                    key={index}
                    href={res.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="linkToSong"
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
                </div>
              );
            })}
          </div>
        </>
      );
    }
  };

  /* I am trying to create a function to append the results from the displayMusicInformation function to the div with the ID of 
     'outerMusicInfoContainer' but it returns [object object] on the web page. */

  // function append() {
  //   let myDiv = document.getElementById("outerMusicInfoContainer");
  //   myDiv.append({ displayMusicInformation });
  // }

  // const myElement = <div> {displayMusicInformation()} </div>;

  // function append() {
  //   let container = document.getElementById("outerMusicInfoContainer");
  //   container.append(myElement);
  // }

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
        <input
          type="text"
          placeholder="Enter an artist's name:"
          onChange={inputChangeHandler}
          className="artistsInputField"
        />
        <br />
        <br />
        <button onClick={showAll} className="searchButton">
          Search
        </button>

        <br />
        <br />
      </div>

      <div
        id="outerMusicInfoContainer"

        // className={`outerMusicInfoContainer ${
        //   state.pageHasLoaded ? "showContainer" : "hideContainer"
        // }`}
      >
        {/* It works if I uncomment the line below and re-save the component but it doesnt update automatically.  */}{" "}
        {displayMusicInformation()}
      </div>

      <div className="goToHomeLinkContainer">
        <a href="/" className="goToHomeLink">
          <em>Go to home</em>
        </a>
      </div>
    </div>
  );
}

export default Songs;
