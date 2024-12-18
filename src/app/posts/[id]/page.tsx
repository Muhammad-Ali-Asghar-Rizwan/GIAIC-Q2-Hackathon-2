
//
"use client";

import Selling from '@/app/Selling/page';
import { Check,  } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaStar } from "react-icons/fa";

import React from 'react';
import Link from 'next/link';

const posts = [
  
    {
      id: '1',
      title: 'VERTICAL STRIPED SHIRT',
      price: '$212 ',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      imageUrl: '/images/s1.png',
    },
    {
      id: '2',
      title: 'COURAGE GRAPHIC T-SHIRT',
      price: '$145',
      description :"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      resp: '* * * * (75)',
      imageUrl: '/images/s4.png',
    },
    {
      id: '3',
      title: 'LOOSE FIT BERMUDA SHORTS',
      price: '$80',
      description :"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      resp: '* * * * (99)',
      imageUrl: '/images/s3.png',
    },
    {
      id: '4',
      title: 'FADED SKINNY JEANS',
      price: '$210',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      resp: '* * * * (99)',
      imageUrl: '/images/s2.png',
    },
    {
      id: '5',
      title: 'T-SHIRT WITH TAPE DETAILS',
      price: '$120 ',
      resp: '* * * * (88)',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      imageUrl: '/images/cloth1.png',
    },
    {
      id: '6',
      title: 'SKINNY FIT JEANS',
      price: '$240',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      resp: '* * * * (75)',
      imageUrl: '/images/cloth2.png',
    },
    {
      id: '7',
      title: 'CHECKERED SHIRT',
      price: '$180',
      resp: '* * * * (99)',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      imageUrl: '/images/cloth3.png',
    },
    {
      id: '8',
      title: 'SLEEVE STRIPED T-SHIRT',
      price: '$130',
      resp: '* * * * (99)',
      description : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      imageUrl: '/images/cloth4.png',
    },
  

  
];

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 5,
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 5,
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    rating: 5,
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    rating: 5,
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    rating: 5,
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  }
];

export default function Post() {
  const params = useParams(); // Access dynamic route parameters
  const id = params?.id; // Ensure `id` is defined

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h1 className='text-2xl font-bold text-center mt-10'>Post Not Found</h1>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split('/n').map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-5xl mx-auto mt-11'>
     <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
  {/* Product Image Section */}
  {post.imageUrl && (
    <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto flex items-center justify-center bg-[#F5F5F5] rounded-lg">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={500}
        height={600}
        className="w-full h-auto rounded-md"
      />
    </div>
  )}

  {/* Product Details Section */}
  <div className="mt-6 text-lg text-slate-700 w-full max-w-[600px]">
    {/* Title */}
    <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-extrabold text-black">
      {post.title}
    </h1>

    {/* Rating */}
    <div className="grid grid-cols-4 gap-2 mt-4">
      <div className="flex items-center">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
    </div>

    {/* Price */}
    <h1 className="text-2xl sm:text-3xl font-extrabold mt-5">{post.price}</h1>

    {/* Description */}
    <div className="mt-4 text-base md:text-lg">
      {renderParagraphs(post.description)}
    </div>

    {/* Divider */}
    <div className="border-b-2 mt-10"></div>

    {/* Select Colors */}
    <h1 className="text-sm mt-8">Select Colors</h1>
    <div className="flex gap-4 items-center mt-4">
      <div className="h-9 w-9 bg-[#4F4631] border-2 rounded-full flex items-center justify-center text-white">
        <Check />
      </div>
      <div className="h-9 w-9 bg-[#314F4A] rounded-full"></div>
      <div className="h-9 w-9 bg-[#31344F] rounded-full"></div>
    </div>

    {/* Divider */}
    <div className="border-b-2 mt-10"></div>

    {/* Choose Size */}
    <h1 className="text-sm mt-6">Choose Size</h1>
    <div className="flex gap-4 items-center mt-4">
      {["Small", "Medium", "Large", "X-Large"].map((size) => (
        <div
          key={size}
          className="h-12 w-20 flex items-center justify-center bg-[#F0F0F0] rounded-full text-sm font-medium hover:bg-black hover:text-white cursor-pointer"
        >
          {size}
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="border-b-2 mt-10"></div>

    {/* Add to Cart */}
    <div className="flex flex-col lg:flex-row gap-4 mt-6">
      <div className="w-44 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-between px-4">
        <p className="cursor-pointer">-</p>
        <p>1</p>
        <p className="cursor-pointer">+</p>
      </div>
      <Link href="/Cart">
      <div className="flex-1 w-[200px] md:w-[400px] cursor-pointer flex items-center justify-center h-[52px] bg-black text-white rounded-full">
        <p>Add to Cart</p>
      </div>
      </Link>
    </div>
  </div>
</div>

      <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">Posted on {review.date}</p>
            <p className="mt-2 text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 border-2 border-black  rounded-[50px] hover:bg-black hover:text-white transition">
          Load More Reviews
        </button>
      </div>
    </div>
      <Selling/>
    </div>
  );
}
