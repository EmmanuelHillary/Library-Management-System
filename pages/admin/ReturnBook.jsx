import React, { useState } from "react";
import { BiSolidBookAdd } from "react-icons/bi";
import axios from "axios";
import AdminLayout from "@/components/layout/AdminLayout";

const ReturnBook = () => {
  const [bookData, setBookData] = useState({
    book_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books/return/${bookData.book_id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Book Returned Successfully");
      console.log(response);
      console.log("Book returned successfully!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
        <h1 className="text-[16px] md:text-[32px] font-outfit">
          Return a Book
        </h1>
      </div>
      <div className="mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 font-outfit"
        >
          <input
            type="text"
            name="book_id"
            value={bookData.book_id}
            onChange={handleChange}
            required
            placeholder="Book ID"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-[#971713] text-white py-2 px-4 rounded-md hover:bg-[#8e1413] flex items-center transition-colors duration-300"
          >
            <BiSolidBookAdd className="mr-2" />
            Return Book
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default ReturnBook;
