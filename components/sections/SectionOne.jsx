import React from "react";
import Image from "next/image";
import SectionImg from "../../public/sectionone.png"

const SectionOne = () => {
  return (
    <div className="px-16 flex items-center justify-between py-24">
      <div>
        <div className="text-white text-[30px] py-4">
          <h1 className="py-4">Access to thousands of free books</h1>
          <h1>Download or read online</h1>
        </div>
        <div className="text-white text-[32px] flex gap-8 items-center">
          <button className="border-4 border-[#EAAA00] bg-[#EAAA00] px-6 py-2 rounded-3xl hover:bg-transparent">Get Started</button>
          <button className="border-4 border-[#EAAA00]  px-6 py-2 rounded-3xl hover:bg-[#EAAA00] bg-transparent">Learn More</button>
        </div>
      </div>
      <div>
        <Image src={SectionImg} alt="sectiononeimg" />
      </div>
    </div>
  );
};

export default SectionOne;
