import Developer from "~/components/collections/Developer"
import { getDeveloper } from "~/lib/collectionsQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async ({params}) => {
    let slug = params.slug;
    const developerArray = await getDeveloper(slug);

    return { slug, developerArray };
}

export default function DeveloperCollectionsRoute() {
    const { developerArray } = useLoaderData();

    return (
        <>
            <Developer developerArray={developerArray} />
        </>
    )
}