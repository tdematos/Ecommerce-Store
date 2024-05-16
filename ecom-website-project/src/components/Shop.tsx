import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navigation";
import NavSelector from "./NavSelector";
import Footer from "./Footer";

const Shop: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

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
      <Outlet />
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

export default Shop;
