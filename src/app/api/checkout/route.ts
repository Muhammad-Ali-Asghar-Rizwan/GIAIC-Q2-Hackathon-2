// import { NextResponse } from "next/server";
// const stripe = require('stripe')(process.env.NEXT_STRIPE_SECRET_KEY);

// export const POST = async (request: any) => {
//   const { allproducts } = await request.json();
//   let activeProducts = await stripe.products.list({ active: true });

//   try {
//     // 1. Find products from stripe that matches products from cart.
//     for (const product of allproducts) {
//       const matchedProducts = activeProducts?.data?.find((stripeProduct: any) =>
//         stripeProduct.name.toLowerCase() === product.name.toLowerCase()
//       );

//       // 2. If product didn't exist in Stripe, then add this product to stripe.
//       if (matchedProducts == undefined) {
//         await stripe.products.create({
//           name: product.name,
//           default_price_data: {
//             currency: 'usd',
//             unit_amount: product.price * 100,
//           },
//         });
//       }
//     }

//     // 3. Once the new product has been added to stripe, do FETCH Products again with updated products from stripe
//     activeProducts = await stripe.products.list({ active: true });
//     let stripeProducts = [];

//     for (const product of allproducts) {
//       const stripeProduct = activeProducts?.data?.find((stripeProduct: any) =>
//         stripeProduct.name.toLowerCase() === product.name.toLowerCase()
//       );

//       if (stripeProduct) {
//         stripeProducts.push({
//           price: stripeProduct.default_price,
//           quantity: product.quantity,
//         });
//       }
//     }

//     // 4. Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: stripeProducts,
//       mode: 'payment',
//       success_url: `http://localhost:3000/success`,
//       cancel_url: `http://localhost:3000/`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (error) {
//     console.error("Error creating Stripe checkout session", error);
//     return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
//   }
// };






































































import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { client } from '../../../../sanity/lib/client';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const POST = async (request: Request) => {
  try {
    const { allproducts, formValues, total, discount } = await request.json();
    console.log('Received data:', { allproducts, formValues, total, discount });

    let activeProducts = await stripe.products.list({ active: true });

    // 1. Find products from stripe that matches products from cart.
    for (const product of allproducts) {
      const matchedProduct = activeProducts.data.find(
        (stripeProduct) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      // 2. If product didn't exist in Stripe, then add this product to stripe.
      if (!matchedProduct) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: 'usd',
            unit_amount: product.price * 100,
          },
        });
      }
    }

    // 3. Once the new product has been added to stripe, fetch products again with updated products from stripe
    activeProducts = await stripe.products.list({ active: true });
    const stripeProducts = allproducts.map((product: { name: string; quantity: any; }) => {
      const stripeProduct = activeProducts.data.find(
        (stripeProduct) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (stripeProduct) {
        return {
          price: stripeProduct.default_price,
          quantity: product.quantity,
        };
      }
      return null;
    }).filter(Boolean);

    // 4. Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: stripeProducts,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    // 5. Create Order in Sanity
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: allproducts.map((item: any) => ({
        _type: 'reference',
        _ref: item.id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
      status: 'pending',
    };

    console.log('Order data to be saved:', orderData);

    await client.create(orderData);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe checkout session or order', error);
    return NextResponse.json({ error: 'Failed to create checkout session or order' }, { status: 500 });
  }
};