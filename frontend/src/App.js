/* Importing the modules and components that are needed. */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Songs from "./Components/Songs";
import Favourites from "./Components/Favourites";
import Movies from "./Components/Movies";
import Podcasts from "./Components/Podcasts";
import AudioBooks from "./Components/AudioBooks";
import ShortFilms from "./Components/ShortFilms";
import TvShows from "./Components/TvShows";
import Software from "./Components/Software";
import Ebooks from "./Components/Ebooks";
import AllMedia from "./Components/AllMedia";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  /* I am rendering the different React components based on the
     URL that the user browses to. I am performing the routing by using 
     the 'BrowserRouter, Switch, Route' modules from react-router-dom. */

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              <Header />
            </Route>
            <Route path="/movies">
              <Movies
                addMovieItemToFavouriteList={this.addMovieItemToFavouriteList}
              />
            </Route>
            <Route path="/podcasts">
              <Podcasts />
            </Route>
            <Route path="/music">
              <Songs />
            </Route>
            <Route path="/audiobooks">
              <AudioBooks />
            </Route>
            <Route path="/short-films">
              <ShortFilms />
            </Route>
            <Route path="/tv-shows">
              <TvShows />
            </Route>
            <Route path="/software">
              <Software />
            </Route>
            <Route path="/ebooks">
              <Ebooks />
            </Route>
            <Route path="/all">
              <AllMedia />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
