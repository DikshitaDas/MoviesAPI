const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
 
    const moviesModel = mongoose.model("movies");

    try{
        // Try to find the movie in the database by its ID, which is passed as a URL parameter
    const moviesData = await moviesModel.find({
        _id: req.params.movie_id // req.params.movie_id contains the movie ID from the request URL
    });


    res.status(200).json({
        status: "Success",
        data: moviesData,
    });
    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message: e.message,
        }); 
        return;
    }
    
};
module.exports = getSingleMovie;


