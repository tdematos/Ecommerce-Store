import React, { useState } from "react";
import BreadCrumb from "../BreadCrumb";
import styles from "../../style/products.module.css";
import ItemCarousal from "../ItemCarousal";
import CTABanner from "./CTABanner";
import ProductBenefit from "./ProductBenefit";
import ProductInfoBox from "./ProductInfoBox";

const Products: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleIconClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <div>
      <BreadCrumb
        home="Home"
        arrow1="&gt;"
        shop="Shop"
        arrow2="&gt;"
        products="Products"
      />
      <div className={styles["item-Disp-container"]}>
        <div className={styles["photo-carousal"]}>
          <div className={styles["item-select"]}>
            <div className={styles["sm-photo"]}>
              <a href=""></a>
            </div>
            <div className={styles["sm-photo"]}>
              <a href=""></a>
            </div>
          </div>
          <div className={styles["main-item-display"]}>
            <div className={styles["main-item"]}>
              <a href=""></a>
            </div>
          </div>
        </div>
        <div className={styles["item-disp-info"]}>
          <div className={styles["title-text"]}>
            <h4 className={styles["item-disp-title"]}>Club Max Z</h4>
            <p className={styles["item-disp-desc"]}>
              Extremely strong titanium which is made for the pro's
            </p>
            <p className={styles["item-price"]}>$10.00</p>
          </div>

          <div className={styles["item-descriptioin-container"]}>
            <p className={styles["item-description"]}>
              Club is made out of titanium, and has unbelieveable power when
              using on the field. Will make anyone feel like a pro.
            </p>
            <ul id={styles["item-list-info"]}>
              <li>Made out of unique titanium</li>
              <li>Lighter than a feather</li>
              <li>Comes in one color</li>
              <li>handle is unbreakable</li>
            </ul>
          </div>

          <div className={styles["quantity-container"]}>
            <div className={styles["quant-title"]}>Quantity</div>
            <div className={styles["quatity-box"]}>
              <div className={styles["quant-counter"]}>
                <div className={styles["number-count"]}>
                  <p>1</p>
                </div>
                <div className={styles["count-direction"]}>
                  <button className={styles["count-up"]}>&#9650;</button>
                  <button className={styles["count-down"]}>&#9660;</button>
                </div>
              </div>
              <button className={styles["count-cta"]}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <ProductInfoBox
        title="Item Info"
        icon={toggleMenu ? "-" : "+"}
        description={toggleMenu ? "Test Test Test" : null}
        onClick={handleIconClick}
      />
      <ProductBenefit />
      <ItemCarousal />
      <CTABanner />
    </div>
  );
};

export default Products;
