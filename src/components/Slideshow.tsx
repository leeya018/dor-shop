import { slides } from "@/util";
import { useEffect, useState } from "react";

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = slides.map((slide) => slide.image);
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative w-full h-[40vh] flex items-center justify-center bg-gray-200">
      {/* Current Image */}
      <img
        src={images[currentIndex]}
        alt="slider"
        className="object-cover w-full h-full"
      />

      {/* Left Side (Previous Image) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2  transition-all duration-300"
        onMouseEnter={prevImage}
      >
        <span
          onClick={prevImage}
          className="absolute cursor-pointer left-5 top-1/2 text-white text-2xl"
        >
          &#8249;
        </span>
      </div>

      {/* Right Side (Next Image) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2  transition-all duration-300"
        onMouseEnter={nextImage}
      >
        <span
          onClick={nextImage}
          className="absolute cursor-pointer right-5 top-1/2 text-white text-2xl"
        >
          &#8250;
        </span>
      </div>
    </div>
  );
};

export default Slideshow;
