import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <div className="">
      <div className="pl-[100px] py-[100px] flex flex-col gap-[40px]">
        <h5 className="text-5xl font-italiana text-[#0A0F2C]">Mirrored Mind</h5>
        <h1 className="text-8xl font-italiana tracking-[1px] text-[#0A0F2C]">
          The <span className="text-[#D72638]">code</span> speaks logic.
          <br /> The <span className="text-[#D72638]">design</span> screams
          soul.
        </h1>
      </div>
      <div className="pl-[100px] flex gap-[90px]">
        <a
          href="https://github.com/arvindshs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition text-5xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition text-5xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/+919489294606"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition text-5xl"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Hero;
