import React from "react";
import axios from "axios";
import AdminLayout from "@/components/layout/AdminLayout";
import DashboardCard from "@/components/cards/DashboardCard";
import SmallUserList from "@/components/lists/SmallUserList";
import SmallBookList from "@/components/lists/SmallBookList";
import SmallFineList from "@/components/lists/SmallFineList";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { SiBookstack } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import { MdAttachMoney } from "react-icons/md";
import Image from "next/image";
import OverdueList from "@/components/lists/OverdueList";
import IssueList from "@/components/lists/IssueList";
import { useState, useEffect } from "react";
import PieChart from "@/components/lists/PieChart";
import Footer from "@/components/footer/Footer";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [totalOverBooks, setTotalOverBooks] = useState(0);
  const [fine, setFine] = useState(0);
  const [books, setBooks] = useState([]);

  const [name, setName] = useState("");

  useEffect(() => {
    // Get item from local storage
    const storedName = localStorage.getItem("name");

    // Update the state with the retrieved name
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/gettotalusers`
        );
        setTotalUsers(response.data);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    const fetchTotalBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/gettotalbookvalue/books`
        );
        setTotalBooks(response.data);
      } catch (error) {
        console.error("Error fetching total books:", error);
      }
    };

    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/getallbooks`
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const fetchTotalBorrowedBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/gettotalborrowedbookvalue/books`
        );
        setTotalBorrowedBooks(response.data);
      } catch (error) {
        console.error("Error fetching total books:", error);
      }
    };

    const fetchTotalOverdueBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/gettotaloverduebookvalue/books`
        );
        setTotalOverBooks(response.data);
      } catch (error) {
        console.error("Error fetching total books:", error);
      }
    };

    const fetchTotalFines = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/totalfines`
        );
        setFine(response.data.totalFineAmount);
      } catch (error) {
        console.error("Error fetching total books:", error);
      }
    };

    fetchTotalOverdueBooks();
    fetchTotalBorrowedBooks();
    fetchTotalBooks();
    fetchTotalUsers();
    fetchBooks();
    fetchTotalFines();
  }, []);

  const cardData = [
    {
      number: totalUsers,
      icon: HiUsers,
      title: "Total Registered Users",
    },
    {
      number: totalBooks,
      icon: SiBookstack,
      title: "Total Books",
    },
    {
      number: totalBorrowedBooks,
      icon: BsFillCalendarWeekFill,
      title: "Borrowed books",
    },
    {
      number: totalOverBooks,
      icon: ImBooks,
      title: "Overdue Books",
    },
    {
      number: fine,
      icon: MdAttachMoney,
      title: "Total Book Fines",
      prefix: "$",
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className=" p-8 sm:p-4">
        <div>
          <h1 className="text-[32px] font-bold">
            Hello <span className="text-[#971713] font-outfit">{name}</span>
          </h1>

        </div>
        <div className="flex flex-col md:flex-row gap-[52px] w-full overflow-x-scroll">
          {cardData.map((card, index) => {
            return (
              <DashboardCard
                key={index}
                title={card.title}
                number={card.prefix ? `${card.prefix}${card.number}` : card.number}
                icon={card.icon}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-12 overflow-x-scroll w-full">
          <SmallUserList />
          <SmallBookList />
          <SmallFineList />
        </div>
        <div className="">
          <h1 className="py-8 text-[28px] font-outfit">Top Choices</h1>
          <div className="flex flex-row justify-between overflow-x-scroll w-full">
            {books.map((book, index) => {
              return (
                <div className="min-w-[176px] mr-12" key={index}>
                  <Image
                    loader={() => book.imageUrl}
                    src={book.imageUrl}
                    alt="book imageUrl"
                    width={176}
                    height={100}
                  />
                  <h1 className="text-[18px] font-outfit text-center">
                    {book.title}
                  </h1>
                  <h1 className="text-[16px] text-[#9B9B9B] text-center font-outfit">
                    {book.department}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <OverdueList />
        </div>
        <div className="flex flex-col md:flex-row gap-12 overflow-x-scroll w-full">
          <div style={{ flex: 1 }}>
            <IssueList />
          </div>
          <div style={{ flex: 1 }}>
            <PieChart />
          </div>
        </div>
      </div>
      <Footer />
    </AdminLayout>
  );
};

export default Dashboard;
