import { getMerch } from "~/lib/merchQuery"
import { Link, useLoaderData } from "@remix-run/react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "~/lib/sanity"


export const loader = async () => {
    let merchArray = await getMerch()
    return { merchArray };
}

export default function Store() {
    const { merchArray } = useLoaderData();

    const builder = imageUrlBuilder(client)
    const urlFor = (source) => {
        return builder.image(source)
    }

    return (    
        <div className="bg-slate-900/10 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">Store</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The online experience brought to life</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Our <span className="text-logopink">Community Collection</span> is our thank you to our clients and their growing community. 
                        This exclusive collection is made with love by the Viva Web Design team
                        because we know every purchase made goes directly back to support our local creative community.  
                    </p>
                </div>
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    {merchArray.map((item) => (
                        <div className="bg-slate-50/10 hover:bg-slate-300/10 sm:hover:rounded-2xl p-8 sm:p-10" key={item._id}>
                            <div className="">
                                <Link to={`/collection/${item.slug}`} >
                                    <img 
                                        className="max-h-40 lg:max-h-44 w-full object-contain" 
                                        src={urlFor(item.mainImage).url()}
                                        alt="client logo" 
                                    />
                                </Link>
                                <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{item.title}</h3>
                                <p className="mt-4 text-base leading-7 text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 