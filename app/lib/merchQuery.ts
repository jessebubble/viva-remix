import { client } from "./sanity";

export const getMerch = async () => {
    const merch = await client.fetch(`*[_type == "merch"]{
        title, 
        description, 
        price, 
        mainImage,
        "slug": slug.current
    }`);
    return merch;
}