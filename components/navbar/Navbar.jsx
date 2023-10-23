import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";
import RibbonButton from "../button/Ribbon-button";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-16 bg-gradient-to-b from-black to-transparent z-50 w-full">
      <div>
        <Image src={Logo} alt="logo" width={240} height={50}/>
      </div>
      <div className="text-white flex gap-12 text-[26px] items-center">
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">BOOKS</Link>
        <Link href="#">ADMIN</Link>
        <RibbonButton text="LOGIN"/>
      </div>
    </div>
  );
};

export default Navbar;
