import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2021-03-25',
});

export async function sanityFetch({ query, params = {} }: { query: string; params?: any }) {
  return await client.fetch(query, params);
}