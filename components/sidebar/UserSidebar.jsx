import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import Logo from "../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/slices/authSlice";
import { MdAttachMoney } from "react-icons/md";

const UserSidebar = ({ isSidebarOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };
  const handleLogout = () => {
    dispatch(logout());
    router.push("/"); // Redirect to the homepage
  };

  return (
    <div
      className={`fixed lg:relative h-full w-3/4 lg:w-auto bg-[#971713] border-r-2 border-white text-white transition-transform duration-300 transform z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex justify-center bg-white">
        <Image className="my-4" src={Logo} alt="logo" />
      </div>
      <hr className="w-full border-t border-white mb-4"></hr>
      <div className="mb-4"></div>
      <nav className="w-full flex flex-col justify-start text-left items-start gap-8">
        <div>
          <Link
            href="/user/dashboard"
            className={`text-white hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/user/dashboard") ? "border-l-8 border-white" : ""
            }`}
          >
            <RxDashboard
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Dashboard</span>
          </Link>
        </div>

        <div>
          <Link
            href="/user/UserFineList"
            className={`text-white  hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/user/UserFineList") ? "border-l-8 border-white" : ""
            }`}
          >
            <MdAttachMoney
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Fine</span>
          </Link>
        </div>
        <div>
          <a
            onClick={handleLogout}
            className={`text-white hover:bg-[#971713] py-1 px-2
          justify-center flex items-center w-full`}
          >
            <IoMdLogOut
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Logout</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default UserSidebar;
