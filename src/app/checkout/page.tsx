// "use client";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/Store";
// import Image from "next/image";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { client } from "../../sanity/lib/client";
// import Swal from "sweetalert2";

// export default function CheckoutPage() {
//   const cartItems = useSelector((state: RootState) => state.cart);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const deliveryFee = 15; // Fixed delivery fee

// const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// const discount = subtotal * 0.2; // 20% discount
// const total = subtotal - discount + deliveryFee; // Ensure delivery fee is added properly

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handlePlaceOrder = async () => {
//     try {
//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ allproducts: cartItems }),
//       });
//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       }
//     } catch (error) {
//       console.error("Error during checkout", error);
//       toast.error('Failed to create checkout session');
//     }
//     Swal.fire({
//           title: 'Success!',
//           text: 'app ka order confirm ho chuka hai',
//           icon: 'success',
//           showCancelButton: true,
//           confirmButtonText: 'OK',
//           confirmButtonColor: '#3085d6',
//           cancelButtonColor: '#d33',
//         }).then((result) => {
//           if (result.isConfirmed) {
//             // router.push('/checkout');
//           }
//         });

//     const orderData = {
//       _type: 'order',
//       firstName: formValues.firstName,
//       lastName: formValues.lastName,
//       address: formValues.address,
//       city: formValues.city,
//       zipCode: formValues.zipCode,
//       phone: formValues.phone,
//       email: formValues.email,
//       cartItems: cartItems.map(item => ({
//         _type: 'reference',
//         _ref: item._id,  // Assuming cartItems have the correct product references
//       })),
//       total: total,  // Make sure this value is being calculated
//       discount: discount,  // Add any discount if applicable
//       orderDate: new Date().toISOString(),  // Order date for when the order was placed
//     };
//     try {
//       const response = await client.create(orderData);
//       console.log("Order Created Successfully:", response);
//     } catch (error) {
//       console.error("Sanity Order Creation Failed:", error);
//     }
    
//     console.log(orderData);
//   };










//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Order Summary */}
//           <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
//             <h2 className="text-lg sm:text-xl font-medium mb-4">Order Summary</h2>
//             {cartItems.map((item, index) => (
//               <div key={item.id || index} className="flex items-center gap-4 py-3 border-b">
//                 <div className="w-16 h-16 overflow-hidden rounded">
//                   <Image
//                     src={item.imageUrl}
//                     alt={item.name}
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div className="flex-1 gap-44">
//                   <h3 className="text-lg font-bold">{item.name}</h3>
                  
//                 <h5 className="text-lg font-semibold text-gray-600"><span className="text-black">Size: </span>{item.size}</h5>
//                 <p className="text-sm text-gray-600"><span className="text-black font-semibold">Color: </span>{item.color}</p>              
//                 <p className="text-sm text-gray-600"><span className="text-black font-semibold">Quantity: </span>{item.quantity}</p>              
//                   </div>
//                 <p className="text-lg text-slate-600 font-bold ">${item.price * item.quantity}</p>
//               </div>
//             ))}
//           </div>

//           {/* Billing Form */}
//           <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
//             <h2 className="text-xl sm:text-2xl font-medium mb-6">Billing Information</h2>
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="p-2 border rounded-sm"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                   className="p-2 border rounded-sm"
//                   required
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formValues.address}
//                 onChange={handleInputChange}
//                 className="p-2 border rounded-sm w-full"
//                 required
//               />
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   value={formValues.city}
//                   onChange={handleInputChange}
//                   className="p-2 border rounded-sm"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="zipCode"
//                   placeholder="Zip Code"
//                   value={formValues.zipCode}
//                   onChange={handleInputChange}
//                   className="p-2 border rounded-sm"
//                   required
//                 />
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//                 className="p-2 border rounded-sm w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 className="p-2 border rounded-sm w-full"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-6 justify-between py-3 text-sm sm:text-base">
//               <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                 <span>Subtotal:</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                 <span className="font-bold">Discount:</span>
//                 <span className="text-red-600">-${discount.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                 <span>Total:</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>

//             <button
//               onClick={handlePlaceOrder}
//               className="w-full h-10 sm:h-12 bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-sm mt-4 text-lg sm:text-base"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

































































"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart);
  // const [formValues, setFormValues] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   city: "",
  //   zipCode: "",
  //   phone: "",
  //   email: "",
  // });

  const deliveryFee = 15; // Fixed delivery fee

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const total = subtotal - discount + deliveryFee; // Ensure delivery fee is added properly

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
  //       body: JSON.stringify({ allproducts: cartItems, formValues, total, discount }),
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
  //     title: 'Success!',
  //     text: 'app ka order confirm ho chuka hai',
  //     icon: 'success',
  //     showCancelButton: true,
  //     confirmButtonText: 'OK',
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // router.push('/checkout');
  //     }
  //   });
  // };

  











  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });





  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    };

    let isValid = true;

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.firstName)) {
      errors.firstName = "First Name must contain only letters";
      isValid = false;
    }

    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.lastName)) {
      errors.lastName = "Last Name must contain only letters";
      isValid = false;
    }

    if (!formValues.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!formValues.city) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!formValues.zipCode) {
      errors.zipCode = "Zip Code is required";
      isValid = false;
    } else if (!/^\d{5}(-\d{4})?$/.test(formValues.zipCode)) {
      errors.zipCode = "Invalid Zip Code format";
      isValid = false;
    }

    if (!formValues.phone) {
      errors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formValues.phone)) {
      errors.phone = "Phone Number must contain only numbers";
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ allproducts: cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout", error);
      toast.error('Failed to create checkout session');
    }
  };







// *************************** HANDLE PLACE ORDER ***************************

const handlePlaceOrder = async () => {
  Swal.fire({
    // ... Swal options
     // ... Swal options
     title:"Processing Your Order",
     text:"Please Wait a moment",
     icon:"info",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor:"#d33",
     confirmButtonText:"Proceed",
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (validateForm()) {
        const orderData = {
          // ... same orderData as before
          _type: "order",
                    firstName: formValues.firstName,
                    lastName: formValues.lastName,
                    address: formValues.address,
                    email: formValues.email,
                    phone: formValues.phone, // Convert to number
                    zipcode: formValues.zipCode, // Convert to number
                    city: formValues.city,
                    total:total,
                    discount:discount,
                    cartItems: cartItems.map((item) => ({
                      _key: item._id, // Add unique key for array items
                      _type: "reference",
                      _ref: item.id // Reference the Sanity document ID
                    }))
                  };

        try {
          // const response = await fetch('/api/createorder/', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(orderData),
          // });


          const response = await fetch('/api/createorder', { 
    method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          });

          
          if (response.ok) {
            localStorage.removeItem("appliedDiscount");
            // Handle success
            Swal.fire(
              "Success!",
              "Your order has been placed!",
              "success"
            );

          } else {
            throw new Error('Failed to create order');
          }
        } catch (error) {
          // Handle error
          Swal.fire(
            "Error!",
            "Please fill all fields correctly.",
            "error"
          );
        }
      }
    }
  });
};






  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
            <h2 className="text-lg sm:text-xl font-medium mb-4">Order Summary</h2>
            {cartItems.map((item, index) => (
              <div key={item.id || index} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 overflow-hidden rounded">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 gap-44">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <h5 className="text-lg font-semibold text-gray-600"><span className="text-black">Size: </span>{item.size}</h5>
                  <p className="text-sm text-gray-600"><span className="text-black font-semibold">Color: </span>{item.color}</p>
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