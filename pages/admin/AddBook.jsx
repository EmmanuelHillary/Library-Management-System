import React, { useState } from "react";
import { BiSolidBookAdd } from "react-icons/bi";
import axios from "axios";
import AdminLayout from "@/components/layout/AdminLayout";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    total: "",
    imageUrl: "",
    available: true,
    department: "",
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
    console.log(bookData);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books/createbook`,
        {
          ...bookData,
          total: parseInt(bookData.total, 10),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        console.log("Book added successfully!");
      } else {
        console.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between px-2 md:px-12 py-4 items-center w-full">
        <h1 className="text-[16px] md:text-[32px] font-outfit">Add a Book</h1>
      </div>
      <div className="mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 font-outfit"
        >
          {/* Title */}
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
            placeholder="Title"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />

          {/* Author */}
          <input
            type="text"
            name="author"
            required
            value={bookData.author}
            onChange={handleChange}
            placeholder="Author"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />

          {/* Total */}
          <input
            type="number"
            name="total"
            required
            value={bookData.total}
            onChange={handleChange}
            placeholder="Total"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />

          {/* Image URL */}
          <input
            type="text"
            name="imageUrl"
            required
            value={bookData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />

          {/* Department */}
          <input
            type="text"
            name="department"
            required
            value={bookData.department}
            onChange={handleChange}
            placeholder="Department"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />

          {/* Available */}
          <label className="flex items-center">
            <input
              type="checkbox"
              name="available"
              required
              checked={bookData.available}
              onChange={() =>
                setBookData((prevData) => ({
                  ...prevData,
                  available: !prevData.available,
                }))
              }
              className="mr-2"
            />
            Available
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#971713] text-white py-2 px-4 rounded-md hover:bg-[#8e1413] flex items-center transition-colors duration-300"
          >
            <BiSolidBookAdd className="mr-2" />
            Add Book
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBook;
