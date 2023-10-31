import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxDashboard } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import logo from "../../public/sidebar/logo.png";

const AdminSidebar = ({ isSidebarOpen }) => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div
      className={`fixed lg:relative h-full w-3/4 lg:w-[100px] bg-[#971713] text-white transition-transform duration-300 transform z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex justify-center">
        <Image className="my-4" src={logo} alt="logo" />
      </div>
      <hr className="w-full border-t border-white mb-4"></hr>
      <div className="mb-4"></div>
      <nav className="w-full flex flex-col items-center gap-8">
        <div>
          <Link
            href="/admin/Dashboard"
            className={`text-white hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/admin/Dashboard") ? "border-2 border-white" : ""
            }`}
          >
            <RxDashboard
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
          </Link>
        </div>
        <div>
          <Link
            href="/admin/UserList"
            className={`text-white hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/admin/UserList") ? "border-2 border-white" : ""
            }`}
          >
            <HiUsers
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
          </Link>
        </div>

        <div>
          <Link
            href="/admin/BorrowedList"
            className={`text-white  hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/admin/BorrowedList") ? " border-2 border-white" : ""
            }`}
          >
            <BsFillCalendarWeekFill
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
          </Link>
        </div>
        <div>
          <Link
            href="/admin/TotalList"
            className={`text-white  hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/admin/TotalList") ? " border-2 border-white" : ""
            }`}
          >
            <ImBooks
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
          </Link>
        </div>
        <div>
          <Link
            href="/admin/QueuedList"
            className={`text-white  hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("/admin/QueuedList") ? "border-2 border-white" : ""
            }`}
          >
            <ImBooks
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
          </Link>
          <div>
            <Link
              href=""
              className={`text-white hover:bg-[#971713] py-1
            justify-center flex items-center w-full ${
              isActive("") ? "border-2 border-white" : ""
            }`}
            >
              <IoMdSettings
                style={{ width: "30px", height: "30px" }}
                className="m-2"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
