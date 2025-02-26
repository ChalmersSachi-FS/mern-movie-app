import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movies from the backend
    axios
      .get("http://localhost:5002/api/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movies: {error.message}</div>;
  }

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} - {movie.director} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
