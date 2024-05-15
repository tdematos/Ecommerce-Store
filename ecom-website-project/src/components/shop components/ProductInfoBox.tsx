import React from "react";
import styles from "../../style/products.module.css";

interface ItemInfoBox {
  title: string;
  icon: string;
  description: string | null;
  onClick: () => void;
}

const ProductInfoBox: React.FC<ItemInfoBox> = (props) => {
  return (
    <div className={styles["itemInfoContainer"]}>
      <div className={styles["itemInfoBox"]}>
        <div className={styles["itemInfoText"]}>
          <p className={styles["itemsInfoDescriptionTitle"]}>{props.title}</p>
          <p
            className={styles["itemsInfoDescriptionIcon"]}
            onClick={props.onClick}
          >
            {props.icon}
          </p>
        </div>
        <p className={styles["itemInfoDescription"]}>{props.description}</p>
      </div>
    </div>
  );
};

export default ProductInfoBox;
