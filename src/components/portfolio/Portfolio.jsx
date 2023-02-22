import { portfolioArray } from "./portfolioArray"

export default function Portfolio() {

    return (
        <div className="bg-white py-24 md:py-32 lg:py-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stunning online experiences that are built to grow and adapt with our <span className="text-logo-pink">community</span> 
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Building fast, SEO-optimized, user-friendly, easily manageable websites that are made from scratch, built to scale and built to give you control.
                    </p>
                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <a href="/contact" className="rounded-md bg-logo-pink px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                            Contact us
                        </a>
                        <a href="/services" className="text-base font-semibold leading-7 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2" >
                    {portfolioArray.map((client) => (
                        <li key={client.name}>
                            <a href={client.webUrl} >
                                <img className="aspect-[3/2] w-full rounded-2xl object-cover hover:border-t-4 hover:border-logo-pink" src={client.imageUrl} alt="client logo" />
                            </a>
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{client.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{client.role}</p>
                            <p className="mt-4 text-base leading-7 text-gray-600">{client.bio}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 