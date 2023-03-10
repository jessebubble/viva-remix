import { CheckIcon } from '@heroicons/react/20/solid'
import { createArray } from './createArray'

export default function Tools() {

    return (
        <div className="isolate overflow-hidden bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-logo-pink">Services</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The why behind our love for creating reusable blocks of code.
                    </p>
                </div>
                <div className="relative mt-6">
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                        Made from scratch logic that enables us to restructure your website pages into several reusable blocks 
                        allowing us to build fast, SEO-optimized, user-friendly, and easily manageable websites.    
                    </p>
                    <svg viewBox="0 0 1208 1024" className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0" >
                        <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
                        <defs>
                        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                            <stop stopColor="#E11887" />
                            <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flow-root bg-white pb-24 sm:pb-32">
                <div className="-mt-80">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                            {createArray.map((tier) => (
                            <div key={tier.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10" >
                                <div>
                                    <h3 id={tier.id} className="text-base font-semibold leading-7 text-logo-pink">
                                        {tier.name}
                                    </h3>
                                    <p className="mt-6 lg:mt-0 font-medium text-base leading-7 text-gray-900">{tier.description}</p>
                                    <ul className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={tier.href} aria-describedby={tier.id} className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-logo-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                    See it for yourself 
                                </a>
                            </div>
                            ))}
                            <div className="flex flex-col items-start gap-y-6 gap-x-8 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                <div className="lg:min-w-0 lg:flex-1">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-logo-pink">Web applications</h3>
                                    <p className="mt-1 text-base leading-7 text-gray-600">
                                        Our development team can implement additional tools to your online experience. 
                                        Features we develop include billing, authentication, user management, content managment, data visualization and a built-in search engine for your website.
                                    </p>
                                </div>
                                <a href="/preview-application" className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 hover:text-logo-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                    Live preview <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                            <div className="flex flex-col items-start gap-y-6 gap-x-8 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                <div className="lg:min-w-0 lg:flex-1">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-logo-pink">Marketing websites</h3>
                                    <p className="mt-1 text-base leading-7 text-gray-600">
                                        Our marketing websites are made from scratch resulting in an online experience that's completely flexible 
                                        to integrate with any API, include complex interactive elements and take advantage of easy to use content management systems like Sanity.
                                    </p>
                                </div>
                                <a href="/preview-marketing" className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 hover:text-logo-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                    Live preview <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}