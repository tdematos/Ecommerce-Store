import React, { useState } from "react";
import "../style/testimonialBanner.css";
import { reviews } from "./Reviews";

const TestimonialBanner: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleRightArrowClick = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleLeftArrowClick = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleBallClick = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <section className="customer-testimonials">
      <div>
        <button className="t-left arrow" onClick={handleLeftArrowClick}>
          &lt;
        </button>
      </div>
      <div className="testimonial-container">
        <h3 className="testimonial-title">Happy Customers</h3>
        <p className="written-testimonial">
          {reviews[currentTestimonialIndex] &&
            reviews[currentTestimonialIndex].review}
        </p>
        <p className="customer-name">
          {reviews[currentTestimonialIndex] &&
            reviews[currentTestimonialIndex].person}
        </p>
        <div className="t-selector">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`round-select ${
                index === currentTestimonialIndex ? "active" : ""
              }`}
              onClick={() => handleBallClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <button className="t-right arrow" onClick={handleRightArrowClick}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TestimonialBanner;
