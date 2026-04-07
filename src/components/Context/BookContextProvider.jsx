import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';

const BookContextProvider = ({children}) => {
const [readListBooks, setStoredBooks] = useState([])

const [wishListBooks, setWishListBooks] = useState([]) 
const handleMarkAsRead = (currentBook)=>{
  const isExistBook = readListBooks.find((book)=> book.bookId === currentBook.bookId)
  if (isExistBook) {
    toast.error(`${currentBook.bookName} is all ready read list`)
  }else{
    setStoredBooks([...readListBooks, currentBook])
    toast.success(`${currentBook.bookName} is added to listed books`)
  }
}

const handleWishList =(currentBook)=>{
const isExistBook = wishListBooks.find((book)=> book.bookId === currentBook.bookId)
if (isExistBook) {
  toast.error(`${currentBook.bookName} is all ready wish list`)
}
else{
  setWishListBooks([...wishListBooks, currentBook])
  toast.success(`${currentBook.bookName} is added to wish list books`)
}
}

const data = { 
  readListBooks,
  setStoredBooks,
  handleMarkAsRead,
  wishListBooks,
  setWishListBooks,
  handleWishList
}

  return (
      <BookContext.Provider value={data}>
      {children}
      </BookContext.Provider>
  );
};

export default BookContextProvider;