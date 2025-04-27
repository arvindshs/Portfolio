import React from "react";
import img1 from "../assets/1.sandworm.png";
import img2 from "../assets/moon.png";
import img3 from "../assets/ring.png";
import img4 from "../assets/toy.png";
import img5 from "../assets/room.png";

function Scroll() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="overflow-hidden whitespace-nowrap py-10">
      <div className="flex animate-scrollLoop space-x-8 md:space-x-12 lg:space-x-16">
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`scroll-${index}`}
            className="h-[150px] md:h-[200px] lg:h-[250px] w-auto object-contain rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Scroll;
