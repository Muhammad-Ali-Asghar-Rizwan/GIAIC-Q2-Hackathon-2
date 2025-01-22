import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { sanityFetch } from '../../sanity/lib/fetch';
import { fourProducts } from '../../sanity/lib/queries';

type Product = {
  _id:string,
  name:string,
  price:number,
  description:string,
  imageUrl:string,
}


const  Selling = async () => {

  const products:Product[] = await sanityFetch({query:fourProducts}) 

  


  return (
    <div className='mt-20'>
      <div className='border-b border-gray-400'></div>
    <div className='mt-20 mx-8 flex flex-wrap items-center justify-center gap-8'>
  <h1 className='text-5xl font-extrabold mb-6 w-full text-center'>NEW ARRIVALS</h1>
  {products.map((product) => (
    <div
      key={product._id}
      className='bg-[#F9F9F9] flex flex-col items-center justify-center rounded-lg w-[230px] p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
    >
      <div className='flex flex-col items-center'>
        <Link href={`/posts/${product._id}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className='w-[190px] h-[190px] object-cover rounded-lg transition-transform hover:scale-75 duration-300 ease-in-out'
          />
        </Link>
      </div>
      <div className=' mt-4'>
        <h1 className='text-[16px] font-semibold'>{product.name}</h1>
        
        <div className='flex  mt-1'>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className="text-yellow-400 "
            >
              ★
            </span>
          ))}
          <span className='text-gray-600 text-[14px] ml-2'>
            4.5/5
          </span>
        </div>
      <h2 className='font-bold text-[18px]'>${product.price}</h2>
      </div>
    </div>
  ))}
</div>
<div className='flex items-center justify-center'>

  <button className='flex items-center justify-center mt-8 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300'>
    View All
  </button>
</div>
</div>

  );
};

export default Selling;

