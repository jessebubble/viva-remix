import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { FAQsArray } from './FAQsArray'

export default function FAQs() {
    return (
        <div className="bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
                        <p className="mt-4 text-lg leading-7 text-gray-300 md:w-96">
                            Our web development process is transparent, since we're fully remote, 
                            we believe written and shared communication is key to our success. 
                            Contact us if you have any additional questions.
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {FAQsArray.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
