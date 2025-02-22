"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart);
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [orderData, setOrderData] = useState<{
    _type: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
    email: string;
    total: number;
    discount: number;
    cartItems: { _key: string; _type: string; _ref: string }[];
  } | null>(null);

  const deliveryFee = 15;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const total = subtotal - discount + deliveryFee;

  // Input Change Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // Validation Function
  const validateForm = () => {
    let errors: Record<string, string> = {};
    let isValid = true;

    if (!formValues.firstName.match(/^[a-zA-Z\s]+$/)) {
      errors.firstName = "Invalid First Name";
      isValid = false;
    }
    if (!formValues.lastName.match(/^[a-zA-Z\s]+$/)) {
      errors.lastName = "Invalid Last Name";
      isValid = false;
    }
    if (!formValues.zipCode.match(/^\d{5}(-\d{4})?$/)) {
      errors.zipCode = "Invalid Zip Code";
      isValid = false;
    }
    if (!formValues.phone.match(/^\d+$/)) {
      errors.phone = "Invalid Phone Number";
      isValid = false;
    }
    if (!formValues.email.includes("@")) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // **Har Validation ke Baad OrderData ko Update Karna**
  useEffect(() => {
    if (validateForm()) {
      setOrderData({
        _type: "order",
        ...formValues,
        total: total,
        discount,
        cartItems: cartItems.map((item) => ({
          _key: item._id,
          _type: "reference",
          _ref: item._id,
        })),
      });
    }
  }, [formValues]);

  // Checkout Function
  const handleCheckout = async () => {
    if (!validateForm()) {
      toast.error("Please correct the errors.");
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ allproducts: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      toast.error("Failed to create checkout session");
    }
  };

  // Place Order Function
  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing Order",
      text: "Please wait...",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed && orderData) {
        try {
          const response = await fetch("/api/createorder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
          });

          if (response.ok) {
            localStorage.removeItem("appliedDiscount");
            Swal.fire({
              title: "Order Ready!",
              text: "Click below to pay with Stripe",
              icon: "success",
              confirmButtonText: "Pay With Stripe",
            }).then((stripeResult) => {
              if (stripeResult.isConfirmed) {
                handleCheckout();
              }
            });
          } else {
            throw new Error("Failed to create order");
          }
        } catch (err) {
          console.error("Order Error:", err);
          Swal.fire("Error!", "Please fill all fields correctly.", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border rounded p-4 space-y-4 w-full">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-3 border-b">
                <Image src={item.imageUrl} alt={item.name} width={64} height={64} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Billing Form */}
          <div className="border rounded p-4 space-y-4 w-full">
            <h2 className="text-xl font-medium mb-6">Billing Information</h2>
            <div className="space-y-4">
              <input type="text" name="firstName" placeholder="First Name" value={formValues.firstName} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="text" name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="text" name="address" placeholder="Address" value={formValues.address} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="text" name="city" placeholder="City" value={formValues.city} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="text" name="zipCode" placeholder="Zip Code" value={formValues.zipCode} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleInputChange} className="p-2 border rounded w-full" />
              <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleInputChange} className="p-2 border rounded w-full" />
            </div>

            <button onClick={handlePlaceOrder} className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold rounded p-2">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
