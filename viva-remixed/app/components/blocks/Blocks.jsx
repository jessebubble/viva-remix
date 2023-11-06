import { SquaresPlusIcon, CommandLineIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'
import { Player } from '@lottiefiles/react-lottie-player'

export const blocksArray = [
    {
        name: 'Made from scratch.',
        description: "We code the user interface and logic of these blocks from scratch and make them available for you on the headless CMS",
        icon: CommandLineIcon,
    },
    {
        name: 'Scalability.',
        description: 'Building in blocks makes sure that the codebase can grow with you and be used for years to come.',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Usability.',
        description: "Allows us to give you full control of the website's content and layout without having to code anything yourself.",
        icon: ArrowPathRoundedSquareIcon,
    },
]

export default function ServiceBlock() {

    return (
        <div className="overflow-hidden bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">Why we build</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your project in blocks.</p>
                            <p className="mt-6 text-lg leading-8 text-gray-500">
                                Restructuring your website pages into several reusable blocks 
                                allows us to build fast, SEO-optimized, user-friendly, and easily manageable websites.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-500 lg:max-w-none">
                                {blocksArray.map((feature) => (
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
                        <Player
                            src="https://assets7.lottiefiles.com/packages/lf20_dexfhdwv.json"
                            className="w-[24rem] md:w-[48rem] max-w-none rounded-xl lg:w-[52rem]"
                            background='transparent'
                            loop={true}
                            autoplay={true} >
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}