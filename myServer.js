const express = require("express");

/* Importing the helmet module so I can use it to improve the security of my code. */
const helmet = require("helmet");

/* Morgan is used as a request logger for HTTP middleware in Node.js.  It is used to make the process
   of logging requests to the web app simpler.  */
const morgan = require("morgan");

/* Importing the file (index.js) that contains the server routes. */
const serverRoutes = require("./routes/index");

/*Initialising express. */

const app = express();

/* App middleware. */
/* I am adding the code below (app.use) in order for the application to be able to accept
   incoming JSON requests. I am also using helmet to improve the security of my code. */

app.use(express.json());
app.use(morgan("dev"));
/* Resourced used for the helmet code below: 
   Stack Overflow article: 
   Title: Helmet causing MERN app hosted on heroku cause ERROR: Refused to execute inline script because it violates the following
   Date article was posted: +- February (3 months ago from May 23rd 2021)
   Link to article: https://stackoverflow.com/questions/65890616/helmet-causing-mern-app-hosted-on-heroku-cause-error-refused-to-execute-inline
*/
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fullstack-media-search-project.herokuapp.com/",
        ],
        imgSrc: ["'self'", "https://*.com"],
      },
    },
  })
);

/* Telling the server that at the endpoint '/', the routes defined in the index.js
   file should be used. */

app.use("/", serverRoutes);

/* Calling React build assets. */
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

/* Setting the port as an environment variable and I am making
   the server listen on port 3001. */
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}: \nBrowse to http://localhost:5050 to see the server.`
  );
});
