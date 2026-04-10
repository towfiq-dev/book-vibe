import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../Context/BookContext';
import { Link } from 'react-router-dom';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { CiLocationOn } from 'react-icons/ci';

const ReadLists = ({sortingType}) => {
  const readListBooksReceived = useContext(BookContext)
  const {readListBooks, handleRemoveFromReadList} = readListBooksReceived
  const [filteredReadList, setFilteredReadList] = useState(readListBooks)

  useEffect(() => {
  let sortedData = [...readListBooks];

  if (sortingType === 'Pages') {
    sortedData.sort((a, b) => a.totalPages - b.totalPages);
    setFilteredReadList(sortedData); 
  } 
  else if (sortingType === 'Ratings') {
    sortedData.sort((a, b) => b.rating - a.rating);
    setFilteredReadList(sortedData);
  }
  else if(sortingType === 'Book Name'){
    sortedData.sort((a, b)=> a.bookName.localeCompare(b.bookName))
    setFilteredReadList(sortedData)
  } 
  else {
  
    setFilteredReadList(readListBooks);
  }
}, [sortingType, readListBooks]);

  if (filteredReadList.length === 0) {
    return(
    <div>
      <h1 className='font-bold text-3xl text-center'>Listed ReadList are Not Available</h1>
    </div>
    )
  }
  return (
    <div className='flex flex-col gap-6 mt-8'>
      {
        filteredReadList.map((readList, index) => {
          return (
            <div readList={readList} key={index} className='flex flex-col md:flex-row gap-6 p-6 border rounded-2xl'>

              <div className='bg-base-200 flex justify-center items-center py-7 px-12 rounded-2xl'>
                <img className='w-32 h-44 object-cover' src={readList.image} alt= '' />
              </div>

              <div className='flex-1 space-y-3'>
                <h2 className='text-2xl font-bold text-[#131313]'>{readList.bookName}</h2>
                <p className='font-medium text-[#131313CC]'>By : {readList.author}</p>

                <div className='flex flex-wrap items-center gap-4'>
                  <div className='flex items-center gap-3'>
                    <span className='font-bold text-[#131313]'>Tag</span>
                    {readList.tags.map((tag, index) => (
                      <span key={index} className='text-green-500 bg-green-50 px-3 py-1 rounded-full font-medium'>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center gap-2 text-[#131313CC]'>
                    <CiLocationOn className='text-xl' />
                    <span>Year of Publishing: {readList.yearOfPublishing}</span>
                  </div>
                </div>

                <div className='flex flex-wrap items-center gap-6 text-[#13131399]'>
                  <div className='flex items-center gap-2'>
                    <HiOutlineUsers className='text-xl' />
                    <span>Publisher: {readList.publisher}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MdOutlineInsertPageBreak className='text-xl' />
                    <span>Page {readList.totalPages}</span>
                  </div>
                </div>

                <hr className='my-4' />

                <div className='flex flex-wrap items-center gap-3'>
                  <span className='px-5 py-2 rounded-full bg-[#328EFF26] text-[#328EFF] font-medium'>
                    Category: {readList.category}
                  </span>
                  <span className='px-5 py-2 rounded-full bg-[#FFAC3326] text-[#FFAC33] font-medium'>
                    Rating: {readList.rating}
                  </span>
                  <Link to={`/bookDetails/${readList.bookId}`}>
                    <button className='btn bg-[#23BE0A] text-white rounded-full px-6 border-none'>
                      View Details
                    </button>
                  </Link>
                  <button onClick={() => handleRemoveFromReadList(readList.bookId)} className='btn bg-red-500 text-white rounded-full px-6 border-none'>Remove</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default ReadLists;