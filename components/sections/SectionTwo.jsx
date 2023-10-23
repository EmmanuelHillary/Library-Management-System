import React from "react";
import Image from "next/image";
import Jigsaw from "../../public/icons/features.png";
import FeatureCards from "../cards/FeatureCards";
import SectionImg from "../../public/sectiontwo.png";

const data = [
  {
    background: "#582C83",
    imagePath: "books.png",
    headerText: "120+ Million resourses",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Nec tincidunt lacus malesuada felis venenatis donec. Pellentesque lorem faucibus egestas volutpat mauris porta viverra. Aliquet purus ornare rhoncus proin tellus faucibus pellentesque iaculis ut. Eget mi vel blandit eu tellus purus id laoreet vel.",
  },
  {
    background: "#836898",
    imagePath: "docs.png",
    headerText: "Various Formats",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Nec tincidunt lacus malesuada felis venenatis donec. Pellentesque lorem faucibus egestas volutpat mauris porta viverra. Aliquet purus ornare rhoncus proin tellus faucibus pellentesque iaculis ut. Eget mi vel blandit eu tellus purus id laoreet vel.",
  },
  {
    background: "#FEE9FF",
    imagePath: "thumbs.png",
    headerText: "Best Quality",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Nec tincidunt lacus malesuada felis venenatis donec. Pellentesque lorem faucibus egestas volutpat mauris porta viverra. Aliquet purus ornare rhoncus proin tellus faucibus pellentesque iaculis ut. Eget mi vel blandit eu tellus purus id laoreet vel.",
  },
  {
    background: "#00C9AE",
    imagePath: "lightning.png",
    headerText: "Quick Delivery",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Nec tincidunt lacus malesuada felis venenatis donec. Pellentesque lorem faucibus egestas volutpat mauris porta viverra. Aliquet purus ornare rhoncus proin tellus faucibus pellentesque iaculis ut. Eget mi vel blandit eu tellus purus id laoreet vel.",
  },
];

const SectionTwo = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/sectiontwo.png)",
        backgroundSize: "cover",
      }}
      className="px-16 py-8"
    >
      <div>
        <h3 className="text-[20px] font-bold flex items-center">
          Features <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[40px] font-bold">Explore E-Libary’s</h1>
        <h1 className="text-[40px] font-bold">Unlimited Possibilities</h1>
      </div>
      <div className="flex justify-between items-center mt-8">
        {data.map((card, index) => {
          return (
            <FeatureCards
              background={card.background}
              imagePath={card.imagePath}
              headerText={card.headerText}
              bodyText={card.bodyText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionTwo;

