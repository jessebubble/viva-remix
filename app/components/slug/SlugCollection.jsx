import { getCommunityBySlug, getDeveloperBySlug, getTwitchinBySlug } from "~/lib/collectionsQuery"
import { Link, useLoaderData } from "@remix-run/react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "~/lib/sanity"

export const loader = async ({params}) => {
    let slug = params.slug;
    let communitySlugArray = await getCommunityBySlug(slug)
    let developerSlugArray = await getDeveloperBySlug(slug)
    let twitchinSlugArray = await getTwitchinBySlug(slug)
    return {communitySlugArray, developerSlugArray, twitchinSlugArray};
}

export default function SlugCollection() {
    const { communitySlugArray, developerSlugArray, twitchinSlugArray } = useLoaderData();
    const slugCollectionArray = [...communitySlugArray, ...developerSlugArray, ...twitchinSlugArray];

    const builder = imageUrlBuilder(client)
    const urlFor = (source) => {
        return builder.image(source)
    }

    return (
        <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">collections</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The online experience brought to life</p>
                </div>
                <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {slugCollectionArray.map((item) => (
                        <div key={item.title} className="flex flex-col-reverse">
                            <div className="mt-6">
                                <Link to={`/collections/${item.slug}`} className="relative flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-logopink"
                                    > Add to bag<span className="sr-only">, {item.title}</span>
                                </Link>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-white">{item.title}</h3>
                                <p className="text-sm font-medium text-gray-400">{item.price}</p>
                                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                            </div>
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-900/10">
                                <img 
                                    src={urlFor(item.mainImage).url()} 
                                    alt={item.title} 
                                    className="object-cover object-center" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}