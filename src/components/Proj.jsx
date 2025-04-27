import React from "react";
import blenderImage from "../assets/1.sandworm.png";
import mernImage from "../assets/c-tnea.png";
import figmaImage from "../assets/ph.png";
import photoshopImage from "../assets/ring.png";
import illustratorImage from "../assets/des-dev.png";
import ZoomInOnScroll from "../theee/ZoomInOnScroll.jsx"; // ✅ import here

function Proj() {
  return (
    <div className="bg-[#0A0F2C] py-[100px] px-4">
      <h1 className="text-5xl font-italiana text-white text-center mb-[50px]">
        My Projects (Work in Progress)
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Project 1 - Blender */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ZoomInOnScroll>
            <img
              src={blenderImage}
              alt="Blender Project"
              className="w-full h-[250px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </ZoomInOnScroll>
          <h3 className="text-2xl font-hanuman text-[#0A0F2C] mt-4">
            Blender Animation
          </h3>
          <p className="text-xl font-hanuman text-[#0A0F2C] font-light mt-2">
            3D animations and modeling using Blender, including lighting and
            material creation.
          </p>
          <p className="text-lg font-hanuman text-[#FF2400] mt-4">
            Work in Progress
          </p>
          <a
            href="https://www.example.com/blender"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D72638] hover:text-[#FF2400] mt-4 inline-block text-lg font-hanuman"
          >
            View Details →
          </a>
        </div>

        {/* Project 2 - MERN Stack */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ZoomInOnScroll>
            <img
              src={mernImage}
              alt="MERN Stack Project"
              className="w-full h-[250px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </ZoomInOnScroll>
          <h3 className="text-2xl font-hanuman text-[#0A0F2C] mt-4">
            MERN Stack Application
          </h3>
          <p className="text-xl font-hanuman text-[#0A0F2C] font-light mt-2">
            A full-stack web application built using MongoDB, Express.js, React,
            and Node.js.
          </p>
          <p className="text-lg font-hanuman text-[#FF2400] mt-4">
            Work in Progress
          </p>
          <a
            href="https://github.com/arvindshs/mern-project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D72638] hover:text-[#FF2400] mt-4 inline-block text-lg font-hanuman"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 - Figma */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ZoomInOnScroll>
            <img
              src={figmaImage}
              alt="Figma Design"
              className="w-full h-[250px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </ZoomInOnScroll>
          <h3 className="text-2xl font-hanuman text-[#0A0F2C] mt-4">
            Healthcare App Design in Figma
          </h3>
          <p className="text-xl font-hanuman text-[#0A0F2C] font-light mt-2">
            App UI design for healthcare practitioners, created in Figma with a
            clean, lavender theme.
          </p>
          <p className="text-lg font-hanuman text-[#FF2400] mt-4">
            Work in Progress
          </p>
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D72638] hover:text-[#FF2400] mt-4 inline-block text-lg font-hanuman"
          >
            View on Figma →
          </a>
        </div>

        {/* Project 4 - Photoshop */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ZoomInOnScroll>
            <img
              src={photoshopImage}
              alt="Photoshop Project"
              className="w-full h-[250px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </ZoomInOnScroll>
          <h3 className="text-2xl font-hanuman text-[#0A0F2C] mt-4">
            Photoshop Designs
          </h3>
          <p className="text-xl font-hanuman text-[#0A0F2C] font-light mt-2">
            Graphic design projects created in Photoshop, including posters and
            digital art.
          </p>
          <p className="text-lg font-hanuman text-[#FF2400] mt-4">
            Work in Progress
          </p>
          <a
            href="https://www.adobe.com/photoshop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D72638] hover:text-[#FF2400] mt-4 inline-block text-lg font-hanuman"
          >
            View on Adobe →
          </a>
        </div>

        {/* Project 5 - Illustrator */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ZoomInOnScroll>
            <img
              src={illustratorImage}
              alt="Illustrator Project"
              className="w-full h-[250px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </ZoomInOnScroll>
          <h3 className="text-2xl font-hanuman text-[#0A0F2C] mt-4">
            Illustrator Artwork
          </h3>
          <p className="text-xl font-hanuman text-[#0A0F2C] font-light mt-2">
            Digital illustrations and vector artwork designed using Adobe
            Illustrator.
          </p>
          <p className="text-lg font-hanuman text-[#FF2400] mt-4">
            Work in Progress
          </p>
          <a
            href="https://www.adobe.com/illustrator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D72638] hover:text-[#FF2400] mt-4 inline-block text-lg font-hanuman"
          >
            View on Adobe →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proj;
