import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { antonio_h2_semibold, antonio_h2_regular } from "@/app/lib/fontloader";


const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row  justify-between items-center px-[14px] md:px-[40px] xl:px-[60px] border-t-2 border-[#444444] py-[40px] md:py-[50px] lg:py-[60px] xl:py-[70px] 2xl:py-[80px] ">
      <img src="/portrait.png" alt="" className="w-[79px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[195px] h-[32px] sm:h-[32px] md:h-[40px] lg:h-[60px] xl:h-[80px] mb-6 sm:mb-0" />
      <div className="flex justify-center items-center flex-col">
        <IoLocationSharp className="size-4 sm:size-6 lg:size-8 xl:size-10 mb-4 sm:mb-0" />
        <p className={`${antonio_h2_regular.className} w-[290px] sm:w-[275px] md:w-[340px] lg:w-[450px] xl:w-[551px]  text-[14px] lg:text-[16px] xl:text-[20px] text-[#202020] text-center`}>
          H# 20/39, Koonammavu, Kottuvally, Ernakulam, Kerala - 683 518 Tel:
          91-9961 986 555
        </p>
      </div>
      <div>
        <div className="hidden sm:flex justify-end items-center gap-4">
          <FaFacebookSquare className="size-4 lg:size-6 xl:size-8" />
          <TbBrandInstagramFilled  className="size-6 lg:size-8 xl:size-10" />
        </div>
       
        <p className={` ${antonio_h2_regular.className} text-[14px] lg:text-[16px] xl:text-[20px] text-[#444444] pt-4`}>© 2025 Desire Uniforms</p>
        <div className="  flex sm:hidden justify-center items-center gap-4 pt-6">
          <FaFacebookSquare className="size-5 lg:size-6 xl:size-8" />
          <TbBrandInstagramFilled  className="size-6 lg:size-8 xl:size-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
