import React from "react";

const OverdueList = ({ title, users }) => {
  // Dummy data for demonstration
  const dummyData = [
    { bookId: 1, user: "Brother bernard", booksIssued: 25, title: "Ancestor Trouble", author: "James Bot", overdue: 3, status: "returned" },
    { bookId: 2, user: "Navas", booksIssued: 5, title: "Where our hearts collide", author: "James Bot", overdue: 3, status: "returned" },
    { bookId: 3, user: "Son", booksIssued: 2, title: "Ancestor saved", author: "James Bot", overdue: 3, status: "returned"},
    {bookId: 4, user: "Goku", booksIssued: 15, title: "Red", author: "James Bot", overdue: 3, status: "returned"}
  ];

  return (
    <div className="w-full mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit">
        <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">Overdue Book List</caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Book ID</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Books Issued</th>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Overdue</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.bookId}</td>
                <td className="p-2 text-center">{user.user}</td>
                <td className="p-2 text-center">{user.booksIssued}</td>
                <td className="p-2 text-center">{user.title}</td>
                <td className="p-2 text-center">{user.author}</td>
                <td className="p-2 text-center">{user.overdue}</td>
                <td className="p-2 text-center">{user.status}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="6"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">See All</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OverdueList;
