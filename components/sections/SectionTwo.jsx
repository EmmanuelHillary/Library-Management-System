import React from "react";
import Image from "next/image";
import Jigsaw from "../../public/icons/features.png";
import FeatureCards from "../cards/FeatureCards";
import SectionImg from "../../public/sectiontwo.png";

const data = [
  {
    background: "white",
    imagePath: "books.png",
    headerText: "120+ Million resourses",
    bodyText:
      "Physical books and ebooks readily available at the click of a button.",
  },
  {
    background: "white",
    imagePath: "docs.png",
    headerText: "Various Formats",
    bodyText:
      "Faster understanding and quick review of lengthy documents with audiobooks.",
  },
  {
    background: "white",
    imagePath: "thumbs.png",
    headerText: "Best Quality",
    bodyText:
      "Immerse yourself in the audio visual approach to research.",
  },
  {
    background: "white",
    imagePath: "lightning.png",
    headerText: "Quick Delivery",
    bodyText:
      "Multiple sources and AI driven research for the papers you need in one click.",
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
        <h3 className="text-[20px] font-bold flex items-center font-outfit">
          Features <Image src={Jigsaw} alt="jigsaw" />
        </h3>
        <h1 className="text-[24px] md:text-[40px] font-bold font-outfit">Explore E-Libary’s</h1>
        <h1 className="text-[24px] md:text-[40px] font-bold font-outfit">Unlimited Possibilities</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        {data.map((card, index) => {
          return (
            <FeatureCards
              background={card.background}
              imagePath={card.imagePath}
              headerText={card.headerText}
              bodyText={card.bodyText}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionTwo;

