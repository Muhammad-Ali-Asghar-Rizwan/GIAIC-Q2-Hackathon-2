// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   discountPercent: number;
//   new: boolean;
//   colors: string[];
//   sizes: string[];
//   imageUrl: string;
// };

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string>("All");
//   const [activeSize, setActiveSize] = useState<string | null>(null); // Size filter state

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("https://template1-neon-nu.vercel.app/api/products");
//         const fetchedProducts: Product[] = await response.json();
//         setProducts(fetchedProducts);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError("There was an error fetching the product data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle category change (All, T-Shirts, etc.)
//   const handleCategoryChange = (category: string) => {
//     setActiveCategory(category);
//     setActiveSize(null); // Reset size filter when changing category
//   };

//   // Handle size filter change
//   const handleSizeChange = (size: string) => {
//     if (activeSize === size) {
//       setActiveSize(null); // Deselect size if same size is clicked
//     } else {
//       setActiveSize(size);
//     }
//   };

//   // Filter products based on category and size
//   const filteredProducts = products.filter((product) => {
//     const categoryMatch = activeCategory === "All" || product.category === activeCategory;
//     const sizeMatch = activeSize ? product.sizes.includes(activeSize) : true;
//     return categoryMatch && sizeMatch;
//   });

//   if (loading) {
//     return <h1 className="text-2xl font-bold text-center mt-10">Loading...</h1>;
//   }

//   if (error) {
//     return <h1 className="text-2xl font-bold text-center mt-10 text-red-600">{error}</h1>;
//   }

//   return (
//     <div data-aos="zoom-out-down" className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row bg-red-60 px-4 md:px-14">
//       {/* Sidebar */}
//       <aside className="w-full md:w-1/4 p-4 border-r bg-gray-100 mb-6 md:mb-0">
//         <h2 className="text-lg font-bold mb-4">Filters</h2>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Category</h3>
//           <ul className="space-y-2">
//             {["All", "T-Shirts", "Shorts", "Jeans", "Hoodies"].map((category) => (
//               <li key={category}>
//                 <input
//                   type="radio"
//                   id={category}
//                   name="category"
//                   value={category}
//                   checked={activeCategory === category}
//                   onChange={() => handleCategoryChange(category)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={category}>{category}</label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Size Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Size</h3>
//           <div className="flex flex-wrap gap-3">
//             {["Small", "Medium", "Large", "X-Large", "3XL", "4XL"].map((size) => (
//               <button
//                 key={size}
//                 onClick={() => handleSizeChange(size)}
//                 className={`px-4 py-2 border rounded-md transition-all duration-300 ${
//                   activeSize === size ? "bg-black text-white" : "hover:bg-black hover:text-white"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Other Filters can go here, like colors, price, etc. */}
//       </aside>

//       {/* Product Grid */}
//       <main className="w-full md:w-3/4 p-4">
//         <h1 className="text-[32px] font-bold mb-4">
//           {activeCategory === "T-Shirts" ? "All T-Shirt Products" : `${activeCategory} Products`}
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((item) => (
//               <div key={item._id} className="border p-4 rounded">
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.name}
//                   width={200}
//                   height={200}
//                   className="h-[298px] w-full rounded-[20px] bg-[#F0EEED] object-cover mb-4"
//                 />
//                 <h3 className="font-bold mt-2">{item.name}</h3>
//                 <div className="flex items-center">
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                 </div>
//                 <p className="text-[24px] font-bold">${item.price}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products found for the selected filters.</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }


















import Image from 'next/image';
import { sanityFetch } from '../../sanity/lib/fetch';
import {  CategoryQueries } from '../../sanity/lib/queries';

type Product = {
  _id:string,
  name:string,
  price:number,
  description:string,
  imageUrl:string,
}


import React from 'react'
import Link from 'next/link';

async function Category() {
    const products:Product[] = await sanityFetch({query:CategoryQueries}) 
  

  return (
    <div className='flex '>

      {/* Side Bar */}
      <div>
        {/* Category Filter */}
        <div>
          <h3>Category</h3>
          <ul>
            <li>
              <input type="radio" id="all" name="category" value="all" />
              <label htmlFor="all">All</label>
            </li>
            <li>
              <input type="radio" id="t-shirts" name="category" value="t-shirts" />
              <label htmlFor="t-shirts">T-Shirts</label>
            </li>
            <li>
              <input type="radio" id="shorts" name="category" value="shorts" />
              <label htmlFor="shorts">Shorts</label>
            </li>
            <li>
              <input type="radio" id="jeans" name="category" value="jeans" />
              <label htmlFor="jeans">Jeans</label>
            </li>
            <li>
              <input type="radio" id="hoodies" name="category" value="hoodies" />
              <label htmlFor="hoodies">Hoodies</label>
            </li>
          </ul>
        </div>
        {/* Size Filter */}
        <div>
          <h3>Size</h3>
          <div>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-Large</button>
            <button>3XL</button>
            <button>4XL</button>
          </div>
        </div>
      </div>


      {/* Product List */}
      <div>
      <div className='mt-28'>
    <div className='mx-8 flex flex-wrap items-center justify-center gap-8'>
  <h1 className='text-4xl font-extrabold mb-6 w-full text-center'>Top Selling</h1>
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
      </div>
    </div>
  )
}

export default Category