import React, { Fragment, useState } from "react";
import NavBar from "./Navigation";
import Footer from "./Footer";
import styles from "../style/about.module.css";
import NavSelector from "./NavSelector";

const About: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [UCToggle, setUCToggle] = useState<boolean>(true);

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
          <div className={styles["aboutUsImage"]}></div>
          <h3 className={styles["aboutUSTitle"]}>About Us</h3>
          <h4 className={styles["aboutUSSubTitle"]}>
            Interested in knowing what we do?
          </h4>
          <p className={styles["aboutUSDescription"]}>
            This is a website that is designated in selling the best of the best
            video games. And... No! We do NOT sell consoles, we only sell the
            games, the juice, the fun.... We are your ONE STOP SHOP!
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
