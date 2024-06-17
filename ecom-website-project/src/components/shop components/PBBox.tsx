import React from "react";
import styles from "../../style/products.module.css";

interface PBBox {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

const PBBox: React.FC<PBBox> = (props) => {
  return (
    <div className={styles["pbBox"]}>
      <div className={styles["pbPhoto"]}>{props.icon}</div>
      <p className={styles["pbBoxtitle"]}>{props.title}</p>
      <p className={styles["pbBoxSubTitle"]}>{props.subTitle}</p>
    </div>
  );
};

export default PBBox;
