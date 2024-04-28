import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navigation";
import NavSelector from "./NavSelector";
import Footer from "./Footer";
import ShopText from "./shop components/ShopText";

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
      <Footer />
    </Fragment>
  );
};

export default Shop;
