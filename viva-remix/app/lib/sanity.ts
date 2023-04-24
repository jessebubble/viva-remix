import { createClient } from "@sanity/client";

export const client = createClient({ 
    projectId: "vk33ybcu",
    dataset: "production",
    apiVersion: "2023-04-17",
    useCdn: true, 
    //token: process.env.SANITY_SECRET_TOKEN 
});