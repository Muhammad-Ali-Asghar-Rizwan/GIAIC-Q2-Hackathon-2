// "use client";
// import { FaRegTrashCan } from "react-icons/fa6";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/Store";
// import Image from "next/image";
// import { remove, incrementQuantity, decrementQuantity } from "../redux/Cartslice";
// import Link from "next/link";
// // import { useRouter } from "next/router";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   imageUrl: string;
//   quantity: number;
// }

// const Cartpage: React.FC = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart);
//   // const [CartItems, setCartItems] = useState<Product[]>([]);

//   // useEffect(() => {
//   //   setCartItems(cartItems);
//   // }, []);
//   const handleRemove = (id: number) => {
//     dispatch(remove(id));
//   };

//   const handleIncrement = (id: number) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id: number) => {
//     dispatch(decrementQuantity(id));
//   };
//   const router = useRouter();
//   const handleProeed = () => {
//     Swal.fire({
//       title: 'Success!',
//       text: 'Please wait your moment',
//       icon: 'success',
//       showCancelButton: true,
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33', 
//     }).then((result) => {
//       if (result.isConfirmed) {
//         if (result.isConfirmed){
//           Swal.fire(
//             "success",
//             "Please wait your moment",
//             "success",
//           );
//           router.push('/checkout');
          
//         }
//       }
//     });
//   }

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const discount = subtotal * 0.2; // 20% discount
//   const deliveryFee = 15; // Fixed delivery fee
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
//       {/* Breadcrumb */}
//       <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
//         <Link href="/"> <span>   Home</span>   </Link>
//         <span>/</span>
//       <span> Cart</span>
//       </div>

//       {/* Page Title */}
//       <h3 className="text-4xl font-bold text-center mb-8">YOUR CART</h3>

//       <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
//         {/* Cart Items */}
//         <div className="w-full lg:w-2/3 space-y-6">
//           {cartItems.map((item: CartItem) => (
//             <div
//               key={item.id}
//               className="flex items-center bg-white shadow-md rounded-lg p-4"
//             >
//               {/* Image Section */}
//               <div className="w-24 h-24 flex-shrink-0 relative">
//                 <Image
//                   src={item.imageUrl}
//                   alt="Product"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md"
//                 />
//               </div>

//               {/* Content Section */}
//               <div className="flex-grow px-4">
//                 <h5 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h5>
//                 <p className="text-sm text-gray-600">Size: Large</p>
//                 <p className="text-sm text-gray-600">Color: Blue</p>
//                 <h5 className="text-lg font-medium text-gray-800 mt-2">
//                   ${item.price * item.quantity}
//                 </h5>
//               </div>

//               {/* Quantity & Remove Section */}
//               <div className="flex flex-col items-center space-y-4">
//                 <button
//                   className="text-red-500 text-lg hover:text-red-700"
//                   onClick={() => handleRemove(item.id)}
//                 >
//                   <FaRegTrashCan />
//                 </button>
//                 <div className="flex flex-col md:flex md:flex-row items-center border rounded-full bg-gray-200">
//                   <button
//                     className="px-3 py-1 text-lg font-bold"
//                     onClick={() => handleDecrement(item.id)}
//                   >
//                     -
//                   </button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button
//                     className="px-3 py-1 text-lg font-bold"
//                     onClick={() => handleIncrement(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h4 className="text-2xl font-semibold">Order Summary</h4>
//           <div className="flex justify-between text-gray-600">
//             <p>Subtotal</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-600">
//             <p>Discount (-20%)</p>
//             <p className="text-red-500 font-semibold">-${discount.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-600">
//             <p>Delivery Fee</p>
//             <p>${deliveryFee.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between font-bold text-lg">
//             <p>Total</p>
//             <p>${total.toFixed(2)}</p>
//           </div>
//           <div className="flex flex-col gap-4 md:flex md:flex-row items-center space-x-2">
//             <input
//               type="text"
//               placeholder="Add promo code"
//               className="flex-grow border border-gray-300 rounded px-4  py-2"
//             />
//             <button className="bg-black text-white px-6 py-2 rounded">
//               Apply
//             </button>
//           </div>
//           <button onClick={handleProeed} className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center">
//             Go to Checkout
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 ml-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cartpage;
















