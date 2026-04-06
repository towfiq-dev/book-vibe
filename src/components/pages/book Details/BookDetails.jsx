import React, { useContext, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { useLoaderData } from 'react-router-dom';
import { BookContext } from '../../context/BookProvider';
const BookDetails = () => {
  const bookData = useLoaderData();
  const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, bookId} = bookData
  if (!bookData) {
    return <h2>Loading or Book Not Found...</h2>;
  }
  const bookContext = useContext(BookContext)
  console.log(bookContext, 'bookContext');
  
  const [storedBooks, setStoredBooks] = useState([])
  const handleMarkAsRead=(currentBook)=>{
  const isExitsBook = storedBooks.find((book)=> book.bookId === currentBook.bookId);
  if (isExitsBook) {
    alert('The book is all ready exist')
  }
  else{
    setStoredBooks([...storedBooks, currentBook])
  }
  console.log(currentBook, storedBooks, 'book');
  
  }

  return (
    <div className="flex gap-10 items-center justify-center max-w-300 mx-auto mt-10">
  <figure className='w-600 bg-base-300 p-15 rounded-xl'>
    <img className='w-320 h-140' src={image}/>
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
    <span className='flex'>
    <p>Number of Pages:</p>
    <p className='font-bold'>{totalPages}</p>
    </span>
    <span className='flex gap-20'>
    <p>Publisher:</p>
    <p className='font-bold'>{publisher}</p>
    </span>
    <span className='flex'>
    <p>Year Of Publishing:</p>
    <p className='font-bold'>{yearOfPublishing}</p>
    </span>
    <span className='flex mr-59'>
    <p>Rating:</p>
    <span className='flex items-center text-[18px] font-semibold'>
    <h3>{rating}</h3>
    <CiStar className='text-[25px]' />
    </span>
    </span>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={()=>handleMarkAsRead(bookData)}>Mark as Read</button>
      <button className="btn btn-primary">Add to Wishlist</button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;