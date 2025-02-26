// components/EditMovie.js
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { updateMovie } from "../services/api";

const EditMovie = ({ route, navigation }) => {
  const { movie } = route.params; // Get the movie object passed from the MovieList
  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);

  const handleUpdateMovie = async () => {
    const movieData = { title, director, releaseDate };
    await updateMovie(movie._id, movieData); // Update the movie using its ID
    navigation.navigate("MovieList"); // Navigate back to the movie list after updating
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Movie</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Director"
        value={director}
        onChangeText={setDirector}
      />
      <TextInput
        style={styles.input}
        placeholder="Release Date"
        value={releaseDate}
        onChangeText={setReleaseDate}
      />
      <Button title="Update Movie" onPress={handleUpdateMovie} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default EditMovie;
