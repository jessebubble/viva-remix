import { serviceWorkflowArray } from "./serviceWorkflowArray";

export default function ServiceWorkflow() {

    return (
      <div className="overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-logo-pink">How we build</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A smarter workflow.</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Our web development process is transparent, since we're fully remote, we believe written and shared communication is key to our success.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {serviceWorkflowArray.map((feature) => (
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
                src="https://cdn.sanity.io/images/etrj839y/production/0a765cc49e0c07e4c95b4d3957fc8de1cd194eff-960x540.gif"
                alt="notion screenshot"
                className="w-[24rem] md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    )
}