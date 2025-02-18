require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("./models/Movie");

const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    director: "Christopher Nolan",
  },
  {
    title: "The Matrix",
    genre: "Action",
    releaseYear: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    director: "Christopher Nolan",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    director: "Christopher Nolan",
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    director: "Quentin Tarantino",
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    director: "Robert Zemeckis",
  },
  {
    title: "Gladiator",
    genre: "Action",
    releaseYear: 2000,
    director: "Ridley Scott",
  },
  {
    title: "Titanic",
    genre: "Romance",
    releaseYear: 1997,
    director: "James Cameron",
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    director: "Frank Darabont",
  },
  {
    title: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    director: "Francis Ford Coppola",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    releaseYear: 2003,
    director: "Peter Jackson",
  },
  {
    title: "Avengers: Endgame",
    genre: "Superhero",
    releaseYear: 2019,
    director: "Anthony Russo, Joe Russo",
  },
  {
    title: "The Lion King",
    genre: "Animation",
    releaseYear: 1994,
    director: "Roger Allers, Rob Minkoff",
  },
  {
    title: "Joker",
    genre: "Drama",
    releaseYear: 2019,
    director: "Todd Phillips",
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Superhero",
    releaseYear: 2021,
    director: "Jon Watts",
  },
];

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    await Movie.deleteMany(); // Clear existing data
    await Movie.insertMany(movies);
    console.log("Movies inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
