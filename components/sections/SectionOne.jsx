import React from "react";
import Image from "next/image";
import SectionImg from "../../public/sectioneight.png";
import Line from "../../public/icons/Line.png";

const SectionOne = () => {
  return (
    <div className="px-16 flex flex-col md:flex-row items-center justify-between py-24">
      <div>
        <div className="text-[#242A4A]  py-4">
          <h1 className="py-4 text-[24px] md:text-[56px] font-bold w-full md:w-[666px] relative font-outfit">
            The Power of Knowledge at Your Fingertips{" "}
            <Image src={Line} alt="line" className="absolute bottom-0"/>
          </h1>
          <p className="w-full md:w-[500px] text-[16px] md:text-[23px] font-outfit mt-8">
            Dive into Discovery! Access thousands of free books and unleash the
            power of knowledge, fuel your curiosity, and embark on an academic
            adventure. Start now!
          </p>
        </div>
        <div className="text-white text-[18px] flex gap-8 items-center">
          <button className="border-4 border-[#971713] bg-[#971713] px-12 py-2 hover:bg-transparent font-outfit">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <Image src={SectionImg} alt="sectiononeimg" />
      </div>
    </div>
  );
};

export default SectionOne;
