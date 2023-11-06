/* import Twitchin from "~/components/collections/Twitchin"
import { getTwitchin } from "~/lib/collectionsQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async ({params}) => {
    let slug = params.slug;
    const twitchinArray = await getTwitchin(slug);

    return { slug, twitchinArray };
}

export default function TwitchinCollectionsRoute() {
    const { twitchinArray } = useLoaderData();

    return (
        <>
            <Twitchin twitchinArray={twitchinArray} />
        </>
    )
} */