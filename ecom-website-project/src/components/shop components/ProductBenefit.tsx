import React from "react";
import styles from "../../style/products.module.css";
import PBBox from "./PBBox";

const ProductBenefit: React.FC = () => {
  return (
    <div className={styles["pbContainer"]}>
      <div className={styles["pbTtileBox"]}>
        <h3 className={styles["pbTtile"]}>THE X PRODUCT CLUB ADVANTAGE</h3>
      </div>
      <div className={styles["pbboxes"]}>
        <PBBox
          title="ORDERS $18 AND OVER (BEFORE TAX) SHIP FOR FREE!"
          subTitle="Orders $18 and over (before tax) ship for FREE! Orders under $18 ship for $4 (except for razors, which ship for $2)."
        />
        <PBBox
          title="30 DAY MONEY-BACK GUARANTEE"
          subTitle="Don’t get stuck with products you don't like. If something isn’t quite what you expected let us know within 30 days and we’ll issue a full refund."
        />
        <PBBox
          title="WE MAKE OUR OWN BLADES"
          subTitle="That means we can be laser focused on crafting awesome blades at reasonable prices."
        />
      </div>
    </div>
  );
};

export default ProductBenefit;
