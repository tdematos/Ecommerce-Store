import React from "react";
import BreadCrumb from "../BreadCrumb";
import "../../style/breadcrumb.css";

const Products: React.FC = () => {
  return (
    <div>
      <BreadCrumb
        home="Home"
        arrow1="&gt;"
        shop="Shop"
        arrow2="&gt;"
        products="Products"
      />
      <h1>Products</h1>
    </div>
  );
};

export default Products;
