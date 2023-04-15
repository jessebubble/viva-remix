import Testimonial from "~/components/testimonials/Testimonials"
import ServiceCTA from "~/components/cta/ServiceCTA"

export const communityArray = [
    {
        name: 'Yung Guardian',
        role: 'Headless commerce',
        imageUrl: 'https://cdn.sanity.io/images/etrj839y/production/08f140187eecde4fbfe4fddb0a08f7e60be4a6f7-500x500.svg',
        bio: "Yung Guardian is set to release their debut album in 2023. Created a custom music player with React to match the style of the bands trippy electronic sounds. Storefront is powered by Hydrogen, shopify's headless commerce.",
        webUrl: '#',
    },
    {
        name: 'Loteria web application',
        role: 'Web application',
        imageUrl: 'https://cdn.sanity.io/images/etrj839y/production/a17e7f9406d30ee679df66dc747f34af009f4680-1024x768.svg',
        bio: 'Company was looking for a fun creative way to bring life to the companies 404 error page. Used vanilla JS, CSS and DOM manipulation to create this custom interactive card game based on the classic art of Don Clemente.',
        webUrl: '#',
    },
    {
        name: 'Alamo Welding',
        role: 'Marketing website',
        imageUrl: 'https://cdn.sanity.io/images/etrj839y/production/10908078b13bba39c7ca2f61a6edbefbcaa35759-500x500.svg',
        bio: 'Our client needed an online prescence to offically launch their brand in San Antonio. Built with React, TailwindCSS and Sanity as the headless CMS. With sanity, we were able to build a fast, SEO-friendly website our client can easily update in the future.',
        webUrl: '#',
    },
    {
        name: 'Viva Wreaths',
        role: 'Headless CMS',
        imageUrl: 'https://cdn.sanity.io/images/etrj839y/production/3a942ae6f2e2f4a962669e75f43861f6227fd431-500x500.svg',
        bio: 'Created a headless shopify storefront using Hydrogen, React and Stripe. Using Sanity.io as a headless CMS our client can easily update their products, images and descriptions.',
        webUrl: '#',
    },
]

export default function Community() {

    return (
        <>
        <Testimonial />
        <div className="bg-white py-24 md:py-32 lg:py-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Online experiences that are built to grow with you and your <span className="text-logopink">community</span> 
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Building fast, SEO-optimized, user-friendly and easily manageable websites that are made from scratch, built to scale and built to give you control.
                    </p>
                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <a href="/contact" className="rounded-md bg-logopink px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                            Contact us
                        </a>
                        <a href="/services" className="text-base font-semibold leading-7 text-gray-900 hover:text-indigo-500">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2" >
                    {communityArray.map((client) => (
                        <li key={client.name}>
                            <a href={client.webUrl} >
                                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={client.imageUrl} alt="client logo" />
                            </a>
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{client.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{client.role}</p>
                            <p className="mt-4 text-base leading-7 text-gray-600">{client.bio}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <ServiceCTA />
        </>
    );
}