import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const SmallFineList = ({ title, users }) => {
  const [fineList, setFineList] = useState([]);

  useEffect(() => {
    const fetchFineList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/allfines`
        );
        console.log(response)
        setFineList(response.data.fines.slice(0, 3)); // Slicing the array to display only the first 3 values
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchFineList();
  }, []);

  return (
    <div className=" min-w-[790px] mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit">
          <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">Fine List</caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Book ID</th>
              <th className="p-2">Book Name</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Amount</th>
              
            </tr>
          </thead>
          <tbody>
            {fineList.map((book, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{book._id}</td>
                <td className="p-2 text-center">{book.book}</td>
                <td className="p-2 text-center">{book.user}</td>
                <td className="p-2 text-center">${book.fineAmount}</td>
                
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="3"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">
                {" "}
                <Link href={"/admin/FineList"}>See All</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SmallFineList;
