import React from 'react';
import number1Img from '../assets/images/number1.png';

const Home = () => {
  return (
    <section className="bg-[#d6c3a8]" id="Home">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-20">
        <div className="grid items-center justify-center text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Step into Shelf Space</h1>
          <p className="text-lg">Where your next adventure is waiting on the shelf.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded transition duration-300 mx-auto lg:mx-0">
            Get Started
          </button>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={number1Img}
            alt="Shelf Space welcome illustration"
            className="w-[640px] h-[592px] lg:ml-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
