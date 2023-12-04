import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Home from "./homePage";

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
  console.log(user, ID);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
