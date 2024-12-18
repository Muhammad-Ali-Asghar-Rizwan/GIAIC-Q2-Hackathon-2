import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div data-aos="zoom-out-down" className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row bg-red-60 px-4 md:px-14">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-4 border-r bg-gray-100 mb-6 md:mb-0">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <ul className="space-y-2">
            {["T-Shirts", "Shorts", "Jeans", "Hoodies"].map((category, index) => (
              <li key={index}>
                <input type="checkbox" id={category.toLowerCase()} className="mr-2" />
                <label htmlFor={category.toLowerCase()}>{category}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="flex items-center space-x-2">
            <span>$50</span>
            <input type="range" min="50" max="500" className="w-full" defaultValue="250" />
            <span>$500</span>
          </div>
        </div>

        {/* Colors Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["green", "blue", "pink", "red", "purple", "white", "black"].map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                title={color.charAt(0).toUpperCase() + color.slice(1)}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex flex-wrap gap-3">
            {["Small", "Medium", "Large", "X-Large", "3XL Large", "4XL Large"].map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-md transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Dress Style</h3>
          <ul className="space-y-2">
            {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
              <li key={index}>
                <input type="checkbox" id={style.toLowerCase()} className="mr-2" />
                <label htmlFor={style.toLowerCase()}>{style}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Filter Button */}
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Apply Filter</button>
      </aside>

      {/* Product Grid */}
      <main className="w-full md:w-3/4 p-4">
        <h1 className="text-[32px] font-bold mb-4">Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Gradient Graphic T-Shirt", price: "$145", img: "/images/brand1.png" },
            { name: "Polo with Tipping Details", price: "$180", img: "/images/brand2.png" },
            { name: "Black Striped T-Shirt", price: "$120", img: "/images/brand3.png" },
            { name: "Skinny Fit Jeans", price: "$240", img: "/images/brand4.png" },
            { name: "Checkered Shirt", price: "$180", img: "/images/brand5.png" },
            { name: "Sleeve Striped T-Shirt", price: "$130", img: "/images/brand6.png" },
          ].map((item, index) => (
            <div key={index} className="border p-4 rounded">
              <Image
                src={item.img}
                alt={item.name}
                width={200} 
                height={200}
                className="h-[298px] w-full rounded-[20px] bg-[#F0EEED] object-cover mb-4"
              />
              <h3 className="font-bold mt-2">{item.name}</h3>
              <div className='flex items-center'>
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
              </div>
              <p className="text-[24px] font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
