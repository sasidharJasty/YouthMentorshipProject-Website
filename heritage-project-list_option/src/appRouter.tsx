import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import App from "./mainLayout";
import Video from "./video";
import HomeIcon from "./home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomeIcon />} />
        <Route path="/home" element={<App />} />
        <Route path="/:id" element={<Video />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
