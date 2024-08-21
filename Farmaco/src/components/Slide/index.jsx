import React, { useState } from 'react';
import './index.css';

const slides = [
  '../public/images/farmarcia-cartoes.PNG.png',
  '../public/images/farmarcia-placa.PNG.png',
  '../public/images/farmarcia.PNG.png',
  '../public/images/farmarcia-camiseta.PNG.png',
  '../public/images/farmarcia-camisetas.PNG.png',
];

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="slideshow-container">
        <button className="nav-button prev" onClick={goToPreviousSlide}>
          &lt;
        </button>
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
        <button className="nav-button next" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    );
  };
  
  export default SlideShow;