import { useGetallBooksQuery } from '@/app/apiSlices/book';
import React from 'react'
import BookComponent from './book-component';

const Fields = () => {
    const { data, isLoading, isError } = useGetallBooksQuery();
    console.log(data);
  return (
      <div className='px-6'>
          <div className="py-10 text-[#582C83] text-xl">
          New Arrivals
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
              {data?.map((book) => (
                  <BookComponent
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.imageUrl}
                  />
              )
              )}
          </div>
          <div className="mt-10 py-10 text-[#582C83] text-xl">
          Daily deals
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
              {data?.map((book) => (
                  <BookComponent
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.imageUrl}
                  />
              )
              )}
          </div>
    </div>
  )
}

export default Fields
