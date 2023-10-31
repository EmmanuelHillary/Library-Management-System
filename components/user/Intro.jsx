import React from 'react'
import { useSelector } from 'react-redux'
import { Icons } from '../icons';
import { BsCart4 } from 'react-icons/bs';
import BookComponent from './book-component';

const Intro = () => {
    const { user } = useSelector((state) => state.auth);
  return (
    <div className='w-full bg-pink-800  py-4 px-6'
              style={{
          backgroundImage: "url(/hero.png)",
          backgroundSize: "cover",
        }}
    >
      <div className="flex items-center gap-0 w-full max-w-[900px] mx-auto"
      > 
      <div className="w-full px-2 py-1 max-w-[600px] mx-auto border rounded-full bg-white flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Icons.searchBookIcon />
          <input type="text" className='border-none focus:outline-none focus:ring-0 px-4' placeholder='Search' />
        </div>
        <button className="btn text-[#9B9B9B] bg-[#E8E8E8] py-3 px-8 cursor-pointer rounded-full">
          All Categories
        </button>
        </div>
        <button className="bg-[#582C83] text-white py-4 px-8 rounded-full inline-flex items-center gap-3">
          My Queue
          <BsCart4 />
        </button>
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 mx-auto w-full">
        <p className='text-white'>Filter by:</p>
        <button className="btn text-[#9B9B9B] bg-[#FFFFFF] py-2 px-6 cursor-pointer rounded-lg">
          Title</button>
        <button className="btn text-[#9B9B9B] bg-[#FFFFFF] py-2 px-6 cursor-pointer rounded-lg">
          Author</button>
      </div>


      <div className="text-2xl md:text-[40px] text-[#EAAA00] font-medium">
        Hello{" "}
        <span className=''>
        {user}!
      </span>
      </div>
      <div className="pt-4 pb-32 text-white text-xl md:text-2xl max-w-[300px]">
          Selection of the best books just for you
      </div>
      
    </div>
  )
}

export default Intro
