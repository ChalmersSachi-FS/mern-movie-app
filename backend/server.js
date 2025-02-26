require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // Allows parsing of incoming JSON data
app.use(cors()); // Allows cross-origin requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Movie Schema & Model
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  created_at: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

// CRUD Routes

// Get all movies
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).json({ message: "Error fetching movies" });
  }
});

// Get a single movie
app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    console.error("Error fetching movie:", err);
    res.status(500).json({ message: "Error fetching movie" });
  }
});

// Create a movie
app.post("/api/movies", async (req, res) => {
  const { title, director, releaseYear } = req.body;
  const newMovie = new Movie({ title, director, releaseYear });
  try {
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    console.error("Error creating movie:", err);
    res.status(500).json({ message: "Error creating movie" });
  }
});

// Update a movie
app.put("/api/movies/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(updatedMovie);
  } catch (err) {
    console.error("Error updating movie:", err);
    res.status(500).json({ message: "Error updating movie" });
  }
});

// Delete a movie
app.delete("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json({ message: "Movie deleted" });
  } catch (err) {
    console.error("Error deleting movie:", err);
    res.status(500).json({ message: "Error deleting movie" });
  }
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
