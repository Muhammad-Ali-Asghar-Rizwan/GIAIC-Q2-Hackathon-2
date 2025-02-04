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
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal  + deliveryFee;

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
              <div className="w-36 h-36 flex-shrink-0 relative">
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
                <h5 className="text-lg font-semibold text-gray-600"><span className="text-black">Size: </span>{item.size}</h5>
                <p className="text-sm text-gray-600"><span className="text-black font-semibold">Color: </span>{item.color}</p>
                <h5 className="text-lg font-medium text-gray-800 mt-2"><span className="text-black font-semibold">Price: </span>  
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