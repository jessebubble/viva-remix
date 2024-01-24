import { Link, useFetcher } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { VivaLogo } from '~/components/Logo';
import { socialMediaProfiles } from '~/components/SocialMedia';
import clsx from 'clsx';

function NewsletterForm() {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';

    return (
        <fetcher.Form className="max-w-sm">
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
                        className="aspect-square flex h-full items-center justify-center rounded-xl bg-neutral-950 px-3 text-white transition hover:bg-neutral-800"
                    >
                        {isSubmitting ? 'Thank You' : 'Submit'}
                    </button>
                </div>
            </div>
        </fetcher.Form>
    );
}

const navigation = [
    {
        title: 'What we do',
        links: [
            { title: 'Marketing campains', href: '/showcase' },
            {
                title: 'Creative web design',
                href: '/showcase',
            },
            {
                title: 'Non-Profit SPAs',
                href: '/non-profit',
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
            { title: 'Service we offer', href: '/services' },
            { title: 'Contact us', href: '/contact' },
            { title: 'Showcase', href: '/showcase' },
            { title: 'Hablamos español', href: '#' },
        ],
    },
    {
        title: 'Social Media',
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
                <div className="mb-20 mt-24 flex items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                    <Link to="/" aria-label="Home">
                        <VivaLogo
                            className={clsx(
                                'h-8 w-auto md:h-10 lg:h-12',
                                'transition hover:animate-pulse'
                            )}
                        />
                    </Link>
                    <p className="text-sm text-neutral-700">
                        © Viva Web Design {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    );
}
