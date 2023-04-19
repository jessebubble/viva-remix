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

export const getCommunitySlug = async () => { 
    const communitySlug = await client.fetch(`*[_type == "community" && slug.current == $slug][0] {
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }[0]`, {slug : "community"}); 
    return communitySlug;
}


export const getTwitchinSlug = async () => {
    const collectionTwitchin = await client.fetch(`*[_type == "twitchin" && slug.current == $slug]{
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }`, {slug: "twitchin"});
    return collectionTwitchin;
}

export const getDeveloperSlug = async () => {
    const collectionDeveloper = await client.fetch(`*[_type == "developer" && slug.current == $slug]{
        title,
        description,
        price,
        mainImage,
        "slug": slug.current
    }`, {slug: "developer"});
    return collectionDeveloper;
}