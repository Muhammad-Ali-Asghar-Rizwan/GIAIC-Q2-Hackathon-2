


"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { client } from "../../sanity/lib/client";
import Swal from "sweetalert2";
import { Product } from "../type/product";
import { getCartItems } from "../action/action";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  // const cartItems = useSelector((state: RootState) => state.cart);
  // const [formValues, setFormValues] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   city: "",
  //   zipCode: "",
  //   phone: "",
  //   email: "",
  // });

  // const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // const discount = subtotal * 0.2; // 20% discount
  // const total = subtotal - discount;

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handlePlaceOrder = async () => {
  //   try {
  //     const response = await fetch('/api/checkout', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ allproducts: cartItems }),
  //     });
  //     const data = await response.json();
  //     if (data.url) {
  //       window.location.href = data.url;
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout", error);
  //     toast.error('Failed to create checkout session');
  //   }
  //   Swal.fire({
  //         title: 'Success!',
  //         text: 'app ka order confirm ho chuka hai',
  //         icon: 'success',
  //         showCancelButton: true,
  //         confirmButtonText: 'OK',
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           // router.push('/checkout');
  //         }
  //       });

  //   const orderData = {
  //     _type: 'order',
  //     firstName: formValues.firstName,
  //     lastName: formValues.lastName,
  //     address: formValues.address,
  //     city: formValues.city,
  //     zipCode: formValues.zipCode,
  //     phone: formValues.phone,
  //     email: formValues.email,
  //     cartItems: cartItems.map(item => ({
  //       _type: 'reference',
  //       _ref: item.id,  // Assuming cartItems have the correct product references
  //     })),
  //     total: total,  // Make sure this value is being calculated
  //     discount: discount,  // Add any discount if applicable
  //     orderDate: new Date().toISOString(),  // Order date for when the order was placed
  //   };
   
  //    try {
  //       await client.create(orderData);
  //       localStorage.removeItem('appiedDiscount');
  //     } catch (error) {
  //       console.error("Failed to create order", error);
  //     }
  // };




  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0); // State for discount
  const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zipCode: '',
      phone: '',
      email: ''
  });
  const [formErrors, setFormErrors] = useState({
      firstName: false,
      lastName: false,
      address: false,
      city: false,
      zipCode: false,
      phone: false,
      email: false
  });

  useEffect(() => {
      setCartItems(getCartItems());
      const appliedDiscount = localStorage.getItem("appliedDiscount");
      if (appliedDiscount) {
          setDiscount(Number(appliedDiscount));
      }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
          ...formValues,
          [e.target.id]: e.target.value
      });
  };

  const validateForm = () => {
      const errors = {
          firstName: !formValues.firstName,
          lastName: !formValues.lastName,
          address: !formValues.address,
          city: !formValues.city,
          zipCode: !formValues.zipCode,
          phone: !formValues.phone,
          email: !formValues.email
      };
      setFormErrors(errors);
      return Object.values(errors).every((error) => !error);
  };

  
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const handlePlaceOrder = async () => {
  if (validateForm()) {
    try {
      // Step 1: Create the order in Sanity
      const orderData = {
        _type: 'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        cartItems: cartItems.map(item => ({
          _type: 'reference',
          _ref: item._id,  // Assuming cartItems have the correct product references
        })),
        total: total,  // Make sure this value is being calculated
        discount: discount,  // Add any discount if applicable
        orderDate: new Date().toISOString(),  // Order date for when the order was placed
      };

      // Send the order data to Sanity
      const orderResponse = await client.create(orderData);
      if (orderResponse) {
        // Order created successfully in Sanity

        // Step 2: Proceed with Stripe payment
        const stripe = await stripePromise;
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartItems,
            formValues,
            total,
          }),
        });

        if (response.ok) {
          const { id } = await response.json();
          await stripe?.redirectToCheckout({ sessionId: id });
        } else {
          const error = await response.json();
          toast.error(error.message || 'Failed to create checkout session');
        }
      } else {
        toast.error('Failed to create order in Sanity');
      }
    } catch (error) {
      toast.error('An error occurred while processing your request.');
      console.error(error);
    }
  } else {
    toast.error('Please fill in all the fields');
  }
};








  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
            <h2 className="text-lg sm:text-xl font-medium mb-4">Order Summary</h2>
            {cartItems.map((item, index) => (
              <div key={item._id || index} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 overflow-hidden rounded">
                  <Image
                    src={typeof item.image === 'string' ? item.image : '/default-image.jpg'}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 gap-44">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  
                <h5 className="text-lg font-semibold text-gray-600"><span className="text-black">Size: </span>{item.sizes}</h5>
                {/* <p className="text-sm text-gray-600"><span className="text-black font-semibold">Color: </span>{item.color}</p>               */}
                <p className="text-sm text-gray-600"><span className="text-black font-semibold">Quantity: </span>{item.quantity}</p>              
                  </div>
                <p className="text-lg text-slate-600 font-bold ">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Billing Form */}
          <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
            <h2 className="text-xl sm:text-2xl font-medium mb-6">Billing Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="p-2 border rounded-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="p-2 border rounded-sm"
                  required
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleInputChange}
                className="p-2 border rounded-sm w-full"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="p-2 border rounded-sm"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="p-2 border rounded-sm"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="p-2 border rounded-sm w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
                className="p-2 border rounded-sm w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-6 justify-between py-3 text-sm sm:text-base">
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span className="font-bold">Discount:</span>
                <span className="text-red-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full h-10 sm:h-12 bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-sm mt-4 text-lg sm:text-base"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}