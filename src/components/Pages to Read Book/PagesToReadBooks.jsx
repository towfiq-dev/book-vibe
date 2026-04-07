import React from 'react';
import { Link } from 'react-router-dom';

const PagesToReadBooks = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      {/* Visual Element */}
      <div className="relative mb-10">
        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
            />
          </svg>
        </div>
        <div className="absolute top-0 right-0 p-2 bg-secondary rounded-full shadow-lg animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-4xl font-extrabold text-base-content mb-4">
        Coming Soon!
      </h2>
      <p className="text-lg text-base-content/60 max-w-md mx-auto mb-8">
        We are currently building the data visualization for your reading habits. 
        Soon you'll be able to see a beautiful chart of your pages read!
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
        <Link to="/listedBooks" className="btn btn-outline">
          View Listed Books
        </Link>
      </div>

      {/* Subtle Progress Indicator */}
      <div className="mt-16 w-full max-w-xs">
        <div className="flex justify-between text-xs font-bold text-base-content/40 mb-2 uppercase tracking-widest">
          <span>Module Status</span>
          <span>In Progress</span>
        </div>
        <div className="h-1.5 w-full bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3 rounded-full animate-shimmer bg-gradient-to-r from-primary via-primary/50 to-primary bg-[length:200%_100%]"></div>
        </div>
      </div>
    </div>
  );
};

export default PagesToReadBooks;