import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Icons } from '../icons';
import { BsCart4 } from 'react-icons/bs';
import BookComponent from './book-component';
import axios from 'axios';

const Intro = () => {
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authToken = useSelector((state) => state.auth.token); 

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://librarymanagementsys-20df705de90f.herokuapp.com/lib/v1/books/searchbooks?title=${searchQuery}`
      );

      const data = response.data;

      setSearchResults(data);
    } catch (error) {
      console.error('Error while searching for books:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const [name, setName] = useState('')

  useEffect(() => {
    // Get item from local storage
    const storedName = localStorage.getItem("username");

  
    if (storedName) {
      setName(storedName);
    }
  }, []);
  return (
    <div className='w-full bg-pink-800  py-4 px-6' style={{ backgroundImage: "url(/hero.png)", backgroundSize: "cover" }}>
      <div className="flex items-center gap-0 w-full max-w-[900px] mx-auto">
        <div className="w-full px-2 py-1 max-w-[600px] mx-auto border rounded-full bg-white flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <Icons.searchBookIcon />
            <input
              type="text"
              className='border-none focus:outline-none focus:ring-0 px-4'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button className="btn text-[#9B9B9B] bg-[#E8E8E8] py-3 px-8 cursor-pointer rounded-full">
            All Categories
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 mt-10 mx-auto w-full">
        <p className='text-white'>Filter by:</p>
        <button className="btn text-[#9B9B9B] bg-[#FFFFFF] py-2 px-6 cursor-pointer rounded-lg">
          Title
        </button>
        <button className="btn text-[#9B9B9B] bg-[#FFFFFF] py-2 px-6 cursor-pointer rounded-lg">
          Author
        </button>
      </div>

      <div className="text-2xl md:text-[40px] text-[#EAAA00] font-medium">
        Hello{" "}
        <span className=''>{name}!</span>
      </div>
      <div className="pt-4 pb-32 text-white text-xl md:text-2xl max-w-[300px]">
        {searchQuery ? `You searched for: ${searchQuery}` : 'Selection of the best books just for you'}
      </div>
      <div className='flex flex-row items-center gap-8 flex-wrap'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults.map((book) => (       
          <BookComponent
            key={book._id}
            id={book._id}
            image={book.imageUrl}
            book={book}
            authToken={authToken}
          />
          
        ))
      )}
      </div>
    </div>
  );
};

export default Intro;
