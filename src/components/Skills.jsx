// import React from "react";

// function Skills() {
//   return (
//     <>
//       <div className="bg-[#0A0F2C] mt-8">
//         <div className="pt-[115px] pl-[100px] text-5xl font-italiana text-[#D72638]">
//           Skills
//         </div>
//         <div className="space-y-8 pt-2">
//           {/* Design Bar */}
//           <div className="flex items-center">
//             <h2 className="text-3xl text-[#D72638] w-[20%] pl-[100px]">
//               Design
//             </h2>
//             <div className="w-[50%] bg-[#D72638] h-[50px]"></div>
//           </div>
//           {/* Code Bar */}
//           <div className="flex items-center">
//             <h2 className="text-3xl text-[#D72638] w-[20%] pl-[100px]">Code</h2>
//             <div className="w-[50%] bg-[#D72638] h-[50px]"></div>
//           </div>
//         </div>
//         <div className="font-italiana flex text-white space-x-[200px] ">
//           <div className="pl-[100px] pt-[82px]">
//             <h2 className="text-4xl underline text-[#D72638]">Design</h2>
//             <ul className="pt-[28px] text-3xl space-y-5 w-full ">
//               <li>Figma</li>
//               <li>Ui Ux Design</li>
//               <li>Photoshop</li>
//               <li>Illustrator</li>
//               <li>Blender</li>
//             </ul>
//           </div>

//           <div className="flex-col justify-end w-full text-white pt-[82px]">
//             <h2 className="text-4xl underline text-[#D72638]">Code</h2>
//             <ul className="pt-[28px] text-3xl space-y-5 w-full">
//               <li>Html</li>
//               <li>Css</li>
//               <li>Javascript</li>
//               <li>ReactJs</li>
//               <li>Nodejs</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skills;
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
          <div className="flex items-center">
            <h2 className="text-3xl text-[#0A0F2C] font-italiana w-[20%] pl-[100px] text-animate">
              Design
            </h2>
            <div className="w-[50%] bg-[#D72638] h-[50px] bar"></div>
          </div>
          {/* Code Bar */}
          <div className="flex items-center">
            <h2 className="text-3xl text-[#0A0F2C] font-italiana w-[20%] pl-[100px] text-animate">
              Code
            </h2>
            <div className="w-[50%] bg-[#0A0F2C] h-[50px] bar"></div>
          </div>
        </div>
        <div className="font-hanuman flex text-[#0A0F2C] space-x-[200px] px-[400px]">
          <div className="pl-[100px] pt-[82px] text-animate">
            <h2 className="text-4xl underline text-[#D72638]">Design</h2>
            <ul className="pt-[28px] text-3xl space-y-5 w-full text-[#D72638]">
              <li>Figma</li>
              <li>Ui Ux Design</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Blender</li>
            </ul>
          </div>

          <div className="flex-col justify-end w-full text-[#0A0F2C] pt-[82px] text-animate">
            <h2 className="text-4xl underline text-[#0A0F2C]">Code</h2>
            <ul className="pt-[28px] text-3xl space-y-5 w-full">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Nodejs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
