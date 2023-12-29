import React from "react";
import ReactDOM from "react-dom/client";
import "./home.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Homelogo from "./assets/homelogo.png";
import Logo from "./assets/logo.png";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img className="h-logo" src={Logo}></img>
        <p>
          1. Press Start to begin selecting <br />
          <br />
          2. Select from the Category menu to begin selection
          <br />
          <br />
          3. Select from the Topic menu to narrow down choice <br />
          <br />
          4. Select one of the SubTopics to get a list of avalible videos
          <br />
          <br />
          5. Select one of the avalible videos to watch the video
        </p>
      </div>
    </div>
  );
};

export default function HomeIcon() {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="container">
      <div className="homeLogo">
        <img src={Homelogo} height="400vh"></img>
      </div>
      <div className="homeText ">
        <h2>HCCC Video Wall</h2>
      </div>
      <div className="buttons">
        <button
          className="redirectButton"
          onClick={() => {
            localStorage.setItem("Selected", JSON.stringify(" Category "));
            localStorage.setItem(
              "CategorySelected",
              JSON.stringify("{ind:-1}")
            );
            localStorage.setItem("TopicSelected", JSON.stringify("{ind:-1}"));
            localStorage.setItem(
              "SubTopicSelected",
              JSON.stringify("{ind:-1}")
            );
            navigate("/home");
          }}
        >
          Tap/Click to Start
        </button>
        <button className="popup-btn" onClick={openPopup}>
          Need Help?
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}
