import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const moveToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length); // Loop back to the first slide
  };

  const moveToPreviousSlide = () => {
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button onClick={moveToPreviousSlide} className="carousel-button prev">
        &#10094;
      </button>
      <div
        className="carousel-track"
        ref={slideRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {/* <h2 className="carousel-title">Projects</h2>{" "} */}
            {/* Add Projects heading */}
            <img src={slide.url} alt={`Slide ${index}`} />
            <div className="carousel-overlay"></div>
            <div className="carousel-content">
              <h3>
                <a href="">{slide.name}</a>
              </h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={moveToNextSlide} className="carousel-button next">
        &#10095;
      </button>

      {/* Add dots for slide navigation */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
