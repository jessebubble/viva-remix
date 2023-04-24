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
        <div className="bg-slate-900/10 mx-auto max-w-7xl px-6 py-0 sm:py-32 md:py-6 lg:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto lg:mx-0 lg:flex-auto">
                <div className="">
                    {slugCollectionArray.map((item) => (
                        <div key={item.title} className="mx-auto max-w-2xl">
                            <div className="sm:text-center lg:mb-6">
                                <h2 className="text-3xl font-semibold leading-8 tracking-tight text-logopink">{item.title}</h2>
                                <p className="mt-2 text-lg font-bold tracking-tight text-white">{item.description}</p>
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img 
                                    src={urlFor(item.mainImage).url()} 
                                    alt={item.title} 
                                    className="object-cover object-center aspect-[3/2] w-full" 
                                />
                            </div>
                            <div className="mt-6 text-right">
                                <p className="text-lg font-medium text-white">
                                    ${item.price}
                                    <span className="text-sm text-gray-400 ">+tax</span>
                                </p>  
                            </div>
                            <div className="mt-6 flex items-center justify-center">                        
                                <Link to={`/store/collections/${item.slug}`} className="relative flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-logopink"
                                    > Add to Cart<span className="sr-only">, {item.title}</span>
                                </Link>
                            </div>     
                        </div>
                    ))}
                </div>
            </div>
        </div>        
    )
}