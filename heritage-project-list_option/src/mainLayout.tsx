import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import Logo from "./assets/logo.png";
import "./mainLayout.css";
import List from "./lists.tsx";
import { BrowserRouter } from "react-router-dom";
import Video from "./video.tsx";
// import useMouseTracker from "./MouseTracker";

/* 
- Add carousel for displayContent
- Add timeout feature - add countdown at top left or top right indicating time left before redirection
- colorful borders and enhanced UI
*/

//var category = "http://209.182.219.245:3000/menus";
//var topics = "http://209.182.219.245:3000/topics";
//var subtopics = "http://209.182.219.245:3000/subtopics";

var category = "http://apps.livermoretemple.org:9090/api/v1/categories";
var topics = "http://apps.livermoretemple.org:9090/api/v1/categories";
var subtopics = "http://apps.livermoretemple.org:9090/api/v1/topics";

function isTouchDevice() {
  return "ontouchstart" in window;
}

function App() {
  const navigate = useNavigate();
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [idleRedirectTimer, setIdleRedirectTimer] = useState(60);
  const idleTimerRef = useRef(null);

  const handleOnActive = () => {
    setIsMouseMoving(true);
    setIdleRedirectTimer(60);
    navigate("/");
  };

  const handleOnIdle = () => {
    setIsMouseMoving(false);
  };

  useIdleTimer({
    ref: idleTimerRef,
    timeout: idleRedirectTimer * 1000,
    promptBeforeIdle: (idleRedirectTimer - 1) * 1000,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    let countdownTimer;

    const handleCountdown = () => {
      setIdleRedirectTimer((prevTimer) => Math.max(0, prevTimer - 1));
    };

    if (!isMouseMoving && idleRedirectTimer > 0) {
      countdownTimer = setInterval(handleCountdown, 1000);
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [isMouseMoving, idleRedirectTimer]);

  useEffect(() => {
    let mouseTimer;

    const handleMouseMove = () => {
      setIsMouseMoving(true);

      // Clear the existing timer, if any
      clearTimeout(mouseTimer);

      // Set a new timer to consider the mouse as not moving after the specified timeout
      mouseTimer = setTimeout(() => {
        setIsMouseMoving(false);
      }, 5000); // 5 seconds timeout

      // Update the idle redirect timer
      setIdleRedirectTimer(60);
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener and timer on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, []);

  const [Final, setFinal] = useState(-1);
  const [Media, setMedia] = useState(["PKS"]);

  const handleClickCat = async (item) => {
    if (item !== undefined) {
      let sitem: number = item[0] === "null" ? "0" : item;

      if (sitem.toString() !== "random") {
        setFinal(sitem);
        const body = await data(
          "http://apps.livermoretemple.org:9090/api/v1/subtopics/" +
            sitem.toString() +
            "/mediaitems"
        );

        setMedia(
          await data(
            "http://apps.livermoretemple.org:9090/api/v1/subtopics/" +
              sitem.toString() +
              "/mediaitems"
          )
        );

        console.log(body);
        if (body.length === 0 && item[0] !== "null") {
          setMedia(["No Content Found"]);
        }
        if (body.length === 0 && item[0] === "null") {
          setMedia(["PKS"]);
        }
      }
    } else {
      setMedia(["No Content Found"]);
    }

    if (item === "random") {
      setMedia(["Error"]);
    }
  };

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

  return (
    <div className="container">
      {/*onMouseMove={handleMouseMove}*/}

      <div className="row">
        <div className="idleTimer d-absolute">
          <p>
            {isMouseMoving ? null : (
              <>
                Idle detected for{" "}
                <strong className="bold-timer">
                  {-idleRedirectTimer + 60}
                </strong>
                seconds.
                <br /> Redirecting in{" "}
                <strong className="bold-timer">{idleRedirectTimer}</strong>{" "}
                seconds.
              </>
            )}
          </p>
        </div>
        <div className="headTitle ">
          <h1 className="fw-bold">HCCC Video Wall</h1>
        </div>
        <div className="listMenus col-4">
          {/* @t-s */}
          <List
            cat={category}
            top={topics}
            subTop={subtopics}
            handleClick={handleClickCat}
            end={"/?null=null"}
          />
        </div>
        <div className=" displayContent col-8 h-75">
          {Media[0] !== "null" &&
          Media[0] !== "No Content Found" &&
          Media[0] !== "PKS" &&
          Media[0] !== "Error"
            ? Media.map((item) => (
                <div className="vert text-center ">
                  <img
                    className="round if-view"
                    height={(9 * (window.innerWidth / 39.3)) / 16}
                    src={item["thumbnailUrl"]}
                    onClick={() => {
                      navigate("/" + item["id"], {
                        state: { key: "value" },
                      });
                    }}
                  ></img>
                  <h3 className="sTitle">{item["title"]}</h3>
                </div>
              ))
            : null}
          {Media[0] === "No Content Found" ? (
            <div className="d-flex justify-content-center text-center align-items-center  ">
              <div className="center-block shadow-lg p-3 mb-5  rounded display-text">
                <img src={Logo}></img>
                <h2 className="dTitle">
                  <strong>No content with this selection exists.</strong>
                </h2>
              </div>
            </div>
          ) : null}
          {Media[0] === "Error" ? (
            <div className="d-flex justify-content-center text-center align-items-center  ">
              <div className="center-block shadow-lg p-3 mb-5  rounded display-text">
                <img src={Logo}></img>
                <h2 className="dTitle">
                  <strong>
                    An error occured. Please <strong>re-select</strong> from the
                    previous menu.
                  </strong>
                </h2>
              </div>
            </div>
          ) : null}

          {Media[0] === "PKS" ? (
            <div className="d-flex justify-content-center text-center align-items-center  ">
              <div className="center-block shadow-lg p-3 mb-5  rounded display-text">
                <img src={Logo}></img>
                <h2 className="dTitle">
                  <strong>
                    Please select from the
                    <strong>
                      {JSON.parse(localStorage.getItem("Selected") || "next")}
                    </strong>
                    menu.
                  </strong>
                </h2>
                {JSON.parse(localStorage.getItem("Selected") || "next") ===
                  " Subtopic " && (
                  <h4 className="instructionTitle">
                    On the next page, click a <strong>Thumbnail</strong> to see
                    the video.
                  </h4>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
