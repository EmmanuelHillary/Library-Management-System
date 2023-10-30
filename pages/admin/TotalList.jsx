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
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus eros cras proin non donec facilisis egestas. Integer nulla feugiat vivamus dignissim ut. Pellentesque ac nulla ultrices cursus scelerisque maecenas libero scelerisque orci. Sit mauris tristique vestibulum elit etiam sed volutpat diam sed.",
    booksIssued: 3,
    department: "Science",
    bookpicture: Book,
    authorpicture: User,
    author: "somebody wrote",
    authordesc: "something something about the author",
  },
  {
    userId: 1,
    title: "The Hypocrite World",
    date: "March 7, 2014",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus eros cras proin non donec facilisis egestas. Integer nulla feugiat vivamus dignissim ut. Pellentesque ac nulla ultrices cursus scelerisque maecenas libero scelerisque orci. Sit mauris tristique vestibulum elit etiam sed volutpat diam sed.",
    booksIssued: 3,
    department: "Science",
    bookpicture: Book,
    authorpicture: User,
    author: "somebody wrote",
    authordesc: "something something about the author",
  },
];

const TotalList = ({ title, users }) => {
  const [totalList, setTotalList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getallbooks`
        );
        console.log(response);
        setTotalList(response.data);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    fetchBookList();
  }, []);

  return (
    <AdminLayout title="Database">
      <div className="w-full mt-8 p-8">
        <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
          <div className="p-4">
            <h1 className="text-[16px] md:text-[32px] font-outfit pb-4">Popular this week</h1>
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
            <SearchBar />
            <button className="bg-[#E4E3E3] text-[12px] md:text-[16px] px-4 text-[#9B9B9B] font-outfit">
              Sort by
            </button>
          </div>
          <table className="w-full font-outfit">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Book ID</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Author</th>
                <th className="p-2 text-left">Total Issued</th>
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
                  <td className="p-2">{user._id}</td>
                  <td className="p-2">{user.title}</td>
                  <td className="p-2">{user.author}</td>
                  <td className="p-2">{user.total}</td>
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
      <Footer />
    </AdminLayout>
  );
};

export default TotalList;
