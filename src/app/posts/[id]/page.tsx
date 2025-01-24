// "use client";

// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { FaCheck, FaStar } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { sanityFetch } from "../../../sanity/lib/fetch";
// import { allproducts } from "../../../sanity/lib/queries";
// import { addToCart } from "../../redux/Cartslice";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// };

// const reviews = [
//   {
//     name: "Samantha D.",
//     date: "August 14, 2023",
//     rating: 5,
//     review:
//       "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
//   },
//   {
//     name: "Alex M.",
//     date: "August 15, 2023",
//     rating: 5,
//     review:
//       "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
//   },
//   // ...other reviews
// ];

// export default function Post() {
//   const params = useParams();
//   const dispatch = useDispatch(); // For dispatching Redux actions
//   const [products, setProducts] = useState<Product[]>([]);
//   const [post, setPost] = useState<Product | null>(null);

//   // Fetch products on mount
//   // Fetch products on mount
//   // Fetch products on mount
//   // Fetch products on mount
//   // Fetch products on mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const fetchedProducts: Product[] = await sanityFetch({ query: allproducts });
//       setProducts(fetchedProducts);
      

//       // Find product based on the route parameter
//       const product = fetchedProducts.find((p) => p._id === params?.id);
//       setPost(product || null);
//     };

//     fetchProducts();
//   }, [params?.id]);

//   // Add to Cart handler
//   const handleAddToCart = () => {
//     if (post) {
//       dispatch(addToCart({
//         id: post._id,
//         name: post.name,
//         price: post.price,
//         imageUrl: post.imageUrl,
//         quantity: 1, // Default quantity to 1
//       }));
//       alert(`${post.name} has been added to the cart!`);
//     }
//   };

//   // Render paragraphs for description
//   const renderParagraphs = (description: string) => {
//     return description.split("/n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   if (!post) {
//     return <h1 className="text-2xl font-bold text-center mt-10">Post Not Found</h1>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto mt-11">
//       <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
//         {/* Product Image Section */}
//         {post.imageUrl && (
//           <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto md:h-[700px] flex items-center justify-center bg-[#F0EEED] rounded-lg">
//             <Image          
//               src={post.imageUrl}
//               alt={post.name}
//               width={500}
//               height={600}
//               className="w-full h-auto rounded-md"
//             />
//           </div>
//         )}

//         {/* Product Details Section */}
//         <div className="mt-6 text-lg text-slate-700 w-full max-w-[600px]">
//           <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-extrabold text-black">
//             {post.name}
//           </h1>

//           {/* Rating */}
//           <div className="grid grid-cols-4 gap-2 mt-4">
//             <div className="flex items-center">
//               <FaStar className="text-yellow-400" />
//               <FaStar className="text-yellow-400" />
//               <FaStar className="text-yellow-400" />
//               <FaStar className="text-yellow-400" />
//               4.5/5
//             </div>

//           </div>
//           {/* Price */}
//           <p className="font-bold text-black text-3xl">${post.price}</p>
//           {/* Description */}
//           <div className="mt-4 text-base md:text-lg">{renderParagraphs(post.description)}</div>

//           {/* Select Colors */}
//           <h1 className="text-sm mt-8">Select Colors</h1>
//           <div className="flex gap-4 items-center mt-4">
//             <div className="h-9 w-9 bg-[#4F4631] border-2 rounded-full flex items-center justify-center text-white">
//               <FaCheck />
//             </div>
//             <div className="h-9 w-9 bg-[#314F4A] rounded-full"></div>
//             <div className="h-9 w-9 bg-[#31344F] rounded-full"></div>
//           </div>

