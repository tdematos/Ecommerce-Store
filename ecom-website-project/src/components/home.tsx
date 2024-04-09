import React, { Fragment } from "react";
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

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <NavBar />
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
