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


















// import Image from 'next/image';
// import { sanityFetch } from '../../sanity/lib/fetch';
// import {  CategoryQueries } from '../../sanity/lib/queries';

// type Product = {
//   _id:string,
//   name:string,
//   price:number,
//   description:string,
//   imageUrl:string,
// }


// import React from 'react'
// import Link from 'next/link';

// async function Category() {
//     const products:Product[] = await sanityFetch({query:CategoryQueries}) 
  

//   return (
//     <div className='flex '>

//       {/* Side Bar */}
//       <div>
//         {/* Category Filter */}
//         <div>
//           <h3>Category</h3>
//           <ul>
//             <li>
//               <input type="radio" id="all" name="category" value="all" />
//               <label htmlFor="all">All</label>
//             </li>
//             <li>
//               <input type="radio" id="t-shirts" name="category" value="t-shirts" />
//               <label htmlFor="t-shirts">T-Shirts</label>
//             </li>
//             <li>
//               <input type="radio" id="shorts" name="category" value="shorts" />
//               <label htmlFor="shorts">Shorts</label>
//             </li>
//             <li>
//               <input type="radio" id="jeans" name="category" value="jeans" />
//               <label htmlFor="jeans">Jeans</label>
//             </li>
//             <li>
//               <input type="radio" id="hoodies" name="category" value="hoodies" />
//               <label htmlFor="hoodies">Hoodies</label>
//             </li>
//           </ul>
//         </div>
//         {/* Size Filter */}
//         <div>
//           <h3>Size</h3>
//           <div>
//             <button>Small</button>
//             <button>Medium</button>
//             <button>Large</button>
//             <button>X-Large</button>
//             <button>3XL</button>
//             <button>4XL</button>
//           </div>
//         </div>
//       </div>


//       {/* Product List */}
//       <div>
//       <div className='mt-28'>
//     <div className='mx-8 flex flex-wrap items-center justify-center gap-8'>
//   <h1 className='text-4xl font-extrabold mb-6 w-full text-center'>Top Selling</h1>
//   {products.map((product) => (
//     <div
//       key={product._id}
//       className='bg-[#F9F9F9] flex flex-col items-center justify-center rounded-lg w-[230px] p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
//     >
//       <div className='flex flex-col items-center'>
//         <Link href={`/posts/${product._id}`}>
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             width={200}
//             height={200}
//             className='w-[190px] h-[190px] object-cover rounded-lg transition-transform hover:scale-75 duration-300 ease-in-out'
//           />
//         </Link>
//       </div>
//       <div className=' mt-4'>
//         <h1 className='text-[16px] font-semibold'>{product.name}</h1>
        
//         <div className='flex  mt-1'>
//           {[...Array(5)].map((_, index) => (
//             <span
//               key={index}
//               className="text-yellow-400 "
//             >
//               ★
//             </span>
//           ))}
//           <span className='text-gray-600 text-[14px] ml-2'>
//             4.5/5
//           </span>
//         </div>
//       <h2 className='font-bold text-[18px]'>${product.price}</h2>
//       </div>
//     </div>
//   ))}
// </div>
// <div className='flex items-center justify-center'>

//   <button className='flex items-center justify-center mt-8 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300'>
//     View All
//   </button>
// </div>
// </div>
//       </div>
//     </div>
//   )
// }

// export default Category



















"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link from Next.js
// import { BreadcrumbCollapsed } from "@/components/Breadcrupm";
// import Paginationpage from "@/components/pagination";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Paginationpage from "../../components/layout/pagination";
import { BreadcrumbCollapsed } from "../../components/layout/Breadcrupm";
// import { urlFor } from "@/sanity/lib/image";
interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
    discountPercent?: number;
    new?: boolean;
    category: string;
    colors: string[];
    sizes: string[];
  }

