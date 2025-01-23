// // import React from 'react'

// // const Section4 = () => {
// //   return (
// //     <div className='flex flex-col sm:flex-row gap-[18px] md:gap-[28px] lg:gap-[32px] xl:gap-10 justify-between px-5 lg:px-16 2xl:px-20 py-10 '>
// // <div className='bg-[#febf0136] w-full h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex justify-end items-center pt-[35px]'>
// //     <img src="/blackTshirt.png" className='w-[150px] md:w-[200px] xl:w-[340px] 2xl:w-[367px] h-[180px] md:h-[310px] xl:h-[480px] 2xl:h-[529px]' />

// // </div>
// // <div className='bg-[#febf0136] w-full h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex flex-col justify-center items-center gap-y-5 md:gap-y-10'>
// // <img src="/blueshirt.png" alt="" className='w-[150px] md:w-[250px] xl:w-[300px] 2xl:w-[375px] h-[100px] md:h-[150px] xl:h-[200px] 2xl:h-[270px]' />
// //     <img src="/blueTshirt.png" className='w-[150px] md:w-[250px] xl:w-[300px] 2xl:w-[375px]  h-[100px] md:h-[150px] xl:h-[200px] 2xl:h-[270px]' />

// // {/* </div> */}
// // </div>
// // <div className='bg-[#febf0136] w-full h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex justify-end items-center pt-[35px]'>
// //     <img src="/coat.png" alt="" className='w-[180px] md:w-[230px] xl:w-[340px] 2xl:w-[367px] h-[210px] md:h-[310px] xl:h-[480px] 2xl:h-[529px]'  />
// // </div>
// //     </div>
// //   )
// // }

// // export default Section4

"use client";
import React, { useState } from "react";

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      content: (
        <div className="bg-[#febf0136] w-full h-[424px] sm:h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex justify-center sm:justify-end items-center pt-[35px]">
          <img
            src="/blackTshirt.png"
            className="w-[268px] sm:w-[150px] md:w-[200px] xl:w-[340px] 2xl:w-[367px] h-[387px] sm:h-[180px] md:h-[310px] xl:h-[480px] 2xl:h-[529px]"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="bg-[#febf0136] w-full h-[424px] sm:h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex flex-col justify-center items-center gap-y-5 md:gap-y-10">
          <img
            src="/blueshirt.png"
            alt="Blue Shirt"
            className="w-[200px] sm:w-[150px] md:w-[250px] xl:w-[300px] 2xl:w-[375px] h-[200px] sm:h-[100px] md:h-[150px] xl:h-[200px] 2xl:h-[270px]"
          />
          <img
            src="/blueTshirt.png"
            className="w-[200px] sm:w-[150px] md:w-[250px] xl:w-[300px] 2xl:w-[375px] h-[200px] sm:h-[100px] md:h-[150px] xl:h-[200px] 2xl:h-[270px]"
            alt="Blue T-shirt"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="bg-[#febf0136] w-full h-[424px] sm:h-[250px] md:h-[384px] xl:h-[584px] rounded-[50px] flex justify-center sm:justify-end items-center pt-[35px]">
          <img
            src="/coat.png"
            alt="Coat"
            className="w-[268px] sm:w-[180px] md:w-[230px] xl:w-[340px] 2xl:w-[367px] h-[387px] sm:h-[210px] md:h-[310px] xl:h-[480px] 2xl:h-[529px]"
          />
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Carousel for small screens */}
      <div className="sm:hidden relative overflow-hidden  mx-5">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 ">
              {slide.content}
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8250;
        </button>
      </div>

      {/* Original layout for larger screens */}
      <div className="w-full hidden sm:flex  sm:flex-row gap-[18px] md:gap-[28px] lg:gap-[32px] xl:gap-10 justify-between px-5 lg:px-16 2xl:px-20 py-10 ">
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;

// 'use client';
// import React, { useState } from "react";

// const Section4 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex justify-end items-center pt-[35px]">
//           <img
//             src="/blackTshirt.png"
//             className="w-[150px] md:w-[200px] xl:w-[340px] h-[180px] md:h-[310px] xl:h-[480px]"
//           />
//         </div>
//       ),
//     },
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex flex-col justify-center items-center gap-y-5">
//           <img
//             src="/blueshirt.png"
//             alt="Blue Shirt"
//             className="w-[150px] md:w-[250px] xl:w-[300px] h-[100px] md:h-[150px] xl:h-[200px]"
//           />
//           <img
//             src="/blueTshirt.png"
//             alt="Blue T-shirt"
//             className="w-[150px] md:w-[250px] xl:w-[300px] h-[100px] md:h-[150px] xl:h-[200px]"
//           />
//         </div>
//       ),
//     },
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex justify-end items-center pt-[35px]">
//           <img
//             src="/coat.png"
//             alt="Coat"
//             className="w-[180px] md:w-[230px] xl:w-[340px] h-[210px] md:h-[310px] xl:h-[480px]"
//           />
//         </div>
//       ),
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="sm:hidden relative overflow-hidden px-5">
//       {/* Carousel Wrapper */}
//       <div
//         className="flex transition-transform duration-300 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             {slide.content}
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Section4;
// 'use client';
// import React, { useState } from "react";

// const Section4 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex justify-end items-center pt-[35px]">
//           <img
//             src="/blackTshirt.png"
//             className="w-[150px] md:w-[200px] xl:w-[340px] h-[180px] md:h-[310px] xl:h-[480px]"
//           />
//         </div>
//       ),
//     },
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex flex-col justify-center items-center gap-y-5">
//           <img
//             src="/blueshirt.png"
//             alt="Blue Shirt"
//             className="w-[150px] md:w-[250px] xl:w-[300px] h-[100px] md:h-[150px] xl:h-[200px]"
//           />
//           <img
//             src="/blueTshirt.png"
//             alt="Blue T-shirt"
//             className="w-[150px] md:w-[250px] xl:w-[300px] h-[100px] md:h-[150px] xl:h-[200px]"
//           />
//         </div>
//       ),
//     },
//     {
//       content: (
//         <div className="bg-[#febf0136] w-full h-[250px] rounded-[50px] flex justify-end items-center pt-[35px]">
//           <img
//             src="/coat.png"
//             alt="Coat"
//             className="w-[180px] md:w-[230px] xl:w-[340px] h-[210px] md:h-[310px] xl:h-[480px]"
//           />
//         </div>
//       ),
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="sm:hidden relative overflow-hidden mx-5">
//       {/* Carousel Wrapper */}
//       <div
//         className="flex transition-transform duration-300 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             {slide.content}
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Section4;
