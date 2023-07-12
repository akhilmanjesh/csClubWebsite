import React, { useState } from 'react';

const NavBar = () => {

  return (
    <nav className="top-0 left-0 w-full p-4 font-manrope">
      <div className="container mx-auto">
        <div className=' flex flex-row justify-between'>
          <div> 
            {/* Logo + Club Name Currently Dummy Info*/}
            <a
              href="/about"
              className="hover:text-gray-400 hover:underline font-extrabold"
            >
              About Us
            </a>
          </div>
          <div className="items-center hidden space-x-4 md:flex">
            {/* Pages On Site */}
            <a
              href="/about"
              className="hover:text-gray-400 hover:underline font-extrabold"
            >
              About Us
            </a>
            <a
              href="/events"
              className="hover:text-gray-400 hover:underline font-extrabold"
            >
              Events
            </a>
            
          </div>
        </div>
              
      </div>

    </nav>
  );
};

export default NavBar;
