import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Home from "./homePage";
import Hours from "./hours";
const AppRouter = () => {
  const [user, setuser] = useState({
    User: "false",
    Username: "Username",
    Id: -999,
  });
  const [ID, setID] = useState(-999);
  function handleLogin(val: { User: string; Username: string; Id: number }) {
    setuser(val);
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/hours" element={<Hours />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
