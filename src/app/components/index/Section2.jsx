import React from "react";
import { antonio_h2_semibold, antonio_h2_regular } from "@/app/lib/fontloader";
const Section2 = () => {
  return (
    <div>
      <h1
        className={` ${antonio_h2_regular.className} text-[#202020] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[30px] leading-[140%] px-[32px] sm:px-[50px] md:px-[80px] lg:px-[125px] py-[20px] sm:py-[30px] md:py-[45px] lg:py-[55px] text-center`}
      >
        At Desire Uniforms, we believe uniforms should go beyond mere
        functionality—they should inspire confidence, embody identity, and offer
        unmatched comfort. Driven by a passion to redefine professional wear, we
        specialize in designing high-quality, durable, and stylish uniforms
        tailored to meet the unique needs of various industries.
      </h1>
    </div>
  );
};

export default Section2;