export default function Casualpage(){

    
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<{
    category: string;
    priceRange: [number, number];
    colors: string[];
    sizes: string[];
  }>
  ({
    category: "",
    priceRange: [50, 200],
    colors: [],
    sizes: [],
  });

   
  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      const data = await client.fetch(`
        *[_type == "products"]{
          _id, // Include the product ID for linking
          name,
          price,
          description,
          image {
            asset -> {
              url
            }
          },
          discountPercent,
          new,
          category,
          colors,
          sizes
        }
      `);
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchProducts();
  }, []);

    // Adding key prop in star array
    let star = [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      <FaStar key={5} />,
    ];
     
  // Filter products based on selected filters
  useEffect(() => {
    let filtered = products;

    // Category Filter
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Price Range Filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Color Filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }

    // Size Filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);
   
     
  const handleFilterChange = (type: keyof typeof filters, value: any) => {
    if (type === "colors" || type === "sizes") {
      // Toggle logic for array filters
      setFilters((prev) => ({
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value],
      }));
    } else if (type === "priceRange") {
      setFilters((prev) => ({
        ...prev,
        priceRange: value,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [type]: value,
      }));
    }
  };


    return(
        <div className="mt-20 md:mt-28 lg:mt-32 max-w-screen-2xl pt-2   mx-auto">
            <BreadcrumbCollapsed/>
            {/* start */}
            <div className="flex flex-col items-center md:flex-row  p-5  justify-center md:items-start md:space-x-4 mt-5">
                {/* left */}
     
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/2 lg:w-1/4  bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-bold mb-4">Filters</h3>

            {/* Category Filter */}
            <div className="mb-6 border-b-[1px] border-black">
              <h4 className="font-medium mb-2">Categories</h4>
              <ul className="text-gray-600 space-y-1 mb-5">
                {["tshirt", "short", "jeans", "hoodie", "shirt"].map(
                  (category) => (
                    <li
                      key={category}
                      className={`cursor-pointer ${
                        filters.category === category ? "font-bold" : ""
                      }`}
                      onClick={() => handleFilterChange("category", category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </li>
                  )
                )}
              </ul>
            </div>
                 
                 
            {/* Price Filter */}
            <div className="mb-11 border-b-[1px] border-black pb-11">
              <h4 className="font-medium mb-2">Price</h4>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">${filters.priceRange[0]}</span>
                <input
                  type="range"
                  className="w-full"
                  min="50"
                  max="200"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handleFilterChange("priceRange", [
                      filters.priceRange[0],
                      parseInt(e.target.value, 10),
                    ])
                  }
                />
                <span className="text-gray-600 text-sm">${filters.priceRange[1]}</span>
              </div>
            </div>

                  {/* Color Filter */}
            <div className="mb-6 border-b-[1px] border-black pb-11">
              <h4 className="font-medium mb-2">Colors</h4>
              <div className="flex flex-wrap gap-2">
                {["Red", "Green", "Blue","Orange", "Yellow", "Purple"].map((color) => (
                  <div key={color}
                  className={`w-[37px] h-[37px]  active:outline  rounded-full  flex justify-center items-center`}
                  style={{backgroundColor:color}}
                    // className={`w-6 h-6 rounded-full ${ filters.colors.includes(color) ? "border-4 border-black" : "" } bg-${color}-500 cursor-pointer`}
                    onClick={() => handleFilterChange("colors", color)}
                  ></div>
                ))}
              </div>
            </div> 

               
            {/* Size Filter */}
            <div className="mb-6 border-b-[1px] border-black pb-11">
              <h4 className="font-medium mb-2">Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {["M", "XXL", "XL", "L","S"].map((size) => (
                  <button
                    key={size}
                    className={`border px-2 py-1 rounded ${
                      filters.sizes.includes(size) ? "bg-black text-white" : ""
                    }`}
                    onClick={() => handleFilterChange("sizes", size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>


              
            <button
              className="w-full mt-6 bg-black text-white py-2 rounded-lg"
              onClick={() => setFilters({ category: "", priceRange: [50, 200], colors: [], sizes: [] })}
            >
              Reset Filters
            </button>
          </div>
          
                {/* right */}
                <div className="w-full md:w-[900px] 2xl:w-full h-full  mt-3 md:mt-0 border-b ">
                <div className="w-full h-full ">
      <h1 className="text-[25px] font-bold relative pl-5">
        Casual
        <span className="text-sm font-bold flex items-center justify-center absolute right-10 top-2">
          Most Popular <RiArrowDropDownLine />
        </span>
      </h1>
      <div className="grid gap-3 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  md:p-0 place-items-center">
        {filteredProducts.map((data:any, index) => (
          <div className=" mt-1" key={index}>
            <Link href={`/product/${data._id}`}>
              <div className="w-[160px] md:w-[240px] lg:w-[290px] h-[160px] md:h-[240px] lg:h-[290px] bg-[#F0EEED] rounded-[20px]">
                <Image
                 src={urlFor(data.image).url()}
                  alt={data.name}
                  className="w-full h-full rounded-[20px]"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <div>
              <p className="text-sm md:text-lg mt-2 sm:font-bold">{data.name}</p>
              <div className="flex text-yellow-400">
                {star.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <p className="font-bold mt-1">
                ${data.price}
                {data.discountPercent > 0 && (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    ${((data.price * (100 - data.discountPercent)) / 100).toFixed(2)}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
                    
                </div>
                {/* right complete */}
               
            </div>
          
            <Paginationpage/>
        </div>
    )
}