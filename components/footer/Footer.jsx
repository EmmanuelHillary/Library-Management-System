import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Instagram from "../../public/social/insta.png";
import Facebook from "../../public/social/face.png";
import Twitter from "../../public/social/twitter.png";
import Linkedin from "../../public/social/link.png";
import Location from "../../public/icons/location.png";
import Phone from "../../public/icons/phone.png";

const Footer = () => {
  return (
    <>
      <div className="mx-auto py-16 flex lg:flex-row flex-col justify-between px-12 md:px-40 items-start bg-[#971713] gap-8 md:gap-24 w-full relative">
        <div>
          <div className="flex items-start flex-col">
            <Image src={Logo} alt="Logo" className="md:w-[143px] md:h-[27px] w-[95px] h-[19px] bg-white"/>

            <p className="font-mont text-[12px] text-white w-full sm:w-[350px] md:w-[408px] py-4">
            Lorem ipsum dolor sit amet consectetur. Risus dapibus quam elementum nunc. Ultrices purus enim bibendum libero. Ut nibh quis sem augue vitae id. .
            </p>
            <p className="font-mont text-[12px] pt-4 md:pt-16 text-white">
              <span className="border-r-2 border-[#971713] pr-3 navbar-text">
                Terms of use
              </span>{" "}
              <span className="pl-2 navbar-text">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start text-white font-mont ">
            <h1 className="text-[14px] text-white font-bold">
              Useful Links
            </h1>
            <div className="text-[12px]">
              <p className=" py-2 navbar-text">Home</p>
              <p className=" py-2 navbar-text">About us</p>
              <p className=" py-2 navbar-text">Books</p>
              <Link href="#"><p className=" py-2 navbar-text">Contact us</p></Link>
            </div>
            <div className="flex text-white text-[12px] items-center gap-4 py-2">
              Follow us{" "}
              <span>
                <Image src={Instagram} alt="Logo" />
              </span>
              <span>
                <Image src={Twitter} alt="Logo" />
              </span>
              <span>
                <Image src={Facebook} alt="Logo" />
              </span>
              <span>
                <Image src={Linkedin} alt="Logo" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start text-white font-mont relative">
            <h1 className="text-[14px] text-white font-bold">Contact Us</h1>
            <div className="text-[12px]">
              <div className=" py-2 flex items-center gap-4">
                <p>
                  <Image src={Phone} alt="Logo" />
                </p>
                <p>Some Number</p>
              </div>
              <div className=" py-2 flex items-start gap-4">
                <p>
                  <Image src={Location} alt="Logo" />
                </p>
                <p className="w-[86px]">
                  Some Place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#971713] pb-12 relative">
        <p className="font-mont text-[12px] text-white">
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;