import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import User from "../../public/user.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import Footer from "@/components/footer/Footer";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [originalUserList, setOriginalUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/getallusers`
        );
        setOriginalUserList(response.data);
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };
    fetchUserList();
  }, []);

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setUserList(originalUserList);
    } else {
      // Perform the search logic based on the searchText
      const filteredUsers = originalUserList.filter((user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase())
      );
      setUserList(filteredUsers);
    }
  };
  return (
    <AdminLayout title="Database">
      <div className="w-full mt-8 p-8 overflow-x-scroll">
        <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
          <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
            <h1 className="text-[16px] md:text-[32px] font-outfit">
              User List
            </h1>
            <SearchBar onSearch={handleSearch} />
            <button className="bg-[#E4E3E3] text-[12px] md:text-[16px] px-4 text-[#9B9B9B] font-outfit">
              Sort by
            </button>
          </div>
          <table className="w-full font-outfit">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">User Name</th>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200"
                  style={{
                    marginBottom: "10px",
                    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <td className="p-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={User}
                        alt="User Image"
                        style={{
                          width: "54px",
                          height: "54px",
                          marginRight: "10px",
                        }}
                      />
                      <div style={{ width: "200px" }}>
                        <h1
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          {user.username}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">{user.userid}</td>
                  <td className="p-2">{user.department}</td>
                  <td className="p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="p-2" colSpan="3"></td>
                <td className="p-2 text-right text-[#971713] text-[14px] font-bold">
                  See All
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </AdminLayout>
  );
};

export default UserList;
