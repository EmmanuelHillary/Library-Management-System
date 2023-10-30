import React, { useState, useEffect } from "react";
import axios from "axios";

const SmallUserList = ({ title, users }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/getallusers`
        );
        console.log(response);
        setUserList(response.data.slice(0, 3)); // Slicing the array to display only the first 3 values
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);
  return (
    <div className=" min-w-[790px] mt-8">
      <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
        <table className="w-full font-outfit">
          <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">
            Users List
          </caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">User ID</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Email</th>
              
              <th className="p-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user._id}</td>
                <td className="p-2 text-center">{user.username}</td>
                <td className="p-2 text-center">{user.email}</td>
                <td className="p-2 text-center">{user.department}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="2"></td>
              <td className="p-2" colSpan="2"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">
                See All
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SmallUserList;
