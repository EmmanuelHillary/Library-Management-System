import React from "react";
import Image from "next/image";

const FeatureCards = ({ background, imagePath, bodyText, headerText }) => {
  console.log(background);
  return (
    <div
      style={{ backgroundColor: `${background}80` }}
      className="w-[290px] p-8 rounded-2xl"
    >
      <Image
        src={`/icons/${imagePath}`}
        alt={headerText}
        width={45}
        height={50}
      />
      <h1 className="text-[15px] text-[#582C83] py-4 font-bold">
        {headerText}
      </h1>
      <p className="text-[15px] text-black">{bodyText}</p>
    </div>
  );
};

export default FeatureCards;
