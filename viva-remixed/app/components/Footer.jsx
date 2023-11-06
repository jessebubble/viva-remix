import { Link, useFetcher } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { DevSaLogo } from '~/components/Logo';
import { socialMediaProfiles } from '~/components/SocialMedia';

function NewsletterForm() {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';

    return (
        <fetcher.Form method="post" action="/send" className="max-w-sm">
            <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                Sign up for our newsletter
            </h2>
            <p className="mt-4 text-sm text-neutral-700">
                Subscribe to get the latest community news, events, resources
                and inspiration.
            </p>
            <div className="relative mt-6">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                        type="submit"
                        aria-label="Submit"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 p-2"
                    >
                        Submit {isSubmitting && <CheckIcon className="ml-2 w-4" />}
                    </button>          
                </div>
            </div>
        </fetcher.Form>
    );
}

const navigation = [
    {
        title: 'Viva Examples',
        links: [
            { title: 'Promotional Flyers', href: '/flyers' },
            {
                title: 'Restaurant Menus',
                href: '/menus',
            },
            {
                title: 'Online Experiences',
                href: '/experiences',
            },
            {
                title: (
                    <>
                        See all <span aria-hidden="true">&rarr;</span>
                    </>
                ),
                href: '/services',
            },
        ],
    },
    {
        title: 'Site Navigation',
        links: [
            { title: 'Home Page', href: '/' },
            { title: 'About us', href: '/about' },
            { title: 'Contact us', href: '/contact' },
            { title: 'Pricing', href: '/pricing' },
            { title: 'Hablamos español', href: '/language' },
        ],
    },
    {
        title: "Social Media",
        links: socialMediaProfiles,
    },
];

function Navigation() {
    return (
        <nav>
            <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section) => (
                    <li key={section.title}>
                        <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                            {section.title}
                        </div>
                        <ul className="mt-4 text-sm text-neutral-700">
                            {section.links.map((link) => (
                                <li key={link.title} className="mt-4">
                                    <Link
                                        to={link.href}
                                        className="transition hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function ArrowIcon(props) {
    return (
        <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            />
        </svg>
    );
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            />
        </svg>
    );
}

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <Navigation />
                    <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="mb-20 mt-24 flex items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12 lg:pt-16">
                    <Link to="/" aria-label="Home">
                        <DevSaLogo className="-ml-8 w-28 md:-ml-10 md:w-32" />
                    </Link>
                    <p className="text-sm text-neutral-700">
                        © Viva Web Design {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    );
}