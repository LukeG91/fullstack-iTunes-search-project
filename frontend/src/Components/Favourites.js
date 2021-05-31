import React, { useState } from "react";
import "../App.css";

export const Favourites = () => {
  /* Creating a function to pull the favourite media items from local storage 
     and I am storing them in an array. */
  const favourites = JSON.parse(localStorage.getItem("FavouriteMediaItems"));

  /* Setting state. */
  const [userFavourites, setUserFavourites] = useState(favourites);

  /* creating a function to remove items from the users list of favouries. */
  const removeItemFromFavouriteList = (res) => {
    setUserFavourites(userFavourites.filter((i) => i.itemId !== res.itemId));
    localStorage.setItem("FavouriteMediaItems", JSON.stringify(userFavourites));
    console.log(userFavourites);
    console.log(favourites);
  };

  /* Creating a function to display the results within the 'userFavourites' array onto the DOM. */
  const displayFavouriteList = () => {
    return (
      <>
        {/* Creating a div container for the favourite media items. */}
        <div className="musicInformationMaineContainer">
          {/* I am mapping through the 'searchResults' array and I am using each value from
              the array and I am displaying the relevant values/elements needed in there own 
              individual containers. I am using the index of each element as the key. */}
          {userFavourites.map((res) => {
            return (
              <div className="individualElementContainer">
                <a
                  key={res.itemId}
                  href={
                    res.itemPreviewUrl || res.linkToPreview || res.trackViewUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <p className="favouriteArtistsName">{res.itemName}</p>
                  <div className="albumArtworkContainer">
                    <div className="favouritesAlbumArtworkInnerContainer">
                      <img
                        src={res.itemImage}
                        alt={res.itemName}
                        className="favouritesAlbumArtworkImage"
                      />
                    </div>
                  </div>
                </a>
                <button
                  className="favouritesButton"
                  onClick={() => removeItemFromFavouriteList(res)}
                >
                  Remove from favourites
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="favouritesMainContainer">
      <h1 className="pageHeading">
        <em>Your list of favourites:</em>
      </h1>
      <div id="outerMusicInfoContainer">{displayFavouriteList()}</div>
      <div className="goToHomeLinkContainer">
        <a href="/" className="goToHomeLink">
          <em>Go to home</em>
        </a>
      </div>
    </div>
  );
};

export default Favourites;

/* Resource used: 
   ==========================================================
   YouTube video:
   Video Title: React Movie App Tutorial
   Published By: Chris Blakely
   Date published: 5th November 2020
   Link to video: https://www.youtube.com/watch?v=jc9_Bqzy2YQ
   ==========================================================
*/
