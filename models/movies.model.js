const mongoose = require("mongoose"); // Import Mongoose to work with MongoDB

// Define a schema for movies, specifying the fields and their types
const moviesSchema = new mongoose.Schema({
    movie_name: {
        type: String, // The movie's name must be a string
        require : [true, "Movie name is required!!"] //validation
    },
    info: {
        type: String, // Additional information about the movie (string)
        require : [true, "Movie info is required!!"]  //validation
    },
    rating: {
        type: Number, // Movie's rating must be a number
        require : [true, "Movie rating is required!!"]  //validation
    },
    description: {
        type: String, 
    },
});

// Create a Mongoose model based on the movies schema
// 'movies' is the name of the collection in MongoDB, and moviesSchema defines its structure
const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel; // Export the model to use it in other parts of the application
