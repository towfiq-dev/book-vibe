import React, { Suspense } from 'react';
import Banner from '../shared/banner/Banner';
import AllBooks from './AllBooks';

const HomePages = () => {
  const booksPromise = booksFetch()
  return (
    <div>
      <Banner></Banner>

    </div>
  );
};

export default HomePages;