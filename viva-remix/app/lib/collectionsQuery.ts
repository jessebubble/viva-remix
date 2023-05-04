import { client } from "./sanity";

export const getCommunity = async () => {
    const collectionCommunity = await client.fetch(`*[_type == "community" ]{
        _id,
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
        _id,
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
        _id,
        title, 
        description, 
        price, 
        mainImage,
        "slug": slug.current
    }`);
    return collectionDeveloper;
}