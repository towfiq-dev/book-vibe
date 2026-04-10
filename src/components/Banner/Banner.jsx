import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImg from '../../assets/images/banner.png';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">
      <div className="hero bg-base-300 rounded-3xl p-8 lg:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">

          <div className="flex-1 flex justify-center">
            <img
              src={BannerImg}
              className="max-w-xs md:max-w-sm rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
              alt="Featured Book"
            />
          </div>


          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#131313]">
              Books to freshen up <br className="hidden md:block" /> your bookshelf
            </h1>
            <p className="py-8 text-lg text-gray-600">
              Discover your next favorite read from our curated collection of best-selling books and hidden gems.
            </        p>
            <button 
              onClick={() => navigate('/listedBooks')}
              className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-5 py-3 text-6 font-bold h-auto min-h-0 capitalize"
            >
              View The List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;