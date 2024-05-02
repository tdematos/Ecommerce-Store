import React from "react";
import styles from "../../style/products.module.css";

const CTABanner: React.FC = () => {
  return (
    <div className={styles["cta-container"]}>
      <div className={styles["cta-info-container"]}>
        <p className={styles["cta-title"]}>SHAVING</p>
        <p className={styles["cta-heading"]}>
          Scrub-A-Dub-Dub: How to Exfoliate Before Shaving
        </p>
        <p className={styles["cta-subheading"]}>
          A skin-care expert explains why exfoliating is the key to a painless
          shave.
        </p>
        <button className={styles["product-cta"]}>Read More</button>
      </div>
      <div className={styles["cta-pic-container"]}>
        <div className={styles["cta-square"]}></div>
      </div>
    </div>
  );
};

export default CTABanner;
