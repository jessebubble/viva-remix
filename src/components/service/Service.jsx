import { serviceArray } from "./serviceArray"

  
  export default function Service() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Made from scratch</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600"> 
              We build fast, SEO-optimized, user-friendly, and easily manageable websites
              by restructuring your website pages into several reusable blocks.
              We code the user interface and logic of these blocks from scratch and make them available for you on the headless CMS.
              What does all this mean, let's explore it in detail. 
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {serviceArray.map((service) => (
              <article key={service.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={service.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={service.datetime} className="text-gray-500">
                      {service.date}
                    </time>
                    <a
                      href={service.category.href}
                      className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {service.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={service.href}>
                        <span className="absolute inset-0" />
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{service.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={service.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={service.author.href}>
                          <span className="absolute inset-0" />
                          {service.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{service.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  