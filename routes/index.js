/* Creating the routes for my app in this file which is
   seperate from myServer.js. */

const express = require("express");
const app = express();
const router = express.Router();
// const fileHandler = require("fs");
const request = require("request");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

/* Adding the code below so that I will be able to pass data
   through the body of the HTTP request.  */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Creating the routes to GET data. */
/* ================================ */

/* Creating a route handler to return the movies for a particular artist and
   Im limiting the results to 50. I am using Async/Await functions, this will 
   ensure that the Async function returns a JavaScript Promise.  The Await method 
   then performs an action once the JavaScript Promise has been returned. */

router.get("/movies/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
     This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
     to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
     '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=movie&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const moviesApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
     app to can handler the data as a JSON object. */
  res.json(moviesApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(moviesApiCallResponse);
});

/* Creating a route handler to return the songs for a particular artist and
   Im limiting the results to 50. */

router.get("/music/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
     This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
     to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
     '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=music&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const musicApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
     app to can handler the data as a JSON object. */
  res.json(musicApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(musicApiCallResponse);
});

/* Creating a route handler to return the podcasts for a particular artist and
   Im limiting the results to 50. */

router.get("/podcasts/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
       This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
       to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
       '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=podcast&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const podcastApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
       app to can handler the data as a JSON object. */
  res.json(podcastApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(podcastApiCallResponse);
});

/* Creating a route handler to return the audiobooks for a particular artist and
   Im limiting the results to 50. */

router.get("/audiobooks/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
         This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
         to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
         '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=audiobook&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const audiobookApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
         app to can handler the data as a JSON object. */
  res.json(audiobookApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(audiobookApiCallResponse);
});

/* Creating a route handler to return the short films for a particular artist and
   Im limiting the results to 50. */

router.get("/short-films/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
           This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
           to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
           '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=shortFilm&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const shortFilmsApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
           app to can handler the data as a JSON object. */
  res.json(shortFilmsApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(shortFilmsApiCallResponse);
});

/* Creating a route handler to return the TV shows for a particular artist and
   Im limiting the results to 50. */

router.get("/tv-shows/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
             This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
             to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
             '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=tvShow&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const tvShowsApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
             app to can handler the data as a JSON object. */
  res.json(tvShowsApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(tvShowsApiCallResponse);
});

/* Creating a route handler to return the software for a particular artist and
   Im limiting the results to 50. */

router.get("/software/:name", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
               This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
               to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
               '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=software&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const softwareApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
               app to can handler the data as a JSON object. */
  res.json(softwareApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(softwareApiCallResponse);
});

/* Creating a route handler to return the ebooks for a particular artist and
   Im limiting the results to 50. */

router.get("/ebooks/:name", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
                 This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
                 to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
                 '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=ebook&limit=50`;
  const initiateApiCall = await fetch(urlToUse);
  const ebookApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
                 app to can handler the data as a JSON object. */
  res.json(ebookApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(ebookApiCallResponse);
});

/* Creating a route handler to return all the results for a particular artist. */

router.get("/all/:artist", async (req, res) => {
  /* Setting a variable to take in the name of the artist that will be passed in as a variable from the front-end. 
                   This is done via a proxy which is setup in the front-end's package.json file.   */
  const chosenArtist = req.params.artist;
  /* Setting variables to store the URL that will be needed to connect the API, initiate the connection to the API and 
                   to take the output received from the call and pass in the data as JSON and convert it to a JavaScript object using the
                   '.json()' method. */
  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}`;
  const initiateApiCall = await fetch(urlToUse);
  const allMediaApiCallResponse = await initiateApiCall.json();
  /* Running the res.json() function to set the content-type header to 'application/JSON' in order for the front-end of the
                   app to can handler the data as a JSON object. */
  res.json(allMediaApiCallResponse);
  /* I am using the 'morgan' package from node to display logs on my terminal with output from my server. */
  console.log(allMediaApiCallResponse);
});

/* Creating a route handler to return the music for a perticular artists and
   Im limiting the results to 25. */

router.get("/get4", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=music&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the music videos for a perticular artists and
   Im limiting the results to 25. */

router.get("/get5", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=musicVideo&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the audiobooks for a perticular artists and
   Im limiting the results to 25. */

router.get("/get6", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=audiobook&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the short films for a perticular artists and
   Im limiting the results to 25. */

router.get("/get7", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=shortFilm&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the TV shows for a perticular artists and
   Im limiting the results to 25. */

router.get("/get8", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=tvShow&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the software for a perticular artists and
   Im limiting the results to 25. */

router.get("/get9", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=software&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the ebooks for a perticular artists and
   Im limiting the results to 25. */

router.get("/get10", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=ebook&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return all of the results for a perticular artist. */

router.get("/getAll", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}`,
  }).pipe(res);
});

/* Exporting the router module. */
module.exports = router;
