import React, { Fragment, useState } from "react";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";
import NavBar from "../Navigation";
import Footer from "../Footer";
import NavSelector from "../NavSelector";
import "../../style/login.css";

const Account: React.FC = () => {
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

export default Account;
