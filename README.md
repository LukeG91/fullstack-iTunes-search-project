# Welcome to my full stack project that connects to the iTunes media search API and displays informationrelating to the typeof media that the user searches for:

### How to use the app:

`This app will allow the user to select a media type to search for, such as Movies, Music, Ebooks, Podcasts etc.`

`From the home page of the app, select the type of media you wiould like to search for and then enter the name of the artists you are searching for and click on the search button.`

`A list of results will be displayed on the web page. Click on the image returned to open a preview of the song, movie or other media type that you seached for.`

`If you would like to add an item to your favourites, click the 'add to favourites' button that will be visible at the bottom of each element that has been returned from the search.`

`Click on the 'Go to home' link and then click on the 'favourites' tab which will take you to the favourites web page where a list of your favourite items will be displayed.`

### How to install this application on your local machine:

```
Naviagte to the folder on your computer where you store projects.
```

```
Run the following command:
git clone https://github.com/LukeG91/fullstack-media-search-project.git
```

```
Run npm install in both the frontend and backend folders.
```

```
Install the necessary dependancies for the API:
```

```bash
cd backend
npm install express helmet morgan node-fetch nodemon react-router-dom request
```

```
To start the app cd to the frontend folder and run npm start, now cd to the backend folder and npm start.  Once this is done the app will start up and will be ready to use.
```

## To run the tests I have written do the following:

#### Backend:

```
cd backend
npm install chai chai-http mocha should
Run the following to run the test:
npm test
```

#### Frontend:

```
cd frontend
npm install --save-dev react-test-render
Run the following to run the test:
npm test
```

#### Security of the App:

`There were no API keys needed for this build so I did not need to hide any API keys using a .env file.`

`To increased the security of the app, I have added helmet to my API.`

#### Link to my deployed app:

https://fullstack-media-search-project.herokuapp.com/
