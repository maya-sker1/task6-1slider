import React, { useState } from 'react';
import './Slider.css'
import img1 from '../image/t10.webp'
import img2 from '../image/t11.webp'
import img3 from '../image/t12.webp'
import img4 from '../image/t7.webp'
import img5 from '../image/t9.webp'
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} disabled={currentSlide === 0}>
        Previous
      </button>
      <div className="slide-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <img src={img1} alt="Slide 1" />
          <img src={img2} alt="Slide 2" />
          <img src={img3} alt="Slide 3" />
          <img src={img4} alt="Slide 4" />
          <img src={img5} alt="Slide 5" />
        </div>
      </div>
      <button
        onClick={nextSlide}
        disabled={currentSlide === 5} 
      >
        Next
      </button>
    </div>
  );
};

export default Slider;