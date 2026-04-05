import React, { use } from 'react';
import Book from './Book';


const AllBooks = ({booksPromise}) => {
  const booksData = use(booksPromise)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 max-w-300 mx-auto mt-20'>
      {
        booksData.map((book, index)=> 
        <Book 
        book={book}
        key={index}
        ></Book>)
      }
    </div>
  );
};

export default AllBooks;