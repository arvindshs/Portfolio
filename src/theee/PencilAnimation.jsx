import React from "react";
import Lottie from "react-lottie";
import animationData from "./website-decoration.json"; // your Lottie animation file

const PencilAnimation = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center pr-[100px] mb-[50px]">
      <div className="text-center">
        <Lottie options={options} height={500} width={400} />
        <div className="mt-4 text-4xl font-bold">
          <span className="text-blue-500">Developer</span> |{" "}
          <span className="text-red-500">Designer</span>
        </div>
      </div>
    </div>
  );
};

export default PencilAnimation;
