import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ribbon from "../../public/icons/ribbon.png";

const Ribbonbutton = ({ text }) => {
  return (
    <div className="relative">
      <Image src={Ribbon} alt="ribbon" />
      <Link href="#" className="absolute top-[85px] left-[43px]">{text}</Link>
    </div>
  );
};

export default Ribbonbutton;
