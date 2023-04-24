import Community from "~/components/collections/Community"
import Twitchin from "~/components/collections/Twitchin"
import Developer from "~/components/collections/Developer"
import { getCommunity, getTwitchin, getDeveloper } from "~/lib/collectionsQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async ({params}) => {
    let slug = params.slug;
    const communityArray = await getCommunity(slug);
    const twitchinArray = await getTwitchin(slug);
    const developerArray = await getDeveloper(slug);

    return { slug, communityArray, twitchinArray, developerArray };
}

export default function CollectionsIndexRoute() {
    const { communityArray, twitchinArray, developerArray } = useLoaderData();

    return (
        <>
            <Twitchin  twitchinArray={twitchinArray} />
            <Developer developerArray={developerArray} />
            <Community communityArray={communityArray} />
        </>
    )
}