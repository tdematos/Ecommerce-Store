import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import styles from "../../style/products.module.css";
import ItemCarousal from "../ItemCarousal";
import CTABanner from "./CTABanner";
import ProductBenefit from "./ProductBenefit";
import ProductInfoBox from "./ProductInfoBox";

const Products: React.FC = () => {
  const { itemName } = useParams<{ itemName: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (itemName && products.length > 0) {
      const foundProduct = products.find(
        (p) => p.title === decodeURIComponent(itemName)
      );
      setProduct(foundProduct);
    }
  }, [itemName, products]);

  const handleIconClick = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };

  if (!itemName) {
    return <div>No item name provided in URL parameters.</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BreadCrumb
        home="Home"
        arrow1="&gt;"
        shop="Shop"
        arrow2="&gt;"
        products={product.title}
      />
      <div className={styles["item-Disp-container"]}>
        <div className={styles["photo-carousal"]}>
          <div className={styles["main-item-display"]}>
            <div className={styles["main-item"]}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>
        <div className={styles["item-disp-info"]}>
          <div className={styles["title-text"]}>
            <h4 className={styles["item-disp-title"]}>{product.title}</h4>
            <p className={styles["item-disp-desc"]}>{product.description}</p>
            <p className={styles["item-price"]}>${product.price}</p>
          </div>

          <div className={styles["item-descriptioin-container"]}>
            <p className={styles["item-description"]}>{product.description}</p>
            <p className={styles["item-description"]}>{product.category}</p>
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
        description={toggleMenu ? product.description : null}
        onClick={handleIconClick}
      />
      <ProductBenefit />
      <ItemCarousal />
      <CTABanner />
    </div>
  );
};

export default Products;