//           {/* Choose Size */}
//           <h1 className="text-sm mt-6">Choose Size</h1>
//           <div className="flex gap-4 items-center mt-4">
//             {["Small", "Medium", "Large", "X-Large"].map((size) => (
//               <div
//                 key={size}
//                 className="h-12 w-20 flex items-center justify-center bg-[#F0F0F0] rounded-full text-sm font-medium hover:bg-black hover:text-white cursor-pointer"
//               >
//                 {size}
//               </div>
//             ))}
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="px-4 py-2 mt-6 bg-black text-white rounded-[50px] hover:bg-gray-800 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="p-8">
//         <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center mb-2">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <span key={i} className="text-yellow-500">★</span>
//                 ))}
//               </div>
//               <h3 className="font-semibold">{review.name}</h3>
//               <p className="text-sm text-gray-500">Posted on {review.date}</p>
//               <p className="mt-2 text-gray-700">{review.review}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <button className="px-4 py-2 border-2 border-black rounded-[50px] hover:bg-black hover:text-white transition">
//             Load More Reviews
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { FaCheck, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { allProductsQuery } from "../../../sanity/lib/queries";
import { addToCart } from "../../redux/Cartslice";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Post() {
  const params = useParams();
  const dispatch = useDispatch(); // For dispatching Redux actions
  const [products, setProducts] = useState<Product[]>([]);
  const [post, setPost] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state to show spinner or message
  const [error, setError] = useState<string | null>(null); // Error state to catch errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);  // Set loading to true when fetching data
        const fetchedProducts: Product[] = await sanityFetch({ query: allProductsQuery });
        console.log("Fetched Products:", fetchedProducts);  // Log to check the fetched data

        // Find product based on the route parameter
        const product = fetchedProducts.find((p) => p._id === params?.id);
        console.log("Found Product:", product);  // Log to check the found product
        setPost(product || null);

        // Set products in state
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("There was an error fetching the product data. Please try again later.");
      } finally {
        setLoading(false);  // Set loading to false after the request
      }
    };

    fetchProducts();
  }, [params?.id]);

  // Add to Cart handler
  const handleAddToCart = () => {
    if (post) {
      dispatch(addToCart({
        id: post._id,
        name: post.name,
        price: post.price,
        imageUrl: post.imageUrl,
        quantity: 1, // Default quantity to 1
      }));
      alert(`${post.name} has been added to the cart!`);
    }
  };

  // Render paragraphs for description
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  // If loading, show loading spinner or message
  if (loading) {
    return <h1 className="text-2xl font-bold text-center mt-10">Loading...</h1>;
  }

  // If there was an error, show the error message
  if (error) {
    return <h1 className="text-2xl font-bold text-center mt-10 text-red-600">{error}</h1>;
  }

  // If post is not found, show Post Not Found message
  if (!post) {
    return <h1 className="text-2xl font-bold text-center mt-10">Post Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-11">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
        {/* Product Image Section */}
        {post.imageUrl && (
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto md:h-[700px] flex items-center justify-center bg-[#F0EEED] rounded-lg">
            <Image          
              src={post.imageUrl}
              alt={post.name}
              width={500}
              height={600}
              className="w-full h-auto rounded-md"
            />
          </div>
        )}

        {/* Product Details Section */}
        <div className="mt-6 text-lg text-slate-700 w-full max-w-[600px]">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-extrabold text-black">
            {post.name}
          </h1>

          {/* Rating */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              4.5/5
            </div>
          </div>

          {/* Price */}
          <p className="font-bold text-black text-3xl">${post.price}</p>

          {/* Description */}
          <div className="mt-4 text-base md:text-lg">{renderParagraphs(post.description)}</div>

          {/* Select Colors */}
          <h1 className="text-sm mt-8">Select Colors</h1>
          <div className="flex gap-4 items-center mt-4">
            <div className="h-9 w-9 bg-[#4F4631] border-2 rounded-full flex items-center justify-center text-white">
              <FaCheck />
            </div>
            <div className="h-9 w-9 bg-[#314F4A] rounded-full"></div>
            <div className="h-9 w-9 bg-[#31344F] rounded-full"></div>
          </div>

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

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 mt-6 bg-black text-white rounded-[50px] hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      {/* <div className="p-8">
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
          <button className="px-4 py-2 border-2 border-black rounded-[50px] hover:bg-black hover:text-white transition">
            Load More Reviews
          </button>
        </div>
      </div> */}
    </div>
  );
}