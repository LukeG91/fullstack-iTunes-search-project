/* Importing my server routes from my index.js file so that I can test the GET */
let api = require("../routes/index");
/* Importing the 'chai' module after I installed it using npm. */
let chai = require("chai");
/* Importing the 'chaiHttp' module. */
let chaiHttp = require("chai-http");

/* Using the should assertion style that is available in chai. */
chai.should();
chai.use(chaiHttp);

/* I am using Mocha to perform the test, it contains 2 important functions.  The describe()
   function is basically there to describe what I am going to be testing in my program. The it()
   function is contains the code that will be performing the test. */
describe("Local API, iTunes media search", () => {
  describe("Testing the GET route on my local api with the route of /music/artist", () => {
    it("TheAPI should return an object with the music results for the artists the user has entered", () => {
      chai
        .request(api)
        .get("/music/50cent")
        .end((response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.length.should.not.be.eq(0);
          done();
        });
    });
  });
});

/* Resource used:
   =====================================================================================
   Website article:
   Title of article:  Testing a REST API in Node JS with Express using Mocha and Chai 
   Link to article:   https://dev.to/mhmdlotfy96/testing-a-rest-api-in-node-js-with-express-using-mocha-and-chai-1258
   Published by:      muhammed Lotfy
   date published:    6th Deceber 2020
   =====================================================================================
*/
