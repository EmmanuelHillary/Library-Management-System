import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import User from "../../public/user.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import Footer from "@/components/footer/Footer";

const FineList = () => {
  const [userList, setUserList] = useState([]);
  const [originalUserList, setOriginalUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/allfines`
        );
        setOriginalUserList(response.data.fines);
        setUserList(response.data.fines);
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
        user.user.toLowerCase().includes(searchText.toLowerCase())
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
              Fine List
            </h1>
            <SearchBar onSearch={handleSearch} />
          </div>
          <table className="w-full font-outfit">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Book Name</th>
                <th className="p-2 text-left">Amount</th>
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
                          {user.user}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">{user.book}</td>
                  <td className="p-2">${user.fineAmount}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </AdminLayout>
  );
};

export default FineList;
