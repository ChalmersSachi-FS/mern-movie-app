import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    localStorage.setItem("token", res.data.token);
    alert("Logged in successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
