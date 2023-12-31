import React, { useState, useEffect } from "react";
import profile from "../../public/user.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const AdminNavbar = ({ toggleSidebar, title }) => {
  const [name, setName] = useState('')
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  if (token) {
    const decoded = jwtDecode(token);
    console.log(decoded);
    localStorage.setItem("name", decoded.name);
  }

  useEffect(() => {
    // Get item from local storage
    const storedName = localStorage.getItem("name");

    // Update the state with the retrieved name
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex justify-between items-center bg-white shadow-custom p-4">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-[#EAAA00] font-semibold text-[32px] font-roboto pl-4 focus:outline-none z-50"
        >
          &#9776;
        </button>
        <h2 className="text-textGreen font-medium capitalize text-[20px] sm:text-[28px] text-[#971713] pl-4 font-outfit">
          {title}
        </h2>
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col text-center">
          <span className="text-gray-700 font-semibold text-left font-outfit">
            {name}
          </span>
          <span className="text-sm text-gray-500 text-left font-outfit">
            Administrator
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
