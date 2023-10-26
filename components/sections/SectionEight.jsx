import React from "react";
import Image from "next/image";
import SectionImg from "../../public/sectioneight.png";

const SectionEight = () => {
  return (
    <div className="flex items-center justify-center gap-12 px-16 py-8">
      <div>
        <h1 className="text-[40px] font-bold w-[400px] font-outfit">Studying with us?</h1>
        <p className="text-[22px] w-[600px] my-8 font-outfit">
          Lorem ipsum dolor sit amet consectetur. Pretium viverra mi imperdiet
          quam. Et mauris porta donec quis ultrices tincidunt.
        </p>
        <div className="text-white text-[16px] flex gap-8 items-center">
          <button className="border-4 border-[#971713] bg-[#971713] px-12 py-2 hover:bg-transparent font-outfit">
            Contact us
          </button>
        </div>
      </div>
      <div>
        <Image src={SectionImg} alt="sectionimg" />
      </div>
    </div>
  );
};

export default SectionEight;
