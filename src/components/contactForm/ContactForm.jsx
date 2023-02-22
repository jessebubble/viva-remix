import { FiMail, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'

export default function ContactForm() {

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                        <div className=''>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center lg:text-left">Let's Connect</h2>
                            <p className="mt-4 leading-7 text-gray-600 text-center lg:text-left">
                                Are you a marketing agency looking to collaborate and build a custom solution for your client?
                                <br />
                                <br />
                                Are you a local business looking to create/update your online experience with a fast, SEO-optimized, user-friendly, and easily manageable website?
                                <br />
                                <br />
                                We're here to help! Ask us a question, schedule a meetup, request a service or just say hello. We love to hear from our local community.
                            </p>
                            <dl className="">
                                <div className="mt-4">
                                    <dt className="sr-only">Social</dt>
                                    <dd className="flex items-center justify-center lg:justify-start space-x-3">
                                        <FiLinkedin className='h-6 w-6 text-indigo-600' />
                                        <FiFacebook className='h-6 w-6 text-indigo-600' />
                                        <FiInstagram className='h-6 w-6 text-indigo-600' />
                                        <FiMail className='h-6 w-6 text-indigo-600' />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Questions</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>We believe written and shared communication is key to our success.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:jesse@vivawebdesign.dev">
                                                jesse@vivawebdesign.dev
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Meetup</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>Use our calendar to schedule a virtual meetup. Powered by calendy.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="https://calendly.com/jessebubble">
                                                calendy.com/vivawebdesign
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>Ready to grow your skills as a designer and web developer, come join our team.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="https://www.vivawebdesign.dev/jobs">
                                                vivawebdesign.dev/jobs
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Shop our local collection</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>Exclusive line of apparel created by the viva web design team</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="https://www.vivawebdesign.dev/store">
                                                vivawebdesign.dev/store
                                            </a>
                                        </dd>
                                    </div>
                                    
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}