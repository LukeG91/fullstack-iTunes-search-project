/* Creating the routes for my app in this file which is
   seperate from myServer.js. */

const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const fileHandler = require("fs");
const request = require("request");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// const artist = "50 cent";

/* Adding the code below so that I will be able to pass data
     through the body of the HTTP request.  */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Creating the routes to GET data. */
/* ================================ */

/* Creating a route handler to return the movies for a perticular artists and
   Im limiting the results to 25. */

router.get("/music/:artist", async (req, res) => {
  const chosenArtist = req.params.artist;
  // const artist = "50 cent";

  const urlToUse = `https://itunes.apple.com/search?term=${chosenArtist}&media=music&limit=25`;
  const initiateApiCall = await fetch(urlToUse);
  const musicApiCallResponse = await initiateApiCall.json();
  res.json(musicApiCallResponse);
  console.log(musicApiCallResponse);
});

/* Creating a route handler to return the podcasts for a perticular artists and
   Im limiting the results to 25. */

router.get("/get2", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=podcast&limit=25`,
  }).pipe(res);
});

/* Creating a route handler to return the music for a perticular artists and
   Im limiting the results to 25. */

router.get("/get3", (req, res) => {
  request({
    uri: `https://itunes.apple.com/search?term=${artist}&entity=music&limit=25`,
  }).pipe(res);
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
