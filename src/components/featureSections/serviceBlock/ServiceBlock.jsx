import { serviceBlockArray } from "./serviceBlockArray";

export default function ServiceBlock() {

    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-logo-pink">Why we build</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your project in blocks.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Restructuring your website pages into several reusable blocks 
                  allows us to build fast, SEO-optimized, user-friendly, and easily manageable websites.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {serviceBlockArray.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                src="https://cdn.sanity.io/images/etrj839y/production/d20aa38f796cc43c887756b61965074b0567f280-4096x2604.png"
                alt="block of code"
                className="w-[24rem] md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    )
}