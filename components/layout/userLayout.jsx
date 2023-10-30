import React, { useState } from "react";
import UserNavbar from "../navbar/userNavbar";
import UserSidebar from "../sidebar/UserSidebar";

const UserLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <UserSidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col w-3/4 lg:w-5/6">
        <UserNavbar  toggleSidebar={toggleSidebar} title={"Discover"} />
        <div className="flex-1 bg-[#DED6E1] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
