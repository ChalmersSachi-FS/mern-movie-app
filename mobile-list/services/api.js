// services/api.js
import axios from "axios";

const API_URL = "http://mern-movie-app-xi.vercel.app"; // Replace with your actual API URL

export const getMovies = async () => {
  const response = await axios.get(`${API_URL}/movies`);
  return response.data;
};

export const addMovie = async (movieData) => {
  const response = await axios.post(`${API_URL}/movies`, movieData);
  return response.data;
};

export const updateMovie = async (id, movieData) => {
  const response = await axios.put(`${API_URL}/movies/${id}`, movieData);
  return response.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${API_URL}/movies/${id}`);
};
