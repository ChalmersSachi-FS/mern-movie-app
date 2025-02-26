// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff", // White background for the app
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#3498db", // Primary color for headers
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5, // Rounded corners for input fields
  },
  button: {
    backgroundColor: "#3498db", // Primary button color
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff", // White text for buttons
    fontWeight: "bold",
  },
  movieItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee", // Light gray for item separation
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieDirector: {
    fontSize: 16,
    color: "#666666", // Gray color for director names
  },
});

export default styles;
