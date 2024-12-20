import React from 'react';
import Link from 'next/link';
import ArrivalCard from './pageCard';


const Arrival = () => {
  const posts = [
    {
      id: '5',
      title: 'T-SHIRT WITH TAPE DETAILS',
      price: '$120 ',
      resp: '* * * * (88)',
      imageUrl: '/images/cloth1.png',
    },
    {
      id: '6',
      title: 'SKINNY FIT JEANS',
      price: '$240',
      resp: '* * * * (75)',
      imageUrl: '/images/cloth2.png',
    },
    {
      id: '7',
      title: 'CHECKERED SHIRT',
      price: '$180',
      resp: '* * * * (99)',
      imageUrl: '/images/cloth3.png',
    },
    {
      id: '8',
      title: 'SLEEVE STRIPED T-SHIRT',
      price: '$130',
      resp: '* * * * (99)',
      imageUrl: '/images/cloth4.png',
    },
    // {
    //   id: '5',
    //   title: 'Next.Js 15',
    //   price: 'Leveraging Middleware in Next.js 15 for Smarter Applications',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // {
    //   id: '6',
    //   title: 'Next.Js 15',
    //   price: '10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // Add more unique entries as needed
  ];

  return (
    <div data-aos="flip-left" className='bg-white'>

    <div className="bg-white  mt-16 max-w-[1200px]  mx-auto">
        <h1 className=' text-[35px] text-center font-extrabold'>top selling</h1>
        

      {/* <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
        </h1> */}
      <div className="grid grid-cols-1 items-center sm:justify-center mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
            <div className="fade-in" key={post.id}>
            <ArrivalCard post={post}  />
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
               <div className='flex items-center  justify-center  ml-20 sm:ml-20'>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>

               </div>
            </div> */}
          </div>
        ))}
      </div>
        <Link href="/category">
      <div className='flex items-center justify-center mt-16'>
            <button className='h-[52px] w-[218px] border border-black rounded-[50px] hover:bg-black hover:text-white'>View All Products</button>
        </div>
        </Link>


        <div className='border-b-[1.5px] mt-12'> </div>
    </div>
        </div>
  );
};

export default Arrival;
