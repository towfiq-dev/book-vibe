import React from 'react';
import BannerImg from '../../../assets/images/banner.png'
const Banner = () => {
  return (
    <div className="flex justify-center mt-10 max-w-300 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse gap-40 bg-base-300 px-15 py-15 rounded-xl w-full">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='w-130'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;