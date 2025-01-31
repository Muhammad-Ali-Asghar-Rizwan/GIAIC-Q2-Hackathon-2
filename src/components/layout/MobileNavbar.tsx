import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";


interface Props {
  nav :boolean
  closeNav:()=>void
}


export default function MobileNavbar({nav,closeNav}:Props) {

        const navAnimation = nav?'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div className={`fixed ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-black `}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-link-mobile'><Link href="#Home">Home</Link></div>
        <div className='nav-link-mobile'><Link href="#About">About</Link></div>
        <div className='nav-link-mobile'><Link href="#Contact">Contact</Link></div>
      </div>
      <div onClick={closeNav} className='absolute z-[10000000000] cursor-pointer top-[2rem] right-[3rem] w-[2rem] h-[2rem] text-yellow-500 text-5xl'>
      <IoMdClose />
      </div>
      
    </div>
  )
}


