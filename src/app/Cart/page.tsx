"use client"
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      
      price: 145,
      quantity: 1,
      image: "/images/s1.png", // Replace with your image URL
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/images/s2.png", // Replace with your image URL
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/images/s3.png", // Replace with your image URL
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, "decrease")}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, "increase")}
                >
                  +
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleRemove(item.id)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            <p className="flex justify-between">
              <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount (-20%)</span> <span>-${discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Fee</span> <span>${deliveryFee.toFixed(2)}</span>
            </p>
          </div>
          <hr />
          <p className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span> <span>${total.toFixed(2)}</span>
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-2 border rounded mb-2"
            />
            <button className="w-full bg-black text-white py-2 rounded">Apply</button>
          </div>
          <button className="w-full bg-black text-white py-2 mt-4 rounded">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
