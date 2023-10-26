import React from "react";

const SmallBookList = ({ title, users }) => {
  // Dummy data for demonstration
  const dummyData = [
    { bookId: 1, title: "Ancestor Trouble", author: "James Bot", available: 50 },
    { bookId: 2, title: "Where our hearts collide", author: "Sarah Conor", available: 30 },
    { bookId: 3, title: "The Teaching Brain", author: "Jane Smith", available: 80 },
  ];

  return (
    <div className=" min-w-[790px] mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit">
        <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">Books List</caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Book ID</th>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.bookId}</td>
                <td className="p-2 text-center">{user.title}</td>
                <td className="p-2 text-center">{user.author}</td>
                <td className="p-2 text-center">{user.available}</td>
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

export default SmallBookList;
