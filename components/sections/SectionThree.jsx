import React, { useState } from "react";
import Image from "next/image";
import SectionImg from "../../public/sectionthree.png";
import BgDesign from "../../public/icons/bg-design.png"

const SectionThree = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between py-12 md:py-24 border-t-4 border-[#971713] relative">
      <Image src={BgDesign} alt="bgdesign" className="absolute right-[30px] top-0" />
      <div className="mb-8 md:mb-0 md:mr-8">
        <Image src={SectionImg} alt="sectionTHREEimg" />
      </div>
      <div className="text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div
            className={`cursor-pointer mb-4 md:mb-0 md:mr-8 ${
              activeTab === "about" ? "border-b-2 border-[#971713]" : ""
            }`}
            onClick={() => handleTabChange("about")}
          >
            <h2 className="text-2xl md:text-4xl font-semibold font-outfit">About</h2>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "terms" ? "border-b-2 border-[#971713]" : ""
            }`}
            onClick={() => handleTabChange("terms")}
          >
            <h2 className="text-2xl md:text-4xl font-semibold font-outfit">Terms/Conditions</h2>
          </div>
        </div>
        <div className="mt-4 w-full md:w-[600px] mx-auto md:mx-0">
          <p className="text-lg md:text-2xl font-outfit">
          An eLibrary, short for electronic library,is a digital platform or repository that provides access to a wide range of digital resources, including ebooks, audiobooks, academic journals, magazines, and other digital materials.
          </p>
        </div>
        <div className="text-white mt-8 md:mt-12 text-lg flex flex-col md:flex-row gap-4 items-center font-semibold">
          <button className="border-4 border-[#971713] font-outfit bg-[#971713] shadow-2xl px-8 py-2  hover:bg-transparent hover:text-[#971713]">
            Create Shelf
          </button>
          <button className="border-4 border-[#D9D9D9] font-outfit  px-8 py-2  shadow-2xl hover:bg-transparent bg-[#D9D9D9] text-black">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
