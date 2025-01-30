import { defineQuery } from "next-sanity";




export const like_fourproducts = defineQuery(`
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
// `;export const allProductsQuery2 = `
*[_type == "products"] | order(_createdAt asc) {
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

export const allCategoriesQuery = `
*[_type == "category"] | order(_createdAt asc) {
  _id,
  title
}
`;

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