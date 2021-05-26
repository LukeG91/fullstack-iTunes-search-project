import React from "react";
import "isomorphic-fetch";
import axios from "axios";

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
    <div>
      <h1>Welcome to the songs page:</h1>
      <input
        type="text"
        placeholder="Enter artist's name"
        onChange={inputChangeHandler}
      />
      <br />
      <br />
      <button onClick={searchForSongs}>Search</button>
      <br />
      <br />
    </div>
  );
}

export default Songs;
