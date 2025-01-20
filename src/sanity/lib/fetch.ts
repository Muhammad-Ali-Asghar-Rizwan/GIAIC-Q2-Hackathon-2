import { createClient } from "next-sanity";

const client = createClient  ({
    projectId: "p98zwfgl",
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
})

export async function sanityFetch({query, params = {}}: {query:string , params?:any}) {
    return await client.fetch(query , params)   
}