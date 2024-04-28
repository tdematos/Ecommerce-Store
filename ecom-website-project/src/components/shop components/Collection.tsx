import { Fragment } from "react/jsx-runtime";
import CategorySelector from "./CategorySelector";
import ItemContainer from "./ItemContainer";
import ShopBanner from "./ShopBanner";
import ShopText from "./ShopText";
import BreadCrumb from "../BreadCrumb";
import React from "react";

const Collection: React.FC = () => {
  return (
    <Fragment>
      <ShopBanner />
      <CategorySelector />
      <BreadCrumb home="Home" arrow1="&gt;" shop="Shop" />
      <ItemContainer />
      <ShopText />
    </Fragment>
  );
};

export default Collection;
