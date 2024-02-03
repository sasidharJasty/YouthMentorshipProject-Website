import React, { useState } from "react";
import "./Carousel.css";
import left_arr from "../images/left.png";
import right_arr from "../images/right.png";

interface CarouselProps {
  display: string[];
  length: number;
  message: string;
}

const Carousel: React.FC<CarouselProps> = ({ display, length, message }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    const newStartIndex = (startIndex - 1 + length) % length;
    setStartIndex(newStartIndex);
  };

  const handleNext = () => {
    const newStartIndex = (startIndex + 1) % length;
    setStartIndex(newStartIndex);
  };

  const visibleImages = [];
  for (let i = 0; i < 3; i++) {
    const index = (startIndex + i) % length;
    visibleImages.push(display[index]);
  }

  return (
    <>
      <h1 className="Message text-center font-bold">{message}</h1>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrevious}>
          <img src={left_arr} className="carousel-btn"></img>
        </button>
        <div className="carousel flex">
          {visibleImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${startIndex + index}`} />
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}>
          <img src={right_arr} className="carousel-btn"></img>
        </button>
      </div>
    </>
  );
};

export default Carousel;
