// components/MovieList.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { getMovies, deleteMovie } from "../services/api";

const MovieList = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate("EditMovie", { movie: item })}
            />
            <Button title="Delete" onPress={() => handleDelete(item._id)} />
          </View>
        )}
      />
      <Button
        title="Add Movie"
        onPress={() => navigation.navigate("AddMovie")}
      />
    </View>
  );
};

export default MovieList;
