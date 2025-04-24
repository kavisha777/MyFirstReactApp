import React from 'react';
import bulbImg from '../assets/images/bulb.png'
import heartImg from '../assets/images/heart.png';
import number2Img from '../assets/images/number2.png';

const AboutUs = () => {
  return (
    <section id="services" className="mt-16 px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-6 lg:mb-0">
          <img src={number2Img} alt="Book help illustration" className="w-[450px] h-[150px]" />
        </div>
        <div className="lg:ml-18 max-w-2xl">
          <div>
            <h1 className="text-4xl text-left mb-4">
              Not sure what to read next? Let us help you find the perfect book!
            </h1>
            <p className="text-left">
              Not sure what to read next? We've got you covered! Whether you're looking for a gripping thriller,
              a heartwarming romance, or a thought-provoking non-fiction book, our recommendations are here to
              guide you. Explore our carefully curated selections, discover hidden gems, and find books tailored
              to your interests.
            </p>
          </div>

          <div className="flex mt-10 space-x-12">
            <div>
              <button className="hover:bg-[#d6c3a8] hover:text-white p-4 rounded-md transition duration-300 text-left">
                <img src={bulbImg} alt="Expert Picks" className="h-10 w-10 mb-2" />
                <h1 className="text-left font-semibold">[Expert Picks]</h1>
                <p>Our team selects top books based on your interests</p>
              </button>
            </div>

            <div>
              <button className="hover:bg-[#d6c3a8] hover:text-white p-4 rounded-md transition duration-300 text-left">
                <img src={heartImg} alt="Member Favorites" className="h-10 w-10 mb-2" />
                <h1 className="text-left font-semibold">[Member Favorites]</h1>
                <p>See what's trending among our readers</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
