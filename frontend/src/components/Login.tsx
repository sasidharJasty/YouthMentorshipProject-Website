import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username: username,
        password: password,
      });

      // Assuming the Django API returns a token on successful login
      const token = response.data.token;

      // Store the token in local storage (you might want to use more secure storage)
      localStorage.setItem("token", token);

      // Redirect or perform other actions on successful login
      console.log("Login successful!");
    } catch (error: any) {
      console.error("Signup failed:", error.response.data);
    }
  };

  return (
    <div className="flex justify-center content-center w-screen h-screen ">
      <div className="bg-sky-400 h-auto rounded-lg mx-5 my-5 px-3 py-3 justify-center content-center text-center shadow-2xl place-self-center">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
