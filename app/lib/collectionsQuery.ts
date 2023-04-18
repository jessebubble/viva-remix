import { client } from "./sanity";

export const getCommunity = async () => {
    const collectionCommunity = await client.fetch(`*[_type == "community"]{
        title, 
        description, 
        price, 
        mainImage,
        "slug": slug.current
    }`);
    return collectionCommunity;
}

export const getTwitchin = async () => {
    const collectionTwitchin = await client.fetch(`*[_type == "twitchin"]{
        title, 
        description, 
        price, 
        mainImage,
        "slug": slug.current
    }`);
    return collectionTwitchin;
}

export const getDeveloper = async () => {
    const collectionDeveloper = await client.fetch(`*[_type == "developer"]{
        title, 
        description, 
        price, 
        mainImage,
        "slug": slug.current
    }`);
    return collectionDeveloper;
}