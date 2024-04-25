import React, { Fragment } from "react";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";
import NavBar from "../Navigation";
import Footer from "../Footer";
import "../../style/login.css";

const Account: React.FC = () => {
  return (
    <Fragment>
      <NavBar />

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Account;
