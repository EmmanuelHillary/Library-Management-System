import React from "react";
import Image from "next/image";
import Jigsaw from "../../public/icons/features.png";
import SectionImg from "../../public/sectionfour.png";
import BgDesign from "../../public/icons/bg-design.png"

const SectionFour = () => {
  return (
    <div className="flex items-center justify-between px-16 py-8 relative">
        <Image src={BgDesign} alt="bgdesign" className="absolute left-0"/>
      <div>
        <h3 className="text-[20px] font-bold flex items-center font-outfit">
          What's Next <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold w-full md:w-[400px] font-outfit">
          What books can you find on E-library
        </h1>
        <p className="text-lg md:text-[22px] w-full md:w-[600px] my-8 font-outfit">
          Lorem ipsum dolor sit amet consectetur. Nunc mauris aenean rhoncus sit
          semper consequat purus. Porttitor malesuada eget cursus diam aliquet
          amet.
        </p>
        <ul className="list-none w-full md:w-[600px]">
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-lg md:text-[22px] font-outfit">
              Lorem ipsum dolor sit amet consectetur. Gravida et enim fringilla
              dictum
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-lg md:text-[22px] font-outfit">
              Lorem ipsum dolor sit amet consectetur. Gravida et enim fringilla
              dictum
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-lg md:text-[22px] font-outfit">
              Lorem ipsum dolor sit amet consectetur. Gravida et enim fringilla
              dictum
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-lg md:text-[22px] font-outfit">
              Lorem ipsum dolor sit amet consectetur. Gravida et enim fringilla
              dictum
            </span>
          </li>
        </ul>
      </div>
      <div  className="hidden md:block">
        <Image src={SectionImg} alt="sectionimg" />
      </div>
    </div>
  );
};

export default SectionFour;
