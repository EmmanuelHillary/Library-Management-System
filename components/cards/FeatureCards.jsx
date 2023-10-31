import React from "react";
import Image from "next/image";

const FeatureCards = ({ background, imagePath, bodyText, headerText }) => {

  return (
    <div
      style={{ backgroundColor: `${background}` }}
      className="w-[290px] p-8 rounded-2xl border-[1px] border-[#971713]"
    >
      <Image
        src={`/icons/${imagePath}`}
        alt={headerText}
        width={45}
        height={50}
      />
      <h1 className="text-[15px] text-[#971713] py-4 font-bold font-outfit">
        {headerText}
      </h1>
      <p className="text-[15px] text-black font-outfit">{bodyText}</p>
    </div>
  );
};

export default FeatureCards;
