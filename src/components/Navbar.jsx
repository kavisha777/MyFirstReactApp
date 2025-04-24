
import React from 'react';
import { Link } from 'react-router-dom';



function Navbar () {
  return (
    <nav className="fixed top-0 bg-white w-full h-10 flex justify-center items-center shadow-md z-50">
      <div className="flex w-full max-w-screen-xl px-4 justify-between items-center">
        <div className="text-lg font-bold">
          <h1>Shelf Space</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <Link to="/home" className="hover:text-orange-500">Home</Link>
          <Link to="/aboutus" className="hover:text-orange-500">About Us</Link>
          
          <Link to="/collections" className="hover:text-orange-500">Collections</Link>
          <Link to="/contact" className="hover:text-orange-500"><button>Contact</button></Link>
          <Link
            to="/get-started"
            className="hover:text-orange-500 text-white border rounded-full p-1 px-3 bg-orange-500 hover:bg-white hover:border-orange-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;