// "use client";
// import { FaRegTrashCan } from "react-icons/fa6";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/Store";
// import Image from "next/image";
// import { remove, incrementQuantity, decrementQuantity } from "../redux/Cartslice";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";

// const Cartpage: React.FC = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart);
//   const router = useRouter();

//   const handleRemove = (id: number) => {
//     dispatch(remove(id));
//     Swal.fire({
//       title: 'Success!',
//       text: 'Item removed from cart',
//       icon: 'success',
//       showCancelButton: true,
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//     }).then((result) => {
//       if (result.isConfirmed) {
       
//       }
//     });
//   };

//   const handleIncrement = (id: number) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id: number) => {
//     dispatch(decrementQuantity(id));
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: 'Success!',
//       text: 'Please wait your moment',
//       icon: 'success',
//       showCancelButton: true,
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         router.push('/checkout');
//       }
//     });
//   };

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const discount = subtotal * 0.2; // 20% discount
//   const deliveryFee = 15; // Fixed delivery fee
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
//       {/* Breadcrumb */}
//       <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
//         <Link href="/"><span>Home</span></Link>
//         <span>/</span>
//         <span>Cart</span>
//       </div>

//       {/* Page Title */}
//       <h3 className="text-4xl font-bold text-center mb-8">YOUR CART</h3>

//       <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
//         {/* Cart Items */}
//         <div className="w-full lg:w-2/3 space-y-6">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
//               <div className="w-24 h-24 flex-shrink-0 relative">
//                 <Image
//                   src={item.imageUrl}
//                   alt="Product"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md"
//                 />
//               </div>

//               <div className="flex-grow px-4">
//                 <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
//                 <h5 className="text-lg font-medium text-gray-800 mt-2">
//                   ${item.price * item.quantity}
//                 </h5>
//               </div>

//               <div className="flex flex-col items-center space-y-4">
//                 <button
//                   className="text-red-500 text-lg hover:text-red-700"
//                   onClick={() => handleRemove(item.id)}
//                 >
//                   <FaRegTrashCan />
//                 </button>
//                 <div className="flex flex-col md:flex md:flex-row items-center border rounded-full bg-gray-200">
//                   <button
//                     className="px-3 py-1 text-lg font-bold"
//                     onClick={() => handleDecrement(item.id)}
//                   >
//                     -
//                   </button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button
//                     className="px-3 py-1 text-lg font-bold"
//                     onClick={() => handleIncrement(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h4 className="text-2xl font-semibold">Order Summary</h4>
//           <div className="flex justify-between text-gray-600">
//             <p>Subtotal</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-600">
//             <p>Discount (-20%)</p>
//             <p className="text-red-500 font-semibold">-${discount.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-600">
//             <p>Delivery Fee</p>
//             <p>${deliveryFee.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between font-bold text-lg">
//             <p>Total</p>
//             <p>${total.toFixed(2)}</p>
//           </div>
//           <button
//             onClick={handleProceed}
//             className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center"
//           >
//             Go to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cartpage;
















"use client";
import { FaRegTrashCan } from "react-icons/fa6";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Image from "next/image";
import { remove, incrementQuantity, decrementQuantity } from "../redux/Cartslice";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
    Swal.fire({
      title: 'Success!',
      text: 'Item removed from cart',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
       
      }
    });
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Please wait your moment',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/checkout');
      }
    });
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
        <Link href="/"><span>Home</span></Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      {/* Page Title */}
      <h3 className="text-4xl font-bold text-center mb-8">YOUR CART</h3>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
              <div className="w-32 h-32 flex-shrink-0 relative">
                <Image
                  src={item.imageUrl}
                  alt="Product"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>

              <div className="flex-grow px-4">
                <h5 className="text-lg font-semibold text-black">{item.name}</h5>
                <h5 className="text-lg font-semibold text-gray-600">{item.size}</h5>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <h5 className="text-lg font-medium text-gray-800 mt-2">
                  ${item.price * item.quantity}
                </h5>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  className="text-red-500 text-lg hover:text-red-700"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaRegTrashCan />
                </button>
                <div className="flex flex-col md:flex md:flex-row items-center border rounded-full bg-gray-200">
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
          <h4 className="text-2xl font-semibold">Order Summary</h4>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Discount (-20%)</p>
            <p className="text-red-500 font-semibold">-${discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button
            onClick={handleProceed}
            className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;