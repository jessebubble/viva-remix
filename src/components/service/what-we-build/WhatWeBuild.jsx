import { Tab } from '@headlessui/react'
import { buildArray } from './buildArray'

export default function WhatWeBuild() {
  
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-900 py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What We Build
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Made from scratch logic that enables us to restructure your website pages into several reusable blocks allowing us to build fast, SEO-optimized, user-friendly, and easily manageable websites.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-0 lg:mt-10 lg:px-8 lg:row-start-3">
              <Tab.Group as="dl" className="max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none" >
                  <Tab.List className="flex space-x-10 border-b border-gray-600 p-3">
                    {buildArray.map((tab) => (
                      <Tab key={tab.name} className="relative inline-flex items-center text-left lg:text-center px-1 pt-1 text-sm md:text-lg font-medium ui-selected:text-logo-pink ui-not-selected:text-gray-400" >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="">
                  {buildArray.map((tab) => (
                    <Tab.Panel key={tab.name} className="text-gray-400">
                      <img src={tab.imageSrc} alt={tab.imageAlt} className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none mt-3 lg:mt-10" />
                      <div className="mt-10 flex items-center gap-x-6 justify-start">         
                        <a href="/" className="text-base font-semibold leading-7 text-indigo-500 hover:text-logo-pink">
                            Live preview <span aria-hidden="true">→</span>
                        </a>
                      </div>
                      <div className="ml-9 mx-auto grid max-w-sm grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 mt-3 lg:mt-0">
                          {tab.features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt className="inline-block font-semibold text-white mt-10">
                                  {feature.name}
                                </dt>{' '}
                                <dd className="inline text-gray-400">{feature.description}</dd>
                            </div>
                          ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
            <svg className="pointer-events-none absolute top-1/2 left-80 -z-10 h-[42.375rem] -translate-y-full transform-gpu blur-3xl lg:top-1/2 lg:bottom-[-10rem] -lg:translate-y-full" viewBox="0 0 1155 678" fill="none" >
              <path fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)" fillOpacity=".25" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient
                  id="c0458c57-1330-459f-9d5c-f0d75c210466" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse" >
                  <stop stopColor="#E11887" />
                  <stop offset={1} stopColor="#E11887" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}