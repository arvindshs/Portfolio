import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#0A0F2C] flex flex-col md:flex-row justify-between items-center px-8 md:px-[100px] py-[30px]">
      {/* Left Side - Name */}
      <div>
        <h1 className="text-white text-3xl font-italiana">Arvind H S</h1>
      </div>

      {/* Right Side - Links and Contact */}
      <div className="flex flex-col md:flex-row items-center gap-[30px] text-white text-sm font-hanuman tracking-wider mt-6 md:mt-0">
        {/* Divider */}
        <div className="w-px h-6 bg-white opacity-30 md:hidden"></div>

        {/* Contact Info */}
        <div className="flex flex-col text-center md:text-right leading-tight">
          <a
            href="mailto:arvindbond52@gmail.com"
            className="hover:underline mb-2 md:mb-0"
          >
            Email: arvindbond52@gmail.com
          </a>
          <a href="tel:+919489294606" className="hover:underline">
            Phone: +91 9489294606
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
