import { factorArray } from "./factorArray"

export default function PricingFactors() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        So, how much does it cost create a stunning online experience for your business?
                        The answer is simple: it depends. There are a number of factors that we take into account when we quote a project.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {factorArray.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">       
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}