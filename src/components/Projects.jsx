import React from "react";
import computerImage from "../assets/computer-on.png";
import cimgae from "../assets/c-tnea.png";
import phone from "../assets/ph.png";
import ZoomInOnScroll from "../theee/ZoomInOnScroll.jsx"; // ✅ import here

function Projects() {
  return (
    <>
      {/* Project 1 */}
      <div className="pl-[100px] py-[100px] mt-[50px] flex flex-col p-4 bg-[#0A0F2C]">
        <h1 className="text-5xl font-italiana text-white">Projects</h1>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-[133px]">
          {/* Zoom-In Only on Image */}
          <div className="pt-[84px] w-full md:w-[50%]">
            <ZoomInOnScroll>
              <img
                src={computerImage}
                alt="Computer On"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </ZoomInOnScroll>
          </div>
          <div className="space-y-3 w-full md:w-[50%] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-hanuman text-white animate-slide-right-to-left">
              Movie Review App
            </h3>
            <p className="text-lg md:text-2xl font-hanuman font-light text-white/70 tracking-[1px]">
              A full-stack web application
              <br />
              where users can sign up, log in,
              <br />
              and post, view, or delete
              <br />
              movie reviews.
            </p>
            <a
              href="https://github.com/arvindshs/moviereviewapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2400] hover:text-red-400 transition duration-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex items-center justify-center bg-[#0A0F2C] p-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Zoom-In Only on Image */}
          <ZoomInOnScroll>
            <img
              src={cimgae}
              alt="TNEA Project"
              className="w-full h-[400px] md:h-[900px] shadow-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </ZoomInOnScroll>
          <div className="px-4">
            <h3 className="text-2xl md:text-3xl font-hanuman text-white animate-slide-bottom-to-top">
              TNEA Counselling Predictions
            </h3>
            <p className="text-lg md:text-2xl font-hanuman font-light text-white/70 tracking-[1px]">
              Get accurate TNEA counselling predictions based on your cutoff and
              community rank. Find the best engineering colleges and courses you
              can get into!
            </p>
            <a
              href="https://github.com/arvindshs/consellingpredtion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2400] hover:text-red-400 transition duration-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="pl-[100px] py-[100px] flex flex-col p-4 bg-[#0A0F2C]">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-[133px] md:space-y-0">
          {/* Zoom-In Only on Image */}
          <div className="pt-[84px] w-full md:w-[50%]">
            <ZoomInOnScroll>
              <img
                src={phone}
                alt="Healthcare UI"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </ZoomInOnScroll>
          </div>
          <div className="space-y-3 w-full md:w-[50%] text-center md:text-left pt-[100px]">
            <h3 className="text-2xl md:text-3xl font-hanuman text-white animate-slide-right-to-left">
              Healthcare Practitioner App UI in Figma
            </h3>
            <p className="text-lg md:text-2xl font-hanuman font-light text-white/70 tracking-[1px]">
              This is app designed in Figma. The UI features a clean
              <br />
              lavender-themed interface for appointments, profiles, and maps.
              <br />
              Elements pop out of the screen, creating a dynamic, layered visual
              experience.
            </p>
            <a
              href="https://www.figma.com/design/1u2m0ppPe2i05zoll3HcLY/1.Health-care-parttionar?node-id=0-1&t=45ESYAKaACfhkgq0-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2400] hover:text-red-400 transition duration-300"
            >
              View on Figma →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
