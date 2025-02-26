// components/AddMovie.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { addMovie } from "../services/api";

const AddMovie = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleAddMovie = async () => {
    const movieData = { title, director, releaseDate };
    await addMovie(movieData);
    navigation.navigate("MovieList"); // Navigate back to the movie list after adding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Movie</Text>
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
      <Button title="Add Movie" onPress={handleAddMovie} />
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

export default AddMovie;
