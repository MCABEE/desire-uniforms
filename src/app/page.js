import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/index/Section1";
import Section2 from "./components/index/Section2";
import Section3 from "./components/index/Section3";
import Section4 from "./components/index/Section4";
import Section5 from "./components/index/Section5";
import Section6 from "./components/index/Section6";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-t from-[#FEBD01] to-[#FFAD01] ">
        <Navbar />
        <div className="pb-[19px] sm:pb-[45px] lg:pb-[58px] xl:pb-[50px]">
          <Section1 />
        </div>
      </div>
      <div className="bg-[#FCF5EB]">
        <Section2 />
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
