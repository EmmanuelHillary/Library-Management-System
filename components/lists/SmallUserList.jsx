import React from "react";

const SmallUserList = ({ title, users }) => {
  // Dummy data for demonstration
  const dummyData = [
    { userId: 1, userName: "John Doe", booksIssued: 3, department: "Science" },
    { userId: 2, userName: "Jane Smith", booksIssued: 2, department: "Arts" },
    { userId: 3, userName: "Bob Johnson", booksIssued: 1, department: "History" },
  ];

  return (
    <div className=" min-w-[790px] mt-8">
      <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
        <table className="w-full font-outfit">
        <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">Users List</caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">User ID</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Books Issued</th>
              <th className="p-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.userId}</td>
                <td className="p-2 text-center">{user.userName}</td>
                <td className="p-2 text-center">{user.booksIssued}</td>
                <td className="p-2 text-center">{user.department}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="3"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">See All</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SmallUserList;
