import React from "react";
import Carousel from "../carousel/Carousel";

const SectionSeven = () => {
  return (
    <div className="px-16 py-8 flex flex-col justify-center items-center overflow-hidden">
      <div>
        <h1 className="text-center text-lg md:text-[34px] font-bold font-outfit">MOST POPULAR</h1>
        <p className="text-center text-lg md:text-[32px] font-outfit w-full md:w-[800px]">
          Browse the collection of our most popular books, you will definitely find what you are looking for
        </p>
      </div>
      <div style={{ height: "400px", overflow: "hidden" }}>
        <Carousel />
      </div>
    </div>
  );
};

export default SectionSeven;
