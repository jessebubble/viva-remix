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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">Welcome to our Store</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powered by Remix, Sanity, Stripe and the team at Viva Web Design</p>
                </div>
            </div>
        </div>
        <div>
            <Community communityArray={communityArray}/>
            <Twitchin  twitchinArray={twitchinArray}/>
            <Developer developerArray={developerArray}/>
        </div>
        </>
    )
}