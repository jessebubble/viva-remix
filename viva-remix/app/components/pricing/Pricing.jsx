export const pricingArray = [
    {
        id: 1,
        title: 'Understanding the logic behind our architecture ',
        description: "Our philosophy when it comes to technical implementation is based on simplicity and minimalism. We avoid reinventing the wheel by using service providers to implement certain functionalities (i.e. authentication). We also do not use a service if it's not needed, making sure to save subscription costs. Building in blocks allows us to avoid unnecessary complexity and keep your project simple.",
    },
    {
        id: 2,
        title: "Determining the scope of your project",
        description: "We're usually able to provide a fixed price and time estimate if we're able to work with you to formulate all the requirements of your project. However, this is not always the case. In these instances, we would either offer a research phase to nail the requirements or an ongoing agreement with daily rate. The rate will depend on the scope of your project and the number of custom blocks we need to create for your website.",
    },
    {
        id: 3,
        title: "Beyond Sanity's free forever plan",
        description: "The free forever plan offered by Sanity CMS is perfect for getting started and scaling up your project. The free forever plan provides unlimited admin users, multiple roles (Admin, Editor, Viewer), unlimited content types, and a generous storage quota. Beyond the free forever plan, pay-as-you-go rates are available and a predictable pricing team plan.",
    },
    {
        id: 4,
        title: 'Is Shopify free?',
        description: "Shopify is a subscription-based platform, so it is not completely free to use. However, it does offer a free trial period during which you can set up and explore the platform without incurring any charges. To use Shopify beyond the trial period, you will need to choose a pricing plan that meets your needs.",
    },
    {
        id: 5,
        title: 'Web hosting',
        description: "Both the website/ecommerce and Sanity CMS are hosted on deployment platforms like Vercel. All Vercel plans include Bandwidth, Builds, and Serverless Function Execution. The scope of your project and the size of your team needed to collaborate will determine which Vercel plan you need to power your project.",
    },
    {
        id: 6,
        title: 'Domain names',
        description: "Vercel's Domain Management feature allows you to easily purchase, manage, and configure custom domains for your applications and websites. You can use Vercel to purchase a new domain, or you can transfer an existing domain to Vercel.",
    },

]

export default function Pricing() {

    return (
        <>
        <div className="bg-white py-24 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-500">
                        There are a number of factors that must be taken into account when buiding a project.
                        Our end goal is the same, build from scratch, build to scale and build to give you control of your online experience. 
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-300 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {pricingArray.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">       
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-500">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}