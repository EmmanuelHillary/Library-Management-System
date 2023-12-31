import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import User from "../../public/user.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import Footer from "@/components/footer/Footer";

const BorrowedList = () => {
  const [borrowedList, setBorrowedList] = useState([]);
  const [originalUserList, setOriginalUserList] = useState([]);
  const [filteredBorrowedList, setFilteredBorrowedList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getborrowedbooks`
        );
        setOriginalUserList(response.data);
        setBorrowedList(response.data);
        setFilteredBorrowedList(response.data);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);

  const handleFilterChange = async (filter) => {
    setSelectedFilter(filter);
    try {
      let queryParams = {};

      if (filter === "overdue") {
        queryParams.overdue = true;
      } else if (filter === "returned") {
        queryParams.returned = true;
      } else if(filter === "not returned"){
        queryParams.returned = false;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books/getborrowedbooks`,
        { params: queryParams }
      );

      setFilteredBorrowedList(response.data);
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  const generateReport = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books/all-borrowed-books-report`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "all_borrowed_books.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };


  return (
    <AdminLayout title="Database">
      <div className="w-full mt-8 p-8">
        <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
          <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
            <h1 className="text-[16px] md:text-[32px] font-outfit">
              Borrowed List
            </h1>
            <select
              value={selectedFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="p-2 border border-gray-300 rounded-md ml-4 font-outfit"
            >
              <option value="all">All</option>
              <option value="overdue">Overdue</option>
              <option value="returned">Returned</option>
              <option value="not returned">Not Returned</option>
            </select>

            <button
              className="bg-green-500 text-[12px] md:text-[16px] px-6  text-white py-2 font-outfit"
              onClick={generateReport}
            >
              Generate Report
            </button>
          </div>
          <table className="w-full font-outfit">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Book ID</th>
                <th className="p-2 text-left">User Name</th>
                <th className="p-2 text-left">Book Issued</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Author</th>
                <th className="p-2 text-left">Borrow Date</th>
                <th className="p-2 text-left">Overdue Date</th>
                <th className="p-2 text-left">Overdue</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBorrowedList.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200"
                  style={{
                    marginBottom: "10px",
                    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <td className="p-2">{user.borrowedBookid}</td>
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
                  <td className="p-2">{user.total}</td>
                  <td className="p-2">{user.title}</td>
                  <td className="p-2">{user.author}</td>
                  <td className="p-2">{user.borrowDate}</td>
                  <td className="p-2">{user.returnDate}</td>
                  <td className="p-2">
                    {user.overdue === true ? "overdue" : "Not overdue"}
                  </td>
                  <td
                    className={`p-2 text-left ${
                      user.returned ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.returned ? "Returned" : "Not returned"}
                  </td>
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

export default BorrowedList;
