// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="AddMovie" component={AddMovie} />
        <Stack.Screen name="EditMovie" component={EditMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
