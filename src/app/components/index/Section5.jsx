// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   antonio_h2_semibold,
//   antonio_h2_regular,
//   antonio_h2_light,
//   antonio_h2_medium,
// } from "@/app/lib/fontloader";

// const Section5 = () => {
//   const [innerWidth, setInnerWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setInnerWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <p
//         className={`${
//           innerWidth >= 768
//             ? antonio_h2_light.className
//             : antonio_h2_regular.className
//         } text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] text-[#202020] text-center px-[52px] md:px-[100px] xl:px-[150px] 2xl:px-[170px] py-8`}
//       >
//         Whether outfitting a corporate team, medical professionals, hotel staff,
//         students, or industrial workers, our commitment to quality and design
//         ensures that your team is always dressed to impress. Discover the
//         difference of expertly crafted uniforms that combine comfort,
//         durability, and style.
//       </p>
//       <p
//         className={` ${
//           innerWidth >= 768
//             ? antonio_h2_medium.className
//             : antonio_h2_medium.className
//         } text-[#202020] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[30px] leading-[140%] px-[80px] sm:px-[150px] md:px-[200px] lg:px-[280px] 2xl:px-[394px] text-center py-2 sm:py-0 md:py-2 lg:py-4 xl:py-6`}
//       >
//         Desire Uniforms – Crafting Professional Excellence. "Where Your Brand
//         Wears Confidence."
//       </p>
//     </div>
//   );
// };

// export default Section5;
"use client";
import React, { useEffect, useState } from "react";
import {
  antonio_h2_semibold,
  antonio_h2_regular,
  antonio_h2_light,
  antonio_h2_medium,
} from "@/app/lib/fontloader";

const Section5 = () => {
  const [innerWidth, setInnerWidth] = useState(0); // Initialize with 0 or a default value

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);

      const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>
      <p
        className={`${
          innerWidth >= 768
            ? antonio_h2_light.className
            : antonio_h2_regular.className
        } text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] text-[#202020] text-center px-[52px] md:px-[100px] xl:px-[150px] 2xl:px-[170px] py-8`}
      >
        Whether outfitting a corporate team, medical professionals, hotel staff,
        students, or industrial workers, our commitment to quality and design
        ensures that your team is always dressed to impress. Discover the
        difference of expertly crafted uniforms that combine comfort,
        durability, and style.
      </p>
      <p
        className={`${
          innerWidth >= 768
            ? antonio_h2_medium.className
            : antonio_h2_medium.className
        } text-[#202020] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[30px] leading-[140%] px-[80px] sm:px-[150px] md:px-[200px] lg:px-[280px] 2xl:px-[394px] text-center py-2 sm:py-0 md:py-2 lg:py-4 xl:py-6`}
      >
        Desire Uniforms – Crafting Professional Excellence. "Where Your Brand
        Wears Confidence."
      </p>
    </div>
  );
};

export default Section5;
