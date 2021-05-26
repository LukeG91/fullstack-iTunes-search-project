import React from "react";
import "isomorphic-fetch";
import axios from "axios";
import songsBackgroundImage from "../images/music-background.jpg";

function Songs({ state }) {
  const inputChangeHandler = (e) => {
    let chosenArtist = e.target.value;
    state.artist = chosenArtist;
    console.log(chosenArtist);
  };

  async function searchForSongs(artist) {
    const apiUrl = `/music/${artist}`;

    axios.get(apiUrl, {}).then((res) => {
      const results = res.data.results;
      state.searchResults = JSON.stringify(results);
      console.log(state.searchResults);
      //   state.searchResults = JSON.stringify(results);
      //   console.log(state.searchResults);
    });
  }

  return (
    <div className="mainContainerSongsComponent">
      <img
        src={songsBackgroundImage}
        alt="songs-background-image"
        className="backgroundImage"
      />
      <div className="subContainerSongsComponent">
        <h1 className="pageHeading">
          <em>Welcome to the music section:</em>
        </h1>
        <input
          type="text"
          placeholder="Enter artist's name"
          onChange={inputChangeHandler}
          className=""
        />
        <br />
        <br />
        <button onClick={searchForSongs} className="searchButton">
          Search
        </button>
        <br />
        <br />
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
