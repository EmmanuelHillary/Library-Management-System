import React from "react";
import Image from "next/image";
import Jigsaw from "../../public/icons/features.png";
import SectionImg from "../../public/sectionsix.png";
import BgDesign from "../../public/icons/bg-design-big.png";
import Triangle from "../../public/icons/triangle.png";

const SectionSix = () => {
  return (
    <div className="flex items-center justify-between px-16 py-36 relative">
      <Image src={BgDesign} alt="bgdesign" className="absolute right-0 z-0" />
      <Image src={Triangle} alt="triangle" className="absolute left-0 top-[-200px]" />
      <div>
        <h3 className="text-[20px] font-bold flex items-center font-outfit">
          Pro tip <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold w-full md:w-[400px] font-outfit">Start Now!</h1>
        <p className="text-lg md:text-[22px] w-full md:w-[600px] my-8 font-outfit">
          A thousand and one benefits at the tips of your fingers. Register your
          E-library account now to get started!
        </p>
        <div className="text-white text-[16px] flex gap-8 items-center">
          <button className="border-4 border-[#971713] bg-[#971713] px-12 py-2  hover:bg-transparent font-outfit z-20">
            Get Started
          </button>
        </div>
      </div>
      <div  className="hidden md:block">
        <Image src={SectionImg} alt="sectionimg" />
      </div>
    </div>
  );
};

export default SectionSix;
