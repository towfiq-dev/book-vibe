import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';
const allBookFetch = async()=>{
  const bookRes = await fetch('/booksData.json')
  return bookRes.json()
}
const HomePages = () => {
  const bookPromise = allBookFetch()
  return (
    <div>
    <Banner></Banner>
    <Suspense>
    <Home bookPromise={bookPromise}></Home>
    </Suspense>
    </div>
  );
};

export default HomePages;