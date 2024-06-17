import React from "react";
import styles from "../../style/products.module.css";
import PBBox from "./PBBox";
import { MdAttachMoney } from "react-icons/md";
import { GiHighFive } from "react-icons/gi";
import { IoHammerSharp } from "react-icons/io5";

const ProductBenefit: React.FC = () => {
  return (
    <div className={styles["pbContainer"]}>
      <div className={styles["pbTtileBox"]}>
        <h3 className={styles["pbTtile"]}>THE X PRODUCT CLUB ADVANTAGE</h3>
      </div>
      <div className={styles["pbboxes"]}>
        <PBBox
          icon={<MdAttachMoney className={styles["pbIcon"]} />}
          title="ORDERS $18 AND OVER (BEFORE TAX) SHIP FOR FREE!"
          subTitle="Orders $18 and over (before tax) ship for FREE! Orders under $18 ship for $4 (except for razors, which ship for $2)."
        />
        <PBBox
          icon={<GiHighFive className={styles["pbIcon"]} />}
          title="30 DAY MONEY-BACK GUARANTEE"
          subTitle="Don’t get stuck with products you don't like. If something isn’t quite what you expected let us know within 30 days and we’ll issue a full refund."
        />
        <PBBox
          icon={<IoHammerSharp className={styles["pbIcon"]} />}
          title="WE SOURCE ALL PRODUCTS"
          subTitle="That means we can be laser focused on sourcing products from the best suppliers to give you the best price."
        />
      </div>
    </div>
  );
};

export default ProductBenefit;
