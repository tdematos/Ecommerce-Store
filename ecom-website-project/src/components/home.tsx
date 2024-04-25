import React, { Fragment, ReactElement, useState } from "react";
import Banner from "./Banner";
import NavBar from "./Navigation";
import HeroSection from "./Hero";
import SmallBanner from "./SmallBanner";
import ItemCarousal from "./ItemCarousal";
import ItemCompare from "./ItemCompare";
import TwoItems from "./twoItems";
import TestimonialBanner from "./TestimonialBanner";
import CTASection from "./CTASection";
import Footer from "./Footer";
import NavSelector from "./NavSelector";

const HomePage: React.FC = (): ReactElement => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleMouseOver = () => {
    setToggleModal(true);
  };

  const handleMouseOut = () => {
    setToggleModal(false);
  };

  return (
    <Fragment>
      <Banner />
      <NavBar about="ABOUT" shop="SHOP" onMouseOver={handleMouseOver} />
      <NavSelector
        navTitle="INVENTORY"
        caption="Not sure where to start?"
        isDialogOpen={toggleModal}
        onMouseLeave={handleMouseOut}
      />
      <HeroSection />
      <SmallBanner />
      <ItemCarousal />
      <ItemCompare />
      <TwoItems />
      <TestimonialBanner />
      <CTASection />
      <ItemCarousal />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
