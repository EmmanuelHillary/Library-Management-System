import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const OverdueList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getborrowedbooks`
        );
  
        setBookList(response.data.slice(0, 4)); // Slicing the array to display only the first 3 values
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);

  return (
    <div className="w-full mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit table-auto">
          <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">
            {" "}
            Book List Status
          </caption>
          <thead>
            <tr colSpan="7" className="bg-gray-100">
              <th className="p-2">Book ID</th>
              <th className="p-2">User ID</th>
              <th className="p-2">Books Issued</th>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Borrow Date</th>
              <th className="p-2">Overdue Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.borrowedBookid}</td>
                <td className="p-2 text-center">{user.userid}</td>
                <td className="p-2 text-center">{user.total}</td>
                <td className="p-2 text-center">{user.title}</td>
                <td className="p-2 text-center">{user.author}</td>
                <td className="p-2 text-center">{user.borrowDate}</td>
                <td className="p-2 text-center">{user.returnDate}</td>
                <td className="p-2 text-center">
                  {user.returned === true ? "Returned" : "Not returned"}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="7"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">
                <Link href={"/admin/BorrowedList"}>See All</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OverdueList;
