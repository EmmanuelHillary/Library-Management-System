import React from "react";
import Dummy from "../../public/books/dummy2.png";
import Image from "next/image";

const IssueList = ({ title, users }) => {
  // Dummy data for demonstration
  const dummyData = [
    {
      userId: 1,
      title: "Ancestor Trouble",
      desc: "James Bot",
      isuueDate: "10/9/2023",
      returnDate: "10/9/2023",
      picture: Dummy,
    },
    {
      userId: 1,
      title: "Ancestor Trouble",
      desc: "James Bot",
      isuueDate: "10/9/2023",
      returnDate: "10/9/2023",
      picture: Dummy,
    },
    {
      userId: 1,
      title: "Ancestor Trouble",
      desc: "James Bot",
      isuueDate: "10/9/2023",
      returnDate: "10/9/2023",
      picture: Dummy,
    },
  ];

  return (
    <div className=" min-w-[790px] mt-8">
      <div className=" overflow-y-scroll bg-white rounded-lg shadow-md">
        <table className="w-full font-outfit">
          <caption className="text-[20px] sm:text-[24px] font-semibold text-left p-4 mb-2 font-roboto">
            Issue List
          </caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">User ID</th>
              <th className="p-2">Book</th>
              <th className="p-2">Issue Date</th>
              <th className="p-2">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 text-center">{user.userId}</td>
                <td className="p-2 text-center">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Image
                      src={user.picture}
                      alt="User Image"
                      style={{
                        width: "32px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <h1 style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left" }}>
                        {user.title}
                      </h1>
                      <p style={{ fontSize: "14px", textAlign: "left"  }}>{user.desc}</p>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-center">{user.isuueDate}</td>
                <td className="p-2 text-center">{user.returnDate}</td>
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
  );
};

export default IssueList;
