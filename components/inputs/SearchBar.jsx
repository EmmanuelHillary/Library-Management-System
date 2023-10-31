import React from "react";
import Search from "../../public/icons/search.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };

  return (
    <div className=" relative z-0">
      <input
        type="text"
        placeholder="Search"
        className="px-2 md:px-10 py-2 border w-[100px] md:w-full rounded-3xl focus:outline-none text-[#828282] font-roboto text-[12px] md:text-[14px] bg-[#E4E3E3]"
        onChange={handleInputChange}
      />
      <div className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2">
        <Image src={Search} alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
