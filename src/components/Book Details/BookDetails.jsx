import React, { use, useContext, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { BookContext } from '../Context/BookContext';
const bookDetailsPromise = fetch('/booksData.json').then(res=> res.json())
const BookDetails = () => {
  const params = useParams()
  const {bookDetailsId} = params
  const bookDetailsData = use(bookDetailsPromise)
  const expectedBook = bookDetailsData.find((book)=> book.bookId === Number(bookDetailsId))
  const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook
  
  const contextBookReceived1 = useContext(BookContext)
  const {handleMarkAsRead, handleWishList} = contextBookReceived1
  
  const [isGreen1, setIsGreen1] = useState(false)
  const [isGreen2, setIsGreen2] = useState(false)
  
  return (
    <div className="flex gap-10 items-center justify-center max-w-300 mx-auto mt-10 bg-gray-300 p-4 rounded-xl">
  <figure className='w-500 bg-base-300 p-10 rounded-xl'>
    <img className='w-5xl h-100 rounded' src={image}/>
  </figure>
  <div className="card-body space-y-2">
    <h2 className="text-[30px] font-bold">{bookName}</h2>
    <h3 className='font-medium'>By: {author}</h3>
    <hr />
    <h3 className='text-[18px] font-medium'>{category}</h3>
    <hr />
    <p className='text-justify'>
      <small className='font-bold text-[15px]'>Review: </small> 
      {review}
      </p>
    <div className='flex gap-8'>
    <h3 className='font-bold'>Tag</h3>
    {
      tags.map((tag, index)=> {
        return(
          <div key={index}>
          <p className='semi-bold bg-base-300 px-2 rounded-2xl w-28 text-center text-green-500'>{tag}</p>
          </div>
        )
      })
    }
    </div>
    <hr />
    <div className='space-y-3'>
    <span className="grid grid-cols-[180px_1fr] gap-4">
    <p>Number of Pages:</p>
    <p className='font-bold'>{totalPages}</p>
    </span>
    <span className="grid grid-cols-[180px_1fr] gap-4">
    <p>Publisher:</p>
    <p className='font-bold'>{publisher}</p>
    </span>
    <span className="grid grid-cols-[180px_1fr] gap-4">
    <p>Year Of Publishing:</p>
    <p className='font-bold'>{yearOfPublishing}</p>
    </span>
    <span className="grid grid-cols-[180px_1fr] gap-4">
    <p>Rating:</p>
    <span className='flex items-center text-[18px] font-semibold'>
    <h3>{rating}</h3>
    <CiStar className='text-[25px]' />
    </span>
    </span>
    </div>
    <div className='flex gap-6'>
      <button className={`btn ${isGreen1 === false? '' : 'bg-green-600'}`} 
      onClick={()=> {handleMarkAsRead(expectedBook); setIsGreen1(true)}}>
      {isGreen1===true? 'Mark as Read': 'Read the Book'}
        </button>


      <button className={`btn ${isGreen2 === false? '' : 'bg-green-600'}`} 
      onClick={()=> {handleWishList(expectedBook); setIsGreen2(true)}}>
      {isGreen2===true? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;