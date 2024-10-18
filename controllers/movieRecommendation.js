const { Configuration, OpenAIApi } = require("openai"); // Import OpenAI client library
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction

// Asynchronous function to handle movie recommendations based on stored movies
const movieRecommendation = async (req, res) => {
  const moviesModel = mongoose.model("movies"); // Get the 'movies' model from Mongoose

  // Retrieve all movies from the database using the movies model
  const allMovies = await moviesModel.find({});

  // Create a string of all movie names by mapping the movie array and joining them with commas
  const moviesString = allMovies.map((el) => el.movie_name).join(",");

  // Create a prompt for OpenAI by embedding the movie names in the request
  const prompt = `I need a movie recommendation based on these movies: ${moviesString}. Provide me with 10 suggestions! Separate movies with commas`;

  // Log the prompt for debugging purposes
  console.log(prompt);

  // Create a new OpenAI configuration object using the API key from environment variables
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Initialize the OpenAI client with the configuration
  const openai = new OpenAIApi(configuration);

  try {
    // Request a movie recommendation from OpenAI with the specified model and prompt
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo", // Specify the OpenAI model to use
      prompt: prompt, // Send the prompt to OpenAI
      max_tokens: 100, // Limit the number of tokens in the response
    });

    // Send a response back to the client with the movie suggestions from OpenAI
    res.status(200).json({
      suggestions: completion.data.choices[0].text, // Extract and return the suggestions from OpenAI
    });
  } catch (e) {
    // Handle any errors by sending a failure response
    res.status(400).json({
      status: "failed", // Indicate failure status
      message: "Couldn't get recommendations", // Provide error message
    });
    return;
  }
};

module.exports = movieRecommendation; // Export the function for use in other parts of the application
