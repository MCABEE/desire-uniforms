// import React from "react";
// import { antonio_h2_semibold, antonio_h2_regular } from "@/app/lib/fontloader";

// const Navbar = () => {
//   return (
//     <div
//       className={` ${antonio_h2_regular.className} flex justify-between px-10 md:px-20 py-4 items-center`}
//     >
//       <h1 className="text-[15px] lg:text-[21px]  text-[#333333] ">Our Services</h1>
//       <img src="/logo.png" className="w-[100px] lg:w-[150px]"></img>
//       <div className=" flex gap-10">
//         <h1 className="text-[15px] lg:text-[21px]  text-[#333333] ">About</h1>
//         <h1 className="text-[15px] lg:text-[21px]  text-[#333333] "> Contact</h1>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
'use client'

// import React, { useState } from "react";
// import { antonio_h2_semibold, antonio_h2_regular } from "@/app/lib/fontloader";

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div
//         className={` ${antonio_h2_regular.className} flex justify-between px-10 md:px-20 py-4 items-center`}
//       >
//         <h1 className="text-[15px] lg:text-[21px] text-[#333333]">Our Services</h1>
//         <img src="/logo.png" className="w-[100px] lg:w-[150px]" alt="Logo" />
//         <div className="hidden sm:flex gap-10">
//           <h1 className="text-[15px] lg:text-[21px] text-[#333333]">About</h1>
//           <h1 className="text-[15px] lg:text-[21px] text-[#333333]">Contact</h1>
//         </div>
//         {/* Hamburger Icon for smaller screens */}
//         <div className="sm:hidden" onClick={toggleDrawer}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-8 h-8 text-[#333333] cursor-pointer"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Drawer */}
//       {isDrawerOpen && (
//         <div className="fixed top-0 left-0 w-[70%] h-full bg-white shadow-lg z-50 sm:hidden">
//           <div className="flex justify-end p-4">
//             <button onClick={toggleDrawer} className="text-[#333333] text-2xl">
//               &times;
//             </button>
//           </div>
//           <div className="flex flex-col items-start gap-6 p-6">
//             <h1 className="text-[15px] lg:text-[21px] text-[#333333]">About</h1>
//             <h1 className="text-[15px] lg:text-[21px] text-[#333333]">Contact</h1>
//           </div>
//         </div>
//       )}

//       {/* Overlay for Drawer */}
//       {isDrawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
//           onClick={toggleDrawer}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { antonio_h2_regular } from "@/app/lib/fontloader";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={` ${antonio_h2_regular.className} flex justify-between px-4 sm:px-10 md:px-20 py-4 items-center`}
      >
            <h1 className="text-[15px] lg:text-[21px] text-[#333333] hidden sm:block ">Our Services</h1>
        <img src="/logo.png" className="w-[100px] lg:w-[150px]" alt="Logo" />
        <div className="hidden sm:flex gap-10">
        <h1 className="text-[15px] lg:text-[21px] text-[#333333] block sm:hidden">Our Services</h1>

          <h1 className="text-[15px] lg:text-[21px] text-[#333333]">About</h1>
          <h1 className="text-[15px] lg:text-[21px] text-[#333333]">Contact</h1>
        </div>
        {/* Hamburger Icon for smaller screens */}
        <div className="sm:hidden" onClick={toggleDrawer}>
          <img src="/drawer.png" alt="" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-[#333333] cursor-pointer"
          > */}
            {/* <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg> */}
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#4f4e4c] shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} className="text-[#d2cbcb] text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start gap-6 p-6 text-white">
          <h1 className="text-[15px] lg:text-[21px] ">Our Services</h1>
          <h1 className="text-[15px] lg:text-[21px] ">About</h1>
          <h1 className="text-[15px] lg:text-[21px] ">Contact</h1>
        </div>
      </div>

      {/* Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
