import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";
import RibbonButton from "../button/Ribbon-button";

const Navbar = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between bg-white items-center py-6 px-0 md:px-16 shadow-2xl z-50 w-full">
      <div>
        <Image src={Logo} alt="logo" width={170} height={37}/>
      </div>
      <div className="text-[#242A4A] flex flex-row gap-6 text-[12px] md:text-[16px] font-outfit items-center mt-4 md:mt-0">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Catalog</Link>
        <Link href={"/authentication/Admin"} className="text-[#971713] bg-[#FFECEC] py-2 px-4">Admin</Link>
        <Link href={"/authentication/Login"}  className="text-white bg-[#971713] py-2 px-4">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
