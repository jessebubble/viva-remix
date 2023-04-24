import SlugCollection from "~/components/slug/SlugCollection";
import { getCommunityBySlug, getTwitchinBySlug, getDeveloperBySlug } from "~/lib/collectionsQuery";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
    let slug = params.slug;
    let communitySlugArray = await getCommunityBySlug(slug);
    let twitchinSlugArray = await getTwitchinBySlug(slug);
    let developerSlugArray = await getDeveloperBySlug(slug);

    return { slug, communitySlugArray, twitchinSlugArray, developerSlugArray  };
}

export default function CollectionsSlugRoute() {
    const { communitySlugArray, twitchinSlugArray, developerSlugArray } = useLoaderData();

    return (
        <>
        <SlugCollection 
            communitySlugArray={communitySlugArray}
            twitchinSlugArray={twitchinSlugArray}
            developerSlugArray={developerSlugArray}
        />
        </>
    )
}