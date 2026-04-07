import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BookContextProvider from '../Context/BookContextProvider';

const MainLayout = () => {
  return (
    <div>
      <BookContextProvider>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </BookContextProvider>
    </div>
  );
};

export default MainLayout;