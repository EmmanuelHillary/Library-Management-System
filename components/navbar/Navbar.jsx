import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";
import RibbonButton from "../button/Ribbon-button";

<style jsx>{`
  .link {
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .link:hover {
    background-color: rgba(151, 23, 19, 0.5); /* Replace with your desired overlay color and opacity */
  }
`}</style>
const Navbar = () => {
  return (
    <div className=" fixed top-0 flex justify-between bg-white items-center py-6 px-16 shadow-2xl z-50 w-full">
      <div>
        <Image src={Logo} alt="logo" width={170} height={37}/>
      </div>
      <div className="text-[#242A4A] flex gap-12 text-[16px] font-outfit items-center">
        <Link href="/">Home</Link>
        <Link href="/authentication/Admin" className="link text-[#971713] bg-[#FFECEC] py-2 px-4 hover:bg-transparent font-outfit">Admin</Link>
        <Link href="/authentication/Login" className="link text-white bg-[#971713] py-2 px-4 hover:bg-white hover:text-[#971713] font-outfit">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
