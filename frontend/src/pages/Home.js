import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <Link to={`/movies/${movie._id}`}>
              {movie.title} ({movie.releaseYear})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
