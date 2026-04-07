import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Books = ({books}) => {
  const {bookName, author, image, rating, category, tags, bookId} = books
  return (
    <Link to={`bookDetails/${bookId}`} className='border border-black rounded-xl p-4'>
      <div className='bg-base-300 py-4 rounded-xl grid justify-center'>
      <img className='w-30 h-45' src={image} alt="" />
      </div>
      <div className='flex gap-6 mt-3'>
      {tags.map((tag, index)=> {
        return (
          <div key={index}>
          <h2 className='semi-bold bg-base-300 px-2 rounded-2xl w-28 text-center text-green-500'>{tag}</h2>
          </div>
        )
      }
      )}
      </div>
      <h3 className='text-[22px] font-bold mb-2'>{bookName}</h3>
      <p className='font-bold mb-3'>By: {author}</p>
      <hr />
      <div className='flex justify-between mt-3'>
      <p className='font-bold'>{category}</p>
      <span className='flex items-center text-[18px] font-semibold'>
      <h3>{rating}</h3>
      <CiStar className='text-[25px] cursor-pointer'/>
      </span>
      </div>

    </Link>
  );
};

export default Books;