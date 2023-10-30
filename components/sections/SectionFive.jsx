import React from "react";
import Image from "next/image";
import Jigsaw from "../../public/icons/features.png";
import SectionImg1 from "../../public/sectionfive1.png";

const SectionFive = () => {
  return (
    <div
      className="flex items-center justify-between px-16 py-12"
      style={{
        backgroundImage: "url(/sectionfive2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="hidden md:block">
        <Image src={SectionImg1} alt="sectionimg1" />
      </div>
      <div>
        <h3 className="text-[20px] font-bold flex items-center font-outfit">
          Pro tip <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold w-full md:w-[400px] font-outfit">
          Hardcopies or soft copies?
        </h1>
        <p className="text-lg md:text-[22px] w-full md:w-[600px] my-8 font-outfit">
        An eLibrary, short for electronic library, is a digital platform or repository that provides access to a wide range of digital resources, including ebooks, audiobooks, academic journals, magazines, and other digital materials. 
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
