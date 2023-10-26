import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import User from "../../public/user.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";

const SmallUserList = ({ title, users }) => {
  // Dummy data for demonstration
  const dummyData = [
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
    {
      userName: "John Doe",
      userId: 1,
      department: "Science",
      booksIssued: 3,
      email: "MoeLester@gmail.com",
      picture: User,
    },
  ];

  return (
    <AdminLayout title="Database">
      <div className="w-full mt-8">
        <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
          <table className="w-full font-outfit">
         
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">User Name</th>
                <th className="p-2">ID</th>
                <th className="p-2">Department</th>
                <th className="p-2">Books Issued</th>
                <th className="p-2">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-2 text-center">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={user.picture}
                        alt="User Image"
                        style={{
                          width: "54px",
                          height: "54px",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <h1
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          {user.userName}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-center">{user.userId}</td>
                  <td className="p-2 text-center">{user.department}</td>
                  <td className="p-2 text-center">{user.booksIssued}</td>
                  <td className="p-2 text-center">{user.email}</td>
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
    </AdminLayout>
  );
};

export default SmallUserList;
