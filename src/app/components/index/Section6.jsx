import React from "react";
import {
  antonio_h2_light,
  antonio_h2_medium,
  antonio_h2_semibold,
} from "@/app/lib/fontloader";

const Section6 = () => {
  return (
    <div>
      <h1
        className={` ${antonio_h2_medium.className}  text-[18px] sm:text-[28px] md:text-[30px] lg:text-[38px] xl:text-[44px] 2xl:text-[54px] text-[#202020] text-center pt-4`}
      >
        Our Promise
      </h1>
      <p
        className={`${antonio_h2_light.className} text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] text-[#202020] text-center px-[52px] md:px-[100px] xl:px-[150px] 2xl:px-[170px]  pb-6`}
      >
        At Desire Uniforms, we know that uniforms represent more than just
        attire—they’re an extension of your brand and your values. That’s why
        we’re committed to providing uniforms that elevate your image, foster
        team spirit, and create a lasting impression.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 lg:gap-20 py-5 sm:py-10">
        <button
          className={` ${antonio_h2_semibold.className} w-[190px] lg:w-[220px] xl:w-[256px] h-[40px] lg:h-[58px] xl:h-[64px] bg-[#FFFFFF] text-[#202020] text-[14px] lg:text-[16px] xl:text-[20px] flex justify-center items-center rounded-[40px]`}
        >
          Request a Call-back
        </button>
        <button
          className={` ${antonio_h2_semibold.className} w-[190px] lg:w-[250px] xl:w-[293px] h-[40px] lg:h-[58px] xl:h-[64px] bg-[#00D95F] text-[#FFFFFF] text-[14px] lg:text-[16px] xl:text-[20px] rounded-[40px] flex justify-center items-center gap-y-6`}
        >
            
          Connect WhatsApp
          <img src="/icon _Whatsapp.png" className="size-8 lg:size-auto"/>
        </button>
      </div>
    </div>
  );
};

export default Section6;
