import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./Navigation";
import Footer from "./Footer";
import styles from "../style/about.module.css";
import NavSelector from "./NavSelector";

const About: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleMouseOver = () => {
    setToggleModal(true);
  };

  const handleMouseOut = () => {
    setToggleModal(false);
  };

  return (
    <Fragment>
      <NavBar about="ABOUT" shop="SHOP" onMouseOver={handleMouseOver} />
      <NavSelector
        navTitle="INVENTORY"
        caption="Not sure where to start?"
        isDialogOpen={toggleModal}
        onMouseLeave={handleMouseOut}
      />
      <div className={styles["aboutPagecontainer"]}>
        <div className={styles["aboutPageBox"]}>
          <div className={styles["aboutUsImage"]}>
            {products[0] && (
              <img
                className="hero-image"
                src={products[0].image}
                alt="backpack"
              />
            )}
          </div>
          <h3 className={styles["aboutUSTitle"]}>About Us</h3>
          <h4 className={styles["aboutUSSubTitle"]}>
            Interested in knowing what we do?
          </h4>
          <p className={styles["aboutUSDescription"]}>
            This is a website that is designated in selling the best of the best
            appearel. We are dedicated to source the most sought after clothing
            and accessories on the market. Don't wait shop now because.... We
            are your ONE STOP SHOP!
          </p>
        </div>
      </div>
      <Footer
        shopLink="shop/collection"
        aboutLink="/about"
        tosLink="/tos"
        privacyPolicyLink="/"
        contactUsLink="/"
      />
    </Fragment>
  );
};

export default About;
