import React, { Suspense } from 'react';
import Banner from '../shared/banner/Banner';
import AllBooks from './AllBooks';
const booksFetch = async()=>{
  const booksRes= await fetch('/booksData.json')
  return booksRes.json()
}
const HomePages = () => {
  
  const booksPromise = booksFetch()
  return (
    <div>
      <Banner></Banner>
      <Suspense>
      <AllBooks 
      booksPromise={booksPromise}
      ></AllBooks>
      </Suspense>
    </div>
  );
};

export default HomePages;