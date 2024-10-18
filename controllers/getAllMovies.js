const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define an asynchronous function to get all movies
const getAllMovies = async (req, res) => {

    // Access the "movies" model from Mongoose
    const moviesModel = mongoose.model("movies");


    try{
    // Use the model to fetch all movie documents from the database
    const moviesData = await moviesModel.find({}); // The find({}) method retrieves all records

    // Send a response with a 200 OK status and the retrieved movie data
    res.status(200).json({
        status: "Success", // Status message to confirm successful retrieval
        data: moviesData, // Include the retrieved data in the response
    });
    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message: e.message,
        }); 
    }

    
};

module.exports = getAllMovies; // Export the function to use it in other parts of the application
