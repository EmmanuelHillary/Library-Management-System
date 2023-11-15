import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import User from "../../public/user.png";
import Book from "../../public/books/dummy2.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import Footer from "@/components/footer/Footer";

const dummyData = [
  {
    userId: 1,
    title: "The Hypocrite World",
    date: "March 7, 2014",
    desc: "Discover a vast collection of e-books, audiobooks, and digital resources covering a multitude of genres and subjects.",
    booksIssued: 3,
    department: "Science",
    bookpicture: Book,
    authorpicture: User,
    author: "OLUWASEUN",
    authordesc: "something something about the author",
  },
  {
    userId: 1,
    title: "The Hypocrite World",
    date: "March 7, 2014",
    desc: "Welcome to our digital haven of knowledge, where you can embark on literary journeys from the comfort of your device.",
    booksIssued: 3,
    department: "Science",
    bookpicture: Book,
    authorpicture: User,
    author: "SAMUEL",
    authordesc: "A PHILANTHROPIST",
  },
];

const TotalList = () => {
  const [totalList, setTotalList] = useState([]);
  const [originalUserList, setOriginalUserList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getallbooks`
        );
        setOriginalUserList(response.data);
        setTotalList(response.data);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setTotalList(originalUserList);
    } else {
      // Perform the search logic based on the searchText
      const filteredUsers = originalUserList.filter((title) =>
        title.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setTotalList(filteredUsers);
    }
  };

  const generateReport = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books/all-books-report`,
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
      a.download = "all_books.xlsx";
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
          <div className="p-4">
            <h1 className="text-[16px] md:text-[32px] font-outfit pb-4">
              Popular Books
            </h1>
            <div className="flex flex-row items-center overflow-scroll w-full gap-8 ">
              {dummyData.map((data, index) => {
                return (
                  <div
                    className="flex flex-row items-center justify-center bg-black p-4 gap-4 "
                    style={{
                      backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url('/queued.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    key={index}
                  >
                    <div>
                      <Image
                        src={data.bookpicture}
                        alt="book picture"
                        width={161}
                        height={257}
                      />
                    </div>
                    <div className="w-[500px] text-white">
                      <h1 className="text-[20px]">{data.title}</h1>
                      <h3 className="text-[16px]">{data.date}</h3>
                      <p className="text-[12px]">{data.desc}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                      >
                        <Image
                          src={data.authorpicture}
                          alt="User Image"
                          style={{
                            width: "32px",
                            height: "32px",
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
                            {data.author}
                          </h1>
                          <p style={{ fontSize: "11px", textAlign: "left" }}>
                            {data.authordesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
            <h1 className="text-[16px] md:text-[32px] font-outfit">
              Total Book List
            </h1>
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
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Author</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {totalList.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200"
                  style={{
                    marginBottom: "10px",
                    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <td className="p-2">{user.bookid}</td>
                  <td className="p-2">{user.title}</td>
                  <td className="p-2">{user.department}</td>
                  <td className="p-2">{user.author}</td>
                  <td className="p-2">{user.total}</td>
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

export default TotalList;
