

import Link from 'next/link';
import React from 'react';
import { RiCloseLargeFill } from "react-icons/ri";

function NavbarTop() {
  return (
    <div className='bg-black h-[48px]'>


    <div className="max-w-7xl mx-auto h-[48px] text-white bg-black flex items-center justify-between px-4 relative">
      {/* Centered Text with ShopNow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm md:text-base">
        <p className="hidden sm:block text-[17px] sm:tex-[12] truncate">
        Sign up and get 20% off to your first order. 
        <span className='text-[14px] sm:text-[18px]'> Sign Up Now </span>
        </p>
        <Link href="/" className="flex sm:hidden font-bold underline">ShopNow</Link>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center text-sm md:text-base">
        <h1 className="flex items-center gap-2">
        <RiCloseLargeFill />

        </h1>
      </div>
    </div>
    </div>
  );
}

export default NavbarTop;



