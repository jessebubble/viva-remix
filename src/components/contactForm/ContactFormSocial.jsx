import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactFormSocial() {

    return (
        <div className="bg-slate-900 rounded-3xl py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-indigo-500 sm:text-3xl">
                    Let's Connect
                </h2>
                <p className="mt-3 text-lg leading-6 text-slate-200">
                    We'd love to hear from you. Use the form to request a service, ask a question about a service, schedule a meetup, or just say hello and open the door to discuss a custom project and goals.
                </p>
                <dl className="mt-8 text-base text-slate-200">
                    <div className="mt-6">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                            <FiMail className='h-6 w-6 text-indigo-500' />
                            <span className="ml-3">jesse@vivawebdesign.dev</span>
                        </dd>
                    </div>
                    <div className="mt-3">
                        <dt className="sr-only">Social</dt>
                        <dd className="flex">
                            <FiInstagram className='h-6 w-6 text-indigo-500' />
                            <span className="ml-3">@vivawebdesign</span>
                        </dd>
                    </div>
                    <div className="mt-3">
                        <dt className="sr-only">Social</dt>
                        <dd className="flex">
                            <FiLinkedin className='h-6 w-6 text-indigo-500' />
                            <span className="ml-3">@vivawebdesign</span>
                        </dd>
                    </div>
                    <div className="mt-3">
                        <dt className="sr-only">Social</dt>
                        <dd className="flex">
                            <FiFacebook className='h-6 w-6 text-indigo-500' />
                            <span className="ml-3">@vivawebdesign</span>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

    )
}