const mongoose = require("mongoose");

const addMovie = async (req, res) => {
    // addMovie: A function that handles the logic for adding a movie. Currently, it sends a JSON response indicating the route is active.

    const moviesModel = mongoose.model("movies"); // Access the "movies" model

    //console.log(req.body);
   
    // Destructure movie details (movie_id, movie_name, info, rating) from the request body
    const {movie_name, info, rating, description} = req.body;

    //validation

    try{
        if(!movie_name) throw "movie name must be provided!";
        if(!info) throw "info must be provided!";
        if(!rating) throw "rating must be provided!";
        if(rating<1 || rating>10) throw "rating must be between 1-10!"

    }
    catch(e) {
        res.status(400).json({
            status: "failed", // Indicate the status of the request
            message: e,
        });
            return; // Exit the function to prevent further processing
    }


    //success

    try{
        //create object
        const createdMovie = await moviesModel.create({
        movie_name : movie_name,
        info : info,
        rating : rating,
        description : description
    })
    console.log(createdMovie);
    }
    catch(e) {
        res.status(400).json({
            status: "failed",
            message: "movie creation failed. Something went wrong",
        });
            return;
    }
  

    

    res.status(200).json({
        status : "this is to add a movie route",
        message : "movie added successfully",
        
    });
    //Status 200 means "OK",
}
module.exports = addMovie; //module.exports: Exports the addMovie function so it can be imported and used in other files (like app.js).

