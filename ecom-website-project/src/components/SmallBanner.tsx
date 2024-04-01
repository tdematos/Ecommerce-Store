import React, { Fragment } from "react";
import "../style/smallBanner.css";

const SmallBanner: React.FC = () => {
  return (
    <Fragment>
      <section className="small-banner">
        <p>FREE SHIPPING ON ORDERS $30+</p>
        <p>30 DAY MONEY-BACK GUARANTEE</p>
        <p>UNBELIVABLY AWESOME PRODUCTS</p>
      </section>
    </Fragment>
  );
};

export default SmallBanner;
