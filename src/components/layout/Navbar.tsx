"use client";
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
// import { Menu } from 'lucide-react';
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import Link from 'next/link';
import NavbarTop from './NavbarTop';
import SearchBar from './Search';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/Store';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import { Menu } from 'lucide-react';


function Navbar() {
  const item = useSelector((state: RootState) => state.cart);
  return (
    <div className=''>
      <NavbarTop />

      <header className="max-w-7xl mx-auto body-font">
        <div className="flex items-center justify-between h-20 mx-5">
          {/* Move SheetTrigger (Menu Bar) here */}
          <div className="lg:hidden ">
            <Sheet>
              <SheetTrigger>
                <Menu className='mt-2' />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>MENU</SheetTitle>
                  {/* <SheetDescription>Click outside to close</SheetDescription> */}
                </SheetHeader>
                <ul className="flex flex-col gap-5 mt-6">
                  <li>
                    <Link href="/" className="hover:text-gray-900 hover:cursor-pointer hover:underline">Shop</Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-gray-900 hover:cursor-pointer hover:underline">Contact</Link>
                  </li>
                  <li>
                    <Link href="/Selling" className="hover:text-gray-900 hover:cursor-pointer hover:underline">New Arrival</Link>
                  </li>
                  <li>
                    <Link href="/Category" className="hover:text-gray-900 hover:cursor-pointer hover:underline">Brands</Link>
                  </li>
                  <li>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>


          <h1 className="text-[30px] font-extrabold ">Shop.Co</h1>
          {/* Navigation for Larger Screens */}
          <nav className="hidden lg:flex gap-[20px] ml-6">
            <Link href="/" className="mr-5 flex items-center justify-center gap-1 hover:text-gray-900 hover:cursor-pointer hover:underline">
              Shop
              <MdKeyboardArrowDown />
            </Link>
            <Link href="/Arrival" className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline">On Sale</Link>
            <Link href="/Selling" className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline">New Arrival</Link>
            <Link href="/category" className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline">Brands</Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </nav>

          <div className="flex items-center">

            <div className='hidden md:flex'>
              <SearchBar />
            </div>

            <div className="flex gap-1 ml-4 items-center justify-center">
              <div className='flex items-center justify-center'>
                <Link href="/Cart">
                  <MdOutlineShoppingCart className="w-[32.13px] h-[30.25px] mt-5" />
                  <p className='bg-red-500 rounded-full h-5 w-5 text-white flex items-center justify-center relative  bottom-10 left-4'>
                    {item.length}
                  </p>
                </Link>
              </div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>



    </div>
  )
}

export default Navbar