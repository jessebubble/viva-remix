import Community from "~/components/collections/Community"
import { getCommunity } from "~/lib/collectionsQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async ({params}) => {
    let slug = params.slug;
    const communityArray = await getCommunity(slug);

    return { slug, communityArray };
}

export default function CommunityCollectionsRoute() {
    const { communityArray } = useLoaderData();

    return (
        <>
            <Community communityArray={communityArray} />
        </>
    )
}