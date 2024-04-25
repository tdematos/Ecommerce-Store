import React, { Fragment } from "react";
import "../style/testimonialBanner.css";

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
            "I can't believe I did not buy this item sooner, next time I will
            buy two!"
          </p>
          <p className="customer-name">- JOHN, MEMBER SINCE OCTOBER 2021</p>
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
