import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./video.css";
import useMouseTracker from "./MouseTracker";

export default function Video() {
  const navigate = useNavigate();
  const [vid, setvideo] = useState({
    id: 1,
    mediaUrl:
      "https://www.youtube.com/watch?v=S1-17TeZvV0&list=PLVhIhGd17LYjrUSxpjH_1wD2fvP3GVmDb&index=1&t=14s",
    subtopicId: 1,
    thumbnailUrl: "https://i.ytimg.com/vi/S1-17TeZvV0/hq720.jpg",
    title: "A Brief History of Vedas",
  });

  const { id } = useParams();
  const media = "http://apps.livermoretemple.org:9090/api/v1/mediaitems";
  // const { isMouseMoving, timer } = useMouseTracker(650000);
  async function data(list: string) {
    try {
      const response = await fetch(list, {
        headers: {
          Accept: "application/json",
        },
      });
      const resps = await response.json();
      return resps;
    } catch (err) {
      return ["ERROR"];
    }
  }

  useEffect(() => {
    (async () => {
      const _body = await data(media);

      _body.map((item) => {
        if (item["id"] === parseInt(id || "0")) {
          setvideo(item);
        }
      });
    })();
    ``;
  }, []);

  return (
    <div className="container">
      <div className="contentDisplay">
        <div className="return">
          <button
            className="return_button btn-close"
            onClick={() => {
              localStorage.setItem("Selected", JSON.stringify(" Category "));
              navigate("/home");
            }}
          ></button>
        </div>
        <div>
          <iframe
            className="round fullVid"
            src={
              vid["mediaUrl"].replace("watch?v=", "embed/").substring(0, 41) +
              "?autoplay=1"
            }
            height={(9 * (window.innerWidth / 1.2)) / 16}
            width={(16 * (window.innerHeight / 1.2)) / 9}
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
