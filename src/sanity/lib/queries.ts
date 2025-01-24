import { defineQuery } from "next-sanity";



export const allProductsQuery = `
  *[_type == "products"]{
    _id, 
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url
  }
`;
// export const allproducts = defineQuery(`
//   *[_type == "products"]{
//   _id,
//   name,
//   price,
//   description,
//   category,
//   discountPercent,
//   new,
//   colors,
//   sizes,
//   "imageUrl": image.asset->url
//   }
// `)

export  const fourProducts = defineQuery(`
    *[_type == "products"][0..3]{
    _id, 
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url
    }
    `)

export  const fourProducts2 = defineQuery(`
    *[_type == "products"][4..7]{
    _id, 
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url
    }
    `)