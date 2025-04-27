import React, { useEffect } from "react";
import "../App.css"; // Ensure this path is correct for your project

function Skills() {
  useEffect(() => {
    // Trigger the animation by adding a class after the component mounts
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.classList.add("animate-bar");
    });

    const texts = document.querySelectorAll(".text-animate");
    texts.forEach((text) => {
      text.classList.add("animate-text");
    });
  }, []);

  return (
    <>
      <div className="bg-white mt-8">
        <div className="pt-[100px] pl-[100px] text-5xl font-italiana text-[#0A0F2C]">
          Skills
        </div>
        <div className="space-y-8 pt-5">
          {/* Design Bar */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-12">
            <h2 className="text-3xl text-[#0A0F2C] font-italiana pl-[100px] text-animate">
              Design
            </h2>
            <div className="w-[50%] bg-[#D72638] h-[50px] bar"></div>
          </div>
          {/* Code Bar */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-12">
            <h2 className="text-3xl text-[#0A0F2C] font-italiana pl-[100px] text-animate">
              Code
            </h2>
            <div className="w-[50%] bg-[#0A0F2C] h-[50px] bar"></div>
          </div>
        </div>

        {/* Design and Code sections */}
        <div className="font-hanuman flex flex-col md:flex-row space-y-10 md:space-x-12 px-[100px] mt-[100px]">
          {/* Design Section */}
          <div className="pl-[100px] text-animate w-full md:w-[45%]">
            <h2 className="text-4xl underline text-[#D72638]">Design</h2>
            <ul className="pt-[28px] text-3xl space-y-5 w-full text-[#D72638]">
              <li>Figma</li>
              <li>UI/UX Design</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Blender</li>
            </ul>
          </div>

          {/* Code Section */}
          <div className="pl-[100px] text-animate w-full md:w-[45%]">
            <h2 className="text-4xl underline text-[#0A0F2C]">Code</h2>
            <ul className="pt-[28px] text-3xl space-y-5 w-full">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
