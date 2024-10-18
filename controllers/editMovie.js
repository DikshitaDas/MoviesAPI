const mongoose = require("mongoose"); // Import Mongoose to work with MongoDB

// Define an asynchronous function to edit a movie's details
const editMovie = async (req, res) => {

    const moviesModel = mongoose.model("movies"); // Access the "movies" model

    // Destructure movie details (movie_id, movie_name, info, rating) from the request body
    const { movie_id, movie_name, info, rating } = req.body;

    try {
        // Use the updateMany method to update the movie document with the given _id
        await moviesModel.updateMany(
            { _id: movie_id }, // Find the movie by its ID
            { movie_name: movie_name, info: info, rating: rating }, // Update the movie fields
            { runValidators: true } // Ensure validation rules are applied before saving
        );

        // If successful, send a 200 OK status with a success message
        res.status(200).json({
            status: "Success",
        });
    }
    catch (e) {
        // If there's an error, catch it and send a 400 Bad Request status with an error message
        res.status(400).json({
            status: "failed", // Status indicates failure
            message: e.message, // Provide the error message
        });
        return; // Exit the function to prevent further processing
    }
}

module.exports = editMovie; // Export the function to use in other parts of the application
