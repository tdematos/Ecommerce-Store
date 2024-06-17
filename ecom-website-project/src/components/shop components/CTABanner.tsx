import React, { useEffect, useState } from "react";
import styles from "../../style/products.module.css";

const CTABanner: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
        <div className={styles["cta-square"]}>
          <img
            className={styles["cta-square-image"]}
            src={products[4] && products[4].image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
