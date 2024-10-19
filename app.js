require("express-async-errors"); //must be in start of the code


const express = require("express");
const app = express();




app.use(express.json()); // it is middleware in Express.js that parses incoming JSON request bodies. It allows your application to handle and understand JSON data sent in requests (like from APIs).

require("dotenv").config(); //Install dotenv
//In the root directory of your project, create a file named .env. This file will store all your environment variables.

const addMovie = require("./controllers/addMovie"); //addMovie: Imports the addMovie function from the controllers/addMovie.js file. This function will handle the logic for adding a movie.
const getAllMovies = require("./controllers/getAllMovies"); 
const getSingleMovie = require("./controllers/getSingleMovie"); 
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");

//openai
const movieRecommendation = require("./controllers/movieRecommendation");
 


const mongoose = require("mongoose");
const errorHandler = require("./handlers/errorHandlers");

require("./models/movies.model")

// connect with the cluster along with the password of the mongoDB database
mongoose.connect(process.env.mongo_connection, {}) //Access the MongoDB URI and port from environment variables
.then(() => {
    // Callback function if the connection is successful
    console.log("Connected to MongoDB successfully");
})
.catch((err) => {
    // Callback function if the connection fails, including error details
    console.error("Connection to MongoDB failed", err);
}); 


//routes

app.post("/api/movies", addMovie);//POST /api/movies: Defines a route that listens for POST requests at the /api/movies endpoint. When such a request is received, the addMovie controller function is invoked.
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);
//openAI sugesstions
app.get("/api/movies/openai/getRecommendations", movieRecommendation);


//error handler - must be end of the route
app.use(errorHandler);

app.listen(8000, () => {
console.log("server started at port 8000");
}) //listen: Starts the server and makes it listen on port 8000. Once the server is running, it logs a message to the console.
