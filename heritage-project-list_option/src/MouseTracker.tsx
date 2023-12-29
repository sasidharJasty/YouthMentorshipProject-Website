import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useMouseTracker = (timeout = 5000) => {
  const [isIdle, setisIdle] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [timer, setTimer] = useState(timeout);
  const [idleRedirectTimer, setidleRedirectTimer] = useState(60 * 1000); //1 minute to become active again else redirect to home page

  const navigate = useNavigate();

  localStorage.setItem("idleRedirectTimer", JSON.stringify(idleRedirectTimer));

  if (isMouseMoving === false) {
    setisIdle(true);

    //start idle countdown timer

    useEffect(() => {
      const interval = setInterval(() => {
        localStorage.setItem(
          "idleRedirectTimer",
          JSON.stringify(idleRedirectTimer - 1)
        );
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    //end idle countdown timer
    navigate("/");
  }

  useEffect(() => {
    let mouseTimer;

    const handleMouseMove = () => {
      setIsMouseMoving(true);

      // Clear the existing timer, if any
      clearTimeout(mouseTimer);

      // Set a new timer to consider the mouse as not moving after the specified timeout
      mouseTimer = setTimeout(() => {
        setIsMouseMoving(false);
      }, timeout);

      // Update the timer value
      setTimer(timeout / 1000); // convert milliseconds to seconds
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener and timer on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, [timeout]);

  return { isMouseMoving, timer, isIdle };
};

export default useMouseTracker;
