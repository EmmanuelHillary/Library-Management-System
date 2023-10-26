import React, { useState } from "react";
import Image from "next/image";
import SectionImg from "../../public/sectionthree.png";
import BgDesign from "../../public/icons/bg-design.png"

const SectionThree = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="px-16 flex items-center justify-between py-24 border-t-4 border-[#971713] relative">
         <Image src={BgDesign} alt="bgdesign" className="absolute right-[30px] top-0"/>
      <div>
        <Image src={SectionImg} alt="sectionTHREEimg" />
      </div>
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex">
            <div
              className={`cursor-pointer mr-8  ${
                activeTab === "about" ? "border-b-2 border-[#971713]" : ""
              }`}
              onClick={() => handleTabChange("about")}
            >
              <h2 className="text-[34px] font-semibold font-outfit">About</h2>
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "terms" ? "border-b-2 border-[#971713]" : ""
              }`}
              onClick={() => handleTabChange("terms")}
            >
              <h2 className="text-[34px]  font-semibold font-outfit">Terms/Conditions</h2>
            </div>
          </div>
          <div className="mt-4 w-[600px]">
            {activeTab === "about" ? (
              <p className="text-[22px] text-center font-outfit">
                Lorem ipsum dolor sit amet consectetur. Risus dapibus quam
                elementum nunc. Ultrices purus enim bibendum libero. Ut nibh
                quis sem augue vitae id. Tellus viverra enim est metus
                pellentesque praesent est sed elementum. Suspendisse id
                tristique vel in.
              </p>
            ) : (
              <p className="text-[22px] text-center font-outfit">
                Lorem ipsum dolor sit amet consectetur. Risus dapibus quam
                elementum nunc. Ultrices purus enim bibendum libero. Ut nibh
                quis sem augue vitae id. Tellus viverra enim est metus
                pellentesque praesent est sed elementum. Suspendisse id
                tristique vel in.
              </p>
            )}
          </div>
          <div className="text-white mt-12 text-[16px] flex gap-8 items-center font-semibold">
            <button className="border-4 border-[#971713] font-outfit bg-[#971713] shadow-2xl px-12 py-2  hover:bg-transparent hover:text-[#971713]">
              Create Shelf
            </button>
            <button className="border-4 border-[#D9D9D9] font-outfit  px-12 py-2  shadow-2xl hover:bg-transparent bg-[#D9D9D9] text-black">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
