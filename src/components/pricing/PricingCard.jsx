export default function PricingCard() {

  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-52 md:pt-20 lg:pb-60 lg:pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold leading-8 text-logo-pink">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our made from scratch blocks of code 
            are designed to put you in control of your website
            and allow us to offer <span className="text-indigo-600">simple, transparent pricing</span>
          </p>
        </div>
        <div className="relative mt-6">
          <svg viewBox="0 0 1208 1024" className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0" >
            <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#E11887" />
                <stop offset={1} stopColor="#E11887" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/contact" className="rounded-md bg-logo-pink px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
            Get a quote
          </a>
          <a href="/services" className="text-base font-semibold leading-7 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}