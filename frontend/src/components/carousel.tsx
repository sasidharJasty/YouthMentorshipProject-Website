/*import React, { useState } from "react";

interface CarouselProps {
  display: string[];
  length: number;
}

const Carousel: React.FC<CarouselProps> = ({ display, length }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel flex w-full">
      <button onClick={handlePrevious}>◀︎</button>
      {index >= 1 && index <= length - 1 ? (
        <>
          <img src={display[index - 1]} alt={`${index - 1}`} />
          <img src={display[index]} alt={`${index}`} />
          <img src={display[index + 1]} alt={`${index + 1}`} />
        </>
      ) : null}
      {index > length - 1 ? (
        <>
          <img src={display[index - 1]} alt={`${index - 1}`} />
          <img src={display[index]} alt={`${index}`} />
          <img src={display[0]} alt={`0`} />
        </>
      ) : null}
      {index === 0 ? (
        <>
          <img src={display[length - 1]} alt={`${length - 1}`} />
          <img src={display[index]} alt={`${index}`} />
          <img src={display[index + 1]} alt={`${index + 1}`} />
        </>
      ) : null}

      <button onClick={handleNext}>▶︎</button>
    </div>
  );
};

export default Carousel;*/

import React, { useState } from "react";
import "./Carousel.css"; // Import a separate CSS file for styling

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
          ◀︎
        </button>
        <div className="carousel flex">
          {visibleImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${startIndex + index}`} />
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}>
          ▶︎
        </button>
      </div>
    </>
  );
};

export default Carousel;
