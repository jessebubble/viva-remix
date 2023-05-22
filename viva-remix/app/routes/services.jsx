import Tools from '~/components/tools/Tools'
import Blocks from '~/components/blocks/Blocks'
import Service from '~/components/service/Service'
import { ChatBubbleLeftIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'

export const workflowArray = [
    {
        name: 'Design & collaboration.',
        description: "Figma, Slack and Notion are tools that allow us to transparently collaborate with you. We use Figma to design and prototype your website, Slack to communicate and Notion to keep track of tasks and share documents with you.",
        icon: ChatBubbleLeftIcon,
    },
    {
        name: 'Documentation.',
        description: "We write code for humans, not just for browsers. Should you want to work on the codebase yourself or need to work with another agency in the future.",
        icon: DocumentPlusIcon,
    },
]

export default function Services() {

    return (
        <>
        <div className="overflow-hidden bg-slate-900/10 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">How we build</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A smarter workflow.</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                We like to keep our web design and development process transparent, being fully remote, we believe written and shared communication is key to our success.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {workflowArray.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://a-us.storyblok.com/f/1011218/960x540/6daeeb78bb/use-case-screenshot-task.gif"
                            alt="notion screenshot"
                            className="w-[24rem] md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:mt-4 lg:w-[52rem]"
                        />
                    </div>
                </div>
            </div>
        </div>

        <Blocks />
        <Service />
        <Tools />
        </>
    )
}