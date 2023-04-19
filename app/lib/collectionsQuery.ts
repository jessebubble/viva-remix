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

export const getCommunityBySlug = async (slug: string) => {
    const collectionCommunitySlug = await client.fetch(`*[_type == "community" && slug.current == $slug]{
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }`, { slug });
    return collectionCommunitySlug;
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

export const getTwitchinBySlug = async (slug: string) => {
    const collectionTwitchinSlug = await client.fetch(`*[_type == "twitchin" && slug.current == $slug]{
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }`, { slug });
    return collectionTwitchinSlug;
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

export const getDeveloperBySlug = async (slug: string) => {
    const collectionDeveloperSlug = await client.fetch(`*[_type == "developer" && slug.current == $slug]{
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }`, { slug });
    return collectionDeveloperSlug;
}