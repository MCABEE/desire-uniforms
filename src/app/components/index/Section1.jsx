import React from "react";
import { antonio_h2_semibold, antonio_h2_regular } from "@/app/lib/fontloader";

const Section1 = () => {
  return (
    <div className="flex sm:justify-between sm:items-center pt-4 sm:px-8 xl:px-20 flex-col sm:flex-row">
      <div className="size-[112px] sm:size-[130px] md:size-[150px] lg:size-[220px] xl:size-[320px] rounded-full bg-[#FFCF49] relative mx-[32px]"></div>
      <div className="absolute top-[110px] sm:top-[170px] md:top-[220px] lg:top-[260px] xl:top-[350px] left-[60px] sm:left-[80px] md:left-[90px] lg:left-[100px] xl:left-[125px]">
        <h1
          className={`${antonio_h2_semibold.className}  text-[24px] sm:text-3xl lg:text-5xl  xl:text-7xl  text-[#333333] font-semibold leading-8 md:leading-10`}
        >
          Crafting <br /> Professional Excellence
        </h1>
        <p
          className={` ${antonio_h2_regular.className} text-[13px] md:text-[18px] lg:text-[22px] xl:text-[32px] text-[#333333] pt-1 lg:pt-4 `}
        >
          Where your brand wears confidence ...
        </p>
        <button
          className={`${antonio_h2_semibold.className} text-[14px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[20px] text-[#202020] bg-white font-semibold rounded-[40px] px-[20px] md:px-[28px] lg:px-[38px] xl:px-[44px] py-[8px] sm:py-[4px] md:py-[9px] lg:py-[12px] xl:py-[19px] mt-6 sm:mt-4 lg:mt-8`}
        >
          Request a Call-back
        </button>
      </div>
      <div className="size-[208px] sm:size-[220px] md:size-[320px] lg:size-[400px] xl:size-[624px] rounded-full bg-[#FFCF49] flex justify-center items-center pt-2 mt-20 mx-auto sm:mx-0 sm:my-0">
        <img
          src="/male-waiter.png"
          alt="male-waiter"
          className="w-[141px] sm:w-[170px] md:w-[240px] lg:w-[300px] h-[237px] sm:h-[300px] md:h-[400px] lg:h-[512px] xl:w-[428px] xl:h-[712px]"
        />
      </div>
    </div>
  );
};

export default Section1;
