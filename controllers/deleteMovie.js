const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define an asynchronous function to delete a movie by its ID
const deleteMovie = async (req, res) => {

    const moviesModel = mongoose.model("movies"); // Access the "movies" model

    const movie_id = req.params.movie_id; // Extract the movie ID from the request parameters

    // Find the movie by its ID
    const getMovie = await moviesModel.findOne({
        _id: movie_id 
    });

    try {
        // If the movie does not exist, throw an error
        if (!getMovie) throw "this movie does not exist";
    } catch (e) {
        // If movie is not found, send a 400 Bad Request status with an error message
        res.status(400).json({
            status: "failed",
            message: e, // Custom error message
        });
        return; // Exit the function to prevent further execution
    }

    try {
        // If the movie exists, delete it from the database
        await moviesModel.deleteOne({
            _id: movie_id 
        });

        // If successful, send a 200 OK status with a success message
        res.status(200).json({
            status: "Movie deleted successfully",
        });
    } catch (e) {
        // If there's an error during deletion, send a 400 Bad Request status with the error message
        res.status(400).json({
            status: "failed", // Status indicates failure
            message: e.message, // Provide the error message from the catch block
        });
        return; // Exit the function
    }
};

module.exports = deleteMovie; // Export the function for use in other parts of the application
