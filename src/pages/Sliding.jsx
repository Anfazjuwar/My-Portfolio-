// Sliding.js

import { useEffect, useState } from "react";
import image1 from "../assets/E-commerce.png";
import image2 from "../assets/GYM.png";
import image3 from "../assets/e-f.png";
import image4 from "../assets/backend.png";
import img5 from "../assets/hotel.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sliding = () => {
  const [currentIndex, setCurentInex] = useState(0);

  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: img5,
    },
  ];

  const nextlide = () => {
    const islastSlides = currentIndex === slides.length - 1;
    const newIndex = islastSlides ? 0 : currentIndex + 1;
    setCurentInex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextlide, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <div className="w-full h-[480px] md:w-[800px] relative ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl saturate-200 blur-sm "
      ></div>
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <AnchorLink
          type="button"
          href="#projects"
          className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          MY <span className="text-red">PRO</span>JECTS
        </AnchorLink>
      </div>
    </div>
  );
};

export default Sliding;
