import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ReadLists from '../ReadLists/ReadLists';
import WishLists from '../WishLists/WishLists';

const ListedBooks = () => {

  const [sortingType, setSortingType] = useState('')
  
  return (
    <div className='max-w-300 mx-auto'>
      <div className='grid justify-center mt-3 my-5 '>
      <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className={sortingType === 'Pages'? 'bg-green-600 text-black': ''} onClick={()=> setSortingType('Pages')}>
      <a>Pages</a>
      </li>

    <li className={sortingType === 'Ratings' ? 'bg-green-600 text-black' : ''} onClick={()=> setSortingType('Ratings')}>
      <a>Ratings</a>
      </li>

    <li className={sortingType === 'Book Name' ? 'bg-green-600 text-black' : ''} onClick={()=> setSortingType('Book Name')}>
      <a>Book Name</a>
      </li>

  </ul>
      </div>
      </div>
      
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadLists sortingType={sortingType}>
        
          </ReadLists>
        </TabPanel>

        <TabPanel>
          <WishLists sortingType={sortingType}>

          </WishLists>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ListedBooks;