import React from "react";
import "../../style/products.css";

const CTABanner: React.FC = () => {
  return (
    <div className="cta-container">
      <div className="cta-info-container">
        <p className="cta-title">SHAVING</p>
        <p className="cta-heading">
          Scrub-A-Dub-Dub: How to Exfoliate Before Shaving
        </p>
        <p className="cta-subheading">
          A skin-care expert explains why exfoliating is the key to a painless
          shave.
        </p>
        <button className="product-cta">Read More</button>
      </div>
      <div className="cta-pic-container">
        <div className="cta-square"></div>
      </div>
    </div>
  );
};

export default CTABanner;
