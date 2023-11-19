import React, { useState, useEffect } from "react";
import UserLayout from "@/components/layout/userLayout";
import User from "../../public/user.png";
import Image from "next/image";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";
import DashboardCard from "@/components/cards/DashboardCard";
import { MdAttachMoney } from "react-icons/md";

const UserFineList = () => {
  const [userList, setUserList] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [totalFine, setTotalFine] = useState(0);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/fines/${user}`
        );
        console.log(response);
        setUserList(response.data);
        const total = response.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.fineAmount,
          0
        );
        setTotalFine(total);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserList();
  }, [user]);

  const prefix = "$";

  return (
    <UserLayout title="User Fine">
      <div className="w-full mt-8 p-8 overflow-x-scroll">
        <div className="my-8">
          <DashboardCard
            title="Total Fine"
            number={`${prefix}${totalFine}`}
            icon={MdAttachMoney}
          />
        </div>
        <div className="overflow-y-scroll bg-white rounded-lg shadow-md ">
          <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
            <h1 className="text-[16px] md:text-[32px] font-outfit">
              Fine List
            </h1>
          </div>
          {!userList.length ? (
            <h1 className="text-center text-[16px] font-outfit mt-4 p-8">
              You have no fines.
            </h1>
          ) : (
            <table className="w-full font-outfit">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">User</th>
                  <th className="p-2 text-left">Book ID</th>
                  <th className="p-2 text-left">Book Name</th>
                  <th className="p-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200"
                    style={{
                      marginBottom: "10px",
                      boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
                    }}
                  >
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
                            {user.user}
                          </h1>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">{user._id}</td>
                    <td className="p-2">{user.book}</td>
                    <td className="p-2">${user.fineAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </UserLayout>
  );
};

export default UserFineList;
