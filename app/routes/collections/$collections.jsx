import CollectionSlug from "~/components/slug/CollectionSlug";
import { getCommunitySlug, getTwitchinSlug, getDeveloperSlug } from "~/lib/collectionsQuery";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const communitySlug = await getCommunitySlug();
    const twitchinSlug = await getTwitchinSlug();
    const developerSlug = await getDeveloperSlug();
    return { communitySlug, twitchinSlug, developerSlug };
};

export default function CollectionsSlugRoute() {
    const { communitySlug, twitchinSlug, developerSlug } = useLoaderData();

    return (
        <CollectionSlug 
            communitySlug={communitySlug}
            twitchinSlug={twitchinSlug}
            developerSlug={developerSlug}
        />
    );
}