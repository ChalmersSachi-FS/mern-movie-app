import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import MovieDetails from "../src/pages/MovieDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedPage from "./pages/ProtectedPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
