import { Fragment } from "react";
import Header from "../components/Header";
import HeroSection from "../Hero-Section/HeroSection";
import FamilySection from "../components/Family-section/Family";
import AboutUs from "../components/About-us/AboutUs";


const Home = () => {
  return (
    <Fragment>
      <Header />
       <HeroSection/>
        <FamilySection/>
        <AboutUs />
    </Fragment>
  );
};

export default Home;
