import React, { Fragment } from "react";
import "../style/testimonialBanner.css";
import { reviews } from "./Reviews";

const TestimonialBanner: React.FC = () => {
  return (
    <Fragment>
      <section className="customer-testimonials">
        <div>
          <button className="t-left arrow">&lt;</button>
        </div>
        <div className="testimonial-container">
          <h3 className="testimonial-title">Happy Customers</h3>
          <p className="written-testimonial">
            {reviews[0] && reviews[0].review}
          </p>
          <p className="customer-name">{reviews[0] && reviews[0].person}</p>
          <div className="t-selector">
            <div className="round-select"></div>
            <div className="round-select"></div>
          </div>
        </div>
        <div>
          <button className="t-right arrow">&gt;</button>
        </div>
      </section>
    </Fragment>
  );
};

export default TestimonialBanner;
