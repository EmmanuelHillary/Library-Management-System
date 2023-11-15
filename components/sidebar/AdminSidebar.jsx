import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { HiUsers } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { BiSolidBookAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/slices/authSlice";
import Logo from "../../public/logo.png";

const AdminSidebar = ({ isSidebarOpen }) => {
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
        <Image className="py-4   " src={Logo} alt="logo" />
      </div>
      <hr className="w-full border-t border-white mb-4"></hr>
      <div className="mb-4"></div>
      <nav className="w-full flex flex-col justify-start text-left items-start gap-8">
        <div>
          <Link
            href="/admin/Dashboard"
            className={`text-white hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/Dashboard") ? "border-l-8 border-white" : ""
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
            href="/admin/UserList"
            className={`text-white hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/UserList") ? "border-l-8 border-white" : ""
            }`}
          >
            <HiUsers
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Users</span>
          </Link>
        </div>

        <div>
          <Link
            href="/admin/BorrowedList"
            className={`text-white  hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/BorrowedList") ? "border-l-8 border-white" : ""
            }`}
          >
            <BsFillCalendarWeekFill
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Borrowed Books</span>
          </Link>
        </div>
        <div>
          <Link
            href="/admin/TotalList"
            className={`text-white  hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/TotalList") ? "border-l-8 border-white" : ""
            }`}
          >
            <SiBookstack
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Popular Books</span>
          </Link>
        </div>
        <div>
          <Link
            href="/admin/QueuedList"
            className={`text-white  hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/QueuedList") ? "border-l-8 border-white" : ""
            }`}
          >
            <ImBooks
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Book Queue</span>
          </Link>
        </div>

        <div>
          <Link
            href="/admin/FineList"
            className={`text-white  hover:bg-[#971713] py-1 px-2
            justify-center flex items-center w-full ${
              isActive("/admin/FineList") ? "border-l-8 border-white" : ""
            }`}
          >
            <MdAttachMoney
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Fine List</span>
          </Link>
        </div>

        <div>
          <Link
            href="/admin/AddBook"
            className={`text-white hover.bg-[#971713] py-1 px-2 justify-center flex items-center w-full ${
              isActive("/admin/AddBook") ? "border-l-8 border-white" : ""
            }`}
          >
            <BiSolidBookAdd
              style={{ width: "30px", height: "30px" }}
              className="m-2"
            />
            <span className="hidden lg:inline">Add Book</span>
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

export default AdminSidebar;
