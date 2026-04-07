import React, { use } from 'react';
import Books from '../Books/Books';

const Home = ({bookPromise}) => {
  const bookData = use(bookPromise)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 max-w-300 mx-auto mt-20'>
      {
      bookData.map((books, index)=> 
      <Books 
      books={books} 
      key={index}>

      </Books>)
      }
    </div>
  );
};

export default Home;