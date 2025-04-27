// import React from "react";

// function Footer() {
//   return (
//     <>
//       <div className="w-full h-full bg-[#0A0F2C] flex justify-between">
//         <div className="flex justify-between">
//           <h1 className="text-white text-3xl pl-[100px] py-[30px] font-italiana">
//             Arvind H S
//           </h1>
//         </div>
//         <div className="flex text-white">
//           <ul className="font-hanuman flex text-white text-sm py-[40px] pr-[100px] gap-[30px] tracking-wider">
//             <li>Home</li>
//             <li>Projects</li>
//             <li>About</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-full bg-[#0A0F2C] flex justify-between items-center px-[100px] py-[30px]">
        {/* Left Side - Name */}
        <div>
          <h1 className="text-white text-3xl font-italiana">Arvind H S</h1>
        </div>

        {/* Right Side - Links and Contact */}
        <div className="flex items-center gap-[50px] text-white text-sm font-hanuman tracking-wider">
          {/* Divider */}
          <div className="w-px h-6 bg-white opacity-30"></div>

          {/* Contact Info */}
          <div className="flex flex-col text-right leading-tight">
            <a href="mailto:arvindbond52@gmail.com" className="hover:underline">
              Email: arvindbond52@gmail.com
            </a>
            <a href="tel:+919489294606" className="hover:underline">
              Phone: +91 9489294606
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
