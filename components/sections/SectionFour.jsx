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
          Whats Next <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold w-full md:w-[400px] font-outfit">
          What books can you find on E-library
        </h1>
        <p className="text-[22px] w-[600px] my-8 font-outfit">
        In an eLibrary, you can find a wide range of books covering various genres and subjects. Some key points include:
        </p>
        <ul className="list-none w-full md:w-[600px]">
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-[22px] font-outfit">
            Reference Materials: Many eLibraries provide access to encyclopedias, dictionaries, and reference books for research and learning.
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-[22px] font-outfit">
            Academic Texts: Students and researchers can access textbooks, research papers, and academic journals for educational purposes.
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-[22px] font-outfit">
            Magazines and Periodicals: Some eLibraries offer digital subscriptions to magazines, newspapers, and other periodicals.
            </span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-[#971713] rounded-full mr-2"></span>
            <span className="text-black text-[22px] font-outfit">
            Ebooks and Audiobooks: Depending on the platform, you can find both traditional ebooks and audiobooks for those who prefer to listen rather than read
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
