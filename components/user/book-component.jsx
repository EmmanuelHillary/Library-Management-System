import React, { useState } from 'react';
import axios from 'axios';

const BookComponent = ({ title, author, image, id, authToken, book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [borrowed, setBorrowed] = useState(false);
  const handleBorrow = () => {
    axios
      .post(
        `https://librarymanagementsys-20df705de90f.herokuapp.com/lib/v1/books/borrowbooks/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            accept: '*/*',
          },
        }
      )
      .then((response) => {
        // Mark the book as borrowed if the API request is successful
        alert('You have successfully borrowed the book. You can go to the library to get it.');
      })
      .catch((error) => {
        console.error('Error borrowing the book:', error);
        alert('An error occurred while borrowing the book. Please try again later.');
      });
  };

  return (
    <div className='flex flex-col justify-center items-start relative'>
      <div
        className='bg-blue-500 h-full w-full max-w-[215px] max-h-[302px] relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover object-center'
        />
        {isHovered && (
          <div className='absolute inset-0 flex items-center justify-center'>
            {borrowed ? (
              <div className='bg-green-500 text-white p-2 rounded'>
                Borrowed
              </div>
            ) : (
              <button className='bg-black text-white p-2 rounded' onClick={handleBorrow}>
                Borrow
              </button>
            )}
          </div>
        )}
      </div>
      <div className="px-6 py-2">
        <h3 className='text-[#000] font-medium'>{title}</h3>
        <small className='text-[#9B9B9B] font-light'>{author}</small>
      </div>
    </div>
  );
}

export default BookComponent;
