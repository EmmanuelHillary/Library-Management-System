import React, { useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import AdminSidebar from "../sidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <AdminSidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col w-3/4 lg:w-5/6">
        <AdminNavbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 bg-[#DED6E1] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
