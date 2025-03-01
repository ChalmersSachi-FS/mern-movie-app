const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies" });
  }
});

// Get a single movie
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movie" });
  }
});

// Create a movie
router.post("/", async (req, res) => {
  const { title, director, releaseYear } = req.body;
  try {
    const newMovie = new Movie({ title, director, releaseYear });
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    res.status(500).json({ message: "Error creating movie" });
  }
});

// Update a movie
router.put("/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: "Error updating movie" });
  }
});

// Delete a movie
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting movie" });
  }
});

module.exports = router;
