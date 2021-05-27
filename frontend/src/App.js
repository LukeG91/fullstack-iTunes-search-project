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
import fetch from "node-fetch";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: "",
      searchResults: [],
      error: "",
      pageHasLoaded: false,
      favoriteMedia: [],
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              <Header />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/podcasts">
              <Podcasts />
            </Route>
            <Route path="/music">
              <Songs state={this.state} />
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

// import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Songs from "./Components/Songs";

// function App() {
//   const [artist, setArtist] = useState("");

//   useEffect(() => {
//     fetch(url)
//       .then((res = res.json()))
//       .then((data = setArtist()));
//   }, [input]);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route exact={true} path="/">
//             <Header />
//           </Route>
//           <Route path="/music">
//             <Songs />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
