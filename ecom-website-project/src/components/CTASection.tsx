import React, { Fragment } from "react";
import "../style/cta-section.css";

const CTASection: React.FC = () => {
  return (
    <Fragment>
      <section className="cta-section">
        <div className="small-banner">
          <p>IT'S MORE THAN JUST AN ITEM.</p>
        </div>
        <div className="cta-container">
          <div className="cta-image"></div>
          <div className="cta-text">
            <div className="cta-box">
              <h3 className="cta-title">EVERY ITEM IS HAND CRAFTED</h3>
              <p className="cta-subtitle">Find the perfect item in our store</p>
              <button className="cta-btn">Shop Site Wide</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CTASection;
