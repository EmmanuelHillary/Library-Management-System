import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";
import RibbonButton from "../button/Ribbon-button";

const Navbar = () => {
  return (
    <div className=" fixed top-0 flex justify-between bg-white items-center py-6 px-16 shadow-2xl z-50 w-full">
      <div>
        <Image src={Logo} alt="logo" width={240} height={50}/>
      </div>
      <div className="text-[#242A4A] flex gap-12 text-[16px] font-outfit items-center">
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
