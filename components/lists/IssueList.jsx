import React from "react";
import Dummy from "../../public/books/dummy2.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const IssueList = () => {
  const [queueList, setQueueList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getqueuedusers`
        );

        setQueueList(response.data.slice(0, 3)); // Slicing the array to display only the first 3 values
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);

  return (
    <div className=" min-w-[790px] mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit">
          <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">
            Queue List
          </caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">User</th>
              <th className="p-2">Book</th>
              <th className="p-2">Date</th>
              <th className="p-2">Author</th>
            </tr>
          </thead>
          <tbody>
            {queueList.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.user}</td>
                <td className="p-2 text-center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <h1
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {user.book}
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-center">{user.date}</td>
                <td className="p-2 text-center">{user.author}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="p-2" colSpan="3"></td>
              <td className="p-2 text-right text-[#971713] text-[14px] font-bold">
                <Link href={"/admin/QueuedList"}>See All</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default IssueList;
