import { Facebook, Instagram, Linkedin, Mail } from '~/components/icons';
import FAQs from '~/components/faqs/FAQs';
import Pricing from '~/components/pricing/Pricing';

const footerArray = [
    { name: "mail", icon: Mail, link: "mailto:jesse@vivawebdesign.dev" },
    { name: "linkedin", icon: Linkedin, link: "https://www.linkedin.com/company/vivawebdesign/" },
    { name: "facebook", icon: Facebook, link: "https://www.facebook.com/vivawebdesign" },
    { name: "instagram", icon: Instagram, link: "https://www.instagram.com/vivawebdesign_" },
];

export default function Contact() {

    return (
        <>
        <div className="bg-slate-900/10 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                        <div className=''>
                            <h2 className="text-3xl font-bold tracking-tight text-white text-left">Let's Connect</h2>
                            <p className="mt-4 leading-7 text-gray-300 text-left">
                                Are you a marketing agency in need of assistance to build a custom feature, app or solution for your clients? We'd love to collaborate!
                                <br />
                                <br />
                                Are you a local business looking to create or update your online experience with a fast, SEO-optimized, user-friendly and easily manageable website?
                                <br />
                                <br />
                                We're here to help! Ask us a question, schedule a meetup, request a service or just say hello. We love to hear from our local community.
                            </p>
                            <dl className="">
                                <div className="mt-4">
                                    <dt className="sr-only">Social</dt>
                                    <dd className="flex items-center justify-start space-x-4">
                                        {footerArray.map((item) => {
                                            return ( <item.icon key={item.name} onClick={() => window.open(item.link, "_blank")} className="text-gray-50 hover:text-indigo-500" /> );
                                        })}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10 hover:bg-gray-200">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Questions</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>All questions are welcome. We believe written and shared communication is key to our success. Need more information about a service? Ready to move forward with a quote? Start the conversation and send us a message. We're here to help!</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold hover:text-indigo-600 text-logopink" href="mailto:jesse@vivawebdesign.dev">
                                                Start the conversation
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 hover:bg-gray-200">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Meetup</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>We're currently located in San Antonio but our work is remote. Start the conversation by sending us a message and we'll share our calendar to schedule a virtual meetup. For our clients in San Antonio, in-person meetups are an option.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold hover:text-indigo-600 text-logopink" href="mailto:jesse@vivawebdesign.dev">
                                                Send us a message
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 hover:bg-gray-200">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Shop our local collection</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>Our local clients have given us permission to have some fun with their brands and create an exclusive line of apparel. All proceeds from the local collection go right back to the creative community in San Antonio.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold hover:text-indigo-600 text-logopink" href="/store">
                                                vivawebdesign/store
                                            </a>
                                        </dd>
                                    </div>  
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 hover:bg-gray-200">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div className="mt-1">
                                        <dt className="sr-only">text</dt>
                                        <dd>Ready to gain work experience collaborating with a team of UI designers and web developers? We'd love to have you join the team. Follow the link to see if any open roles are available.</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold hover:text-indigo-600 text-logopink" href="/jobs">
                                                vivawebdesign/jobs
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
        <Pricing />
        <FAQs />
        </>
    );
}