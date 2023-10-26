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
      <div>
        <Image src={SectionImg1} alt="sectionimg1" />
      </div>
      <div>
        <h3 className="text-[20px] font-bold flex items-center font-outfit">
          Pro tip <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold w-[400px] font-outfit">
          Hardcopies or soft copies?
        </h1>
        <p className="text-[22px] w-[600px] my-8 font-outfit">
          Lorem ipsum dolor sit amet consectetur. Pretium viverra mi imperdiet
          quam. Et mauris porta donec quis ultrices tincidunt. Elit duis posuere
          enim velit. Tortor pellentesque id in purus lectus arcu purus
          sollicitudin nisl. Sem praesent felis nec bibendum. Lectus fames
          imperdiet magna suspendisse etiam integer dignissim in habitasse. Nibh
          dignissim sed sed adipiscing magnis. Aliquam lectus magna id nibh
          tellus dolor. Vivamus consequat risus habitant quam. Sem ultricies id
          vitae ut vitae.
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
