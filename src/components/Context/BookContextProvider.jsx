import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadlistFromLocalDB, removeFromLocalDB, getAllWishlistFromLocalDB, 
  addWishListToLocalDB, 
  removeWishFromLocalDB  } from '../utils/localDB';

const BookContextProvider = ({children}) => {
const [readListBooks, setStoredBooks] = useState(()=>getAllReadlistFromLocalDB())

const [wishListBooks, setWishListBooks] = useState(() => getAllWishlistFromLocalDB()); 

const handleMarkAsRead = (currentBook)=>{
  const isExistBook = readListBooks.find((book)=> book.bookId === currentBook.bookId)
  if (isExistBook) {
    toast.error(`${currentBook.bookName} is all ready read list`)
  }

  else{ 
    addReadListToLocalDB(currentBook); //local
    setStoredBooks([...readListBooks, currentBook])
    toast.success(`${currentBook.bookName} is added to listed books`)
  }
}

const handleRemoveFromReadList = (id) => {
  removeFromLocalDB(id);
  const remainingBooks = readListBooks.filter(book => book.bookId !== id);
  setStoredBooks(remainingBooks);
  toast.warn("Book removed from read list");
};


const handleWishList =(currentBook)=>{
const isExistBook = wishListBooks.find((book)=> book.bookId === currentBook.bookId)
if (isExistBook) {
  toast.error(`${currentBook.bookName} is all ready wish list`)
}

else{
  addWishListToLocalDB(currentBook);
  setWishListBooks([...wishListBooks, currentBook])
  toast.success(`${currentBook.bookName} is added to wish list books`)
}
}

const handleRemoveWish = (id) => {
    removeWishFromLocalDB(id);
    const remainingWish = wishListBooks.filter(book => book.bookId !== id);
    setWishListBooks(remainingWish)
    toast.warn("Removed from wishlist");
  };

const data = { 
  readListBooks,
  setStoredBooks,
  handleMarkAsRead,
  wishListBooks,
  setWishListBooks,
  handleWishList,
  handleRemoveFromReadList,
  handleRemoveWish
}

  return (
      <BookContext.Provider value={data}>
      {children}
      </BookContext.Provider>
  );
};

export default BookContextProvider;