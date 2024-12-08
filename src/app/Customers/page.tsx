import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

// import { Anton } from 'next/font/google';

// const anton = Anton({ subsets: ['latin'], weight: ["400","400"] });

export default function Customer() {
  return (
    <main className='py-9 flex justify-center items-center'>
      <div className='w-full max-w-[1100px] mb-12 flex flex-col gap-7 px-4'>

        {/* heading div */}
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <h1 className="text-[30px] sm:text-[48px] font-extrabold text-center sm:text-left">OUR HAPPY CUSTOMERS</h1>
          <div className='font-bold flex gap-4 mt-6 sm:mt-0'>
            <div><GoArrowLeft className='h-[24px] text-2xl' /></div>
            <div><GoArrowRight className='h-[24px] text-2xl' /></div>
          </div>
        </div>

        {/* div for boxes */}
        <div className=' flex justify-center gap-8 sm:flex-row sm:justify-start'>

          {/* Customer Box 1 */}
          <div className='w-full sm:w-[400px] md:w-[350px] h-[auto] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2 hover:shadow-xl hover:border-orange-500 hover:bg-gray-100 transition-all'>
            <div className='flex gap-1'>
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar size={20} color='orange' />
            </div>
            <div className='flex gap-2'>
              <h1 className='font-bold'>Sarah M.</h1>
              <FaCheckCircle color="#01AB31" size={20} className='mt-[2px]' />
            </div>
            <div><p>Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations.</p></div>
          </div>

          {/* Customer Box 2 */}
          <div className='w-full sm:w-[400px] md:w-[350px] h-[auto] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2 hover:shadow-xl hover:border-orange-500 hover:bg-gray-100 transition-all'>
            <div className='flex gap-1'>
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar size={20} color='orange' />
            </div>
            <div className='flex gap-2'>
              <h1 className='font-bold'>Alex K.</h1>
              <FaCheckCircle color="#01AB31" size={20} className='mt-[2px]' />
            </div>
            <div><p>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable catering to a variety of tastes and occasions.</p></div>
          </div>

          {/* Customer Box 3 */}
          <div className='w-full sm:w-[400px] md:w-[350px] h-[auto] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2 hover:shadow-xl hover:border-orange-500 hover:bg-gray-100 transition-all'>
            <div className='flex gap-1'>
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar color="orange" size={20} />
              <FaStar size={20} color='orange' />
            </div>
            <div className='flex gap-2'>
              <h1 className='font-bold'>James L.</h1>
              <FaCheckCircle color="#01AB31" size={20} className='mt-[2px]' />
            </div>
            <div><p>As someone whos always on the lookout for unique fashion pieces Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends</p></div>
          </div>

        </div>
      </div>
    </main>
  )
}
