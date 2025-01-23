import React from "react";
import {
  antonio_h2_semibold,
  antonio_h2_medium,
  antonio_h2_regular,
} from "@/app/lib/fontloader";

const Section3 = () => {
  return (
    <div className="p-5 lg:px-16 2xl:px-20 ">
      <div className="bg-white rounded-[50px] ">
        <h1
          className={` ${antonio_h2_semibold.className} text-[14px] sm:text-xl lg:text-2xl xl:text-4xl text-[#202020] px-[16px] sm:px-[50px] lg:px-[66px] xl:px-[76px] pt-[37px] sm:pt-[67px]`}
        >
          What we offer:
        </h1>
        <h1
          className={` ${antonio_h2_medium.className} text-[24px] sm:text-[30px] lg:text-[38px] xl:text-[54px] text-[#202020] px-[16px] sm:px-[50px] lg:px-[66px] xl:px-[77px] pt-[32px] sm:pt-[40px] xl:pt-[60px] `}
        >
          Desire Uniforms caters to a wide variety of industries, creating
          industry-specific solutions that reflect professionalism and style.
        </h1>
        <div className="flex gap-7 flex-col py-12">
          <div className="flex flex-wrap gap-4  px-[16px] sm:px-[50px] lg:px-[66px] xl:px-[77px]">
         
          <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px] px-[15px] sm:px-[27px] lg:px-[37px]  py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
                Corporate & Office Wear
              </p>
              <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px] px-[15px] sm:px-[27px] lg:px-[37px]  py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
                Healthcare & Medical Apparel
              </p>
          </div>
          <div className="flex flex-wrap gap-4 px-[16px] sm:px-[50px] lg:px-[66px] xl:px-[77px] sm:w-[600px] lg:w-[950px] xl:w-[1220px] 2xl:w-[1300px] ">
      
             <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px]  px-[15px] sm:px-[27px] lg:px-[37px]  py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
               Hospitality & Service Industry Wear
              </p>
              <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px] px-[15px] sm:px-[27px] lg:px-[37px]  py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
               School Uniforms
              </p>
              <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px] px-[15px] sm:px-[27px] lg:px-[37px]  py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
                College Uniforms
              </p>
              <p
                className={` ${antonio_h2_regular.className} text-sm sm:text-lg xl:text-2xl 2xl:text-3xl text-[#202020]  bg-[#FFAE01] rounded-[10px] px-[15px] sm:px-[27px] lg:px-[37px] py-[6px] sm:py-[10px] lg:py-[17px]`}
              >
                 Industrial & Workwear
              </p>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section3;
