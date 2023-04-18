import Community from "../components/collections/Community"
import Twitchin from "../components/collections/Twitchin"
import Developer from "../components/collections/Developer"
import { getCommunity, getTwitchin, getDeveloper } from "~/lib/collectionsQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async () => {
    const communityArray = await getCommunity();
    const twitchinArray = await getTwitchin();
    const developerArray = await getDeveloper();

    return { communityArray, twitchinArray, developerArray };
}

export const collectionsArray = [
    {
        name: 'Community Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        imageAlt: 'logo',
    },
    {
        name: "Twitchin' in the Kitchen Collection",
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
        imageAlt: 'logo',
    },
    {
        name: 'Web Developer Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt: 'logo',
    },
]
  
export default function Collections() {
    const { communityArray, twitchinArray, developerArray } = useLoaderData();

    return (
        <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">Shop our collections</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The online experience brought to life</p>
                </div>
                <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                    {collectionsArray.map((collection) => (
                        <a key={collection.name} href={collection.href} className="group block">
                            <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                                <img src={collection.imageSrc} alt={collection.imageAlt} className="h-full w-full object-cover object-center" />
                            </div>
                        </a>
                    ))}
                </div> 
            </div>
        </div>
        <Community communityArray={communityArray}/>
        <Twitchin  twitchinArray={twitchinArray}/>
        <Developer developerArray={developerArray}/>
        </>
    )
}
  