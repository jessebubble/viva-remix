import { Link } from "@remix-run/react"

export default function HeroCommunity() {
    return (
        <div className="overflow-hidden bg-slate-900/10 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">La Comunidad!</h2>
                        <p className="mt-6 text-xl leading-8 text-gray-400">
                            Building powerful, flexible, scalable, user-friendly, easily manageable online experiences that are made from scratch and built to give you control.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-400">
                            Let's create an online experience together
                        </p>
                        <div className="mt-10 flex">
                            <Link to="/contact" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                Join our community <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src="https://a-us.storyblok.com/f/1011218/1024x1024/2466205218/hero-community-1.png"
                                alt="midjourney dia de los muertos"
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src="https://a-us.storyblok.com/f/1011218/896x1344/9f48327dbe/hero-community-2.png"
                                    alt="midjourney calavera"
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-slate-600/10 object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    src="https://a-us.storyblok.com/f/1011218/1024x1024/6770a4a3db/hero-community-3.png"
                                    alt="midjourney reading book"
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src="https://a-us.storyblok.com/f/1011218/1536x1536/2d7f2340fa/hero-community-4.png"
                                    alt="midjourney robot with flowers"
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-slate-700/10 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  