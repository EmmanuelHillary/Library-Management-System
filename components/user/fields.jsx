// Fields.js
import { useSelector } from 'react-redux';
import { useGetallBooksQuery } from '@/app/apiSlices/book';
import React, { useEffect, useState } from 'react';
import BookComponent from './book-component';

const Fields = () => {
  const { data, isLoading, isError } = useGetallBooksQuery();
  const authToken = useSelector((state) => state.auth.token); // Retrieve the authToken'
  const [books, setBooks] = useState([])

  useEffect(()=>{
    setBooks(data)
  }, [data])

  return (
    <div className='px-6'>
      <div className="py-10 text-[#582C83] text-xl">
        New Arrivals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
        {data?.map((book) => (
          // Check if the book has a valid id before rendering
          book._id ? (
            <BookComponent
              key={book.id}
              id={book.id} // Pass the book's ID as a prop
              title={book.title}
              author={book.author}
              image={book.imageUrl}
              authToken={authToken} // Pass the authToken as a prop
            />
          ) : null
        ))}
      </div>
      <div className="mt-10 py-10 text-[#582C83] text-xl">
        Daily deals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
        {data?.map((book) => (
          // Check if the book has a valid id before rendering
          book._id ? (
            <BookComponent
              key={book.id}
              id={book.id} // Pass the book's ID as a prop
              title={book.title}
              author={book.author}
              image={book.imageUrl}
              authToken={authToken}
            />
          ) : null
        ))}
      </div>
    </div>
  );
}

export default Fields;
