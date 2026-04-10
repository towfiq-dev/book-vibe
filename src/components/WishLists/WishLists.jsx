import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../Context/BookContext';
import { Link } from 'react-router-dom';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { CiLocationOn } from 'react-icons/ci';

const WishLists = ({sortingType}) => {
  const wishListBooksReceived = useContext(BookContext)
  const {wishListBooks, handleRemoveWish} = wishListBooksReceived
  const [filteredWishList, setFilteredWishList] = useState(wishListBooks)

  useEffect(()=>{
    let sortedData = [...wishListBooks]

    if (sortingType === 'Pages') {
      sortedData.sort((a, b)=> a.totalPages-b.totalPages)
      setFilteredWishList(sortedData)
    }
    else if (sortingType === 'Ratings') {
      sortedData.sort((a,b)=>a.rating-b.rating)
      setFilteredWishList(sortedData)
    }
    else if(sortingType === 'Book Name'){
      sortedData.sort((a,b)=> a.bookName.localeCompare(b.bookName))
      setFilteredWishList(sortedData)
    }

    else {
    setFilteredWishList(wishListBooks);
  }

  },[sortingType, wishListBooks])
  if (filteredWishList.length === 0) {
    return(
    <div>
      <h1 className='font-bold text-3xl text-center'>Listed Wishlist are Not Available</h1>
    </div>
    )
  }
  
  return (
    <div className='flex flex-col gap-6 mt-8'>
      {
        filteredWishList.map((wishList, index) => {

          return (
            <div wishList={wishList} key={index} className='flex flex-col md:flex-row gap-6 p-6 border rounded-2xl'>

              <div className='bg-base-200 flex justify-center items-center py-7 px-12 rounded-2xl'>
                <img className='w-32 h-44 object-cover' src={wishList.image} alt={wishList.bookName} />
              </div>

              <div className='flex-1 space-y-3'>
                <h2 className='text-2xl font-bold text-[#131313]'>{wishList.bookName}</h2>
                <p className='font-medium text-[#131313CC]'>By : {wishList.author}</p>

                <div className='flex flex-wrap items-center gap-4'>
                  <div className='flex items-center gap-3'>
                    <span className='font-bold text-[#131313]'>Tag</span>
                    {wishList.tags.map((tag, index) => (
                      <span key={index} className='text-green-500 bg-green-50 px-3 py-1 rounded-full font-medium'>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center gap-2 text-[#131313CC]'>
                    <CiLocationOn className='text-xl' />
                    <span>Year of Publishing: {wishList.yearOfPublishing}</span>
                  </div>
                </div>

                <div className='flex flex-wrap items-center gap-6 text-[#13131399]'>
                  <div className='flex items-center gap-2'>
                    <HiOutlineUsers className='text-xl' />
                    <span>Publisher: {wishList.publisher}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MdOutlineInsertPageBreak className='text-xl' />
                    <span>Page {wishList.totalPages}</span>
                  </div>
                </div>

                <hr className='my-4' />

                <div className='flex flex-wrap items-center gap-3'>
                  <span className='px-5 py-2 rounded-full bg-[#328EFF26] text-[#328EFF] font-medium'>
                    Category: {wishList.category}
                  </span>
                  <span className='px-5 py-2 rounded-full bg-[#FFAC3326] text-[#FFAC33] font-medium'>
                    Rating: {wishList.rating}
                  </span>
                  <Link to={`/bookDetails/${wishList.bookId}`}>
                    <button className='btn bg-[#23BE0A] text-white rounded-full px-6 border-none'>
                      View Details
                    </button>
                  </Link>
                  <button onClick={() => handleRemoveWish(wishList.bookId)} className='btn bg-red-500 text-white rounded-full px-6 border-none'>Remove</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default WishLists;