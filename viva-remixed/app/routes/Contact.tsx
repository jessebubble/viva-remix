import { useId } from 'react';
import { Link, useFetcher } from '@remix-run/react';
import { Border } from '~/components/Border';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';
import { SocialMedia } from '~/components/SocialMedia';
import RootPattern from '~/RootPattern';

function TextInput({ label, ...props }) {
    let id = useId();

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
                {label}
            </label>
        </div>
    );
}

function RadioInput({ label, ...props }) {
    return (
        <label className="flex gap-x-3">
            <input
                type="radio"
                {...props}
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            />
            <span className="text-base/6 text-neutral-950">{label}</span>
        </label>
    );
}

function ContactForm() {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';    

    return (
        <FadeIn className="lg:order-last">
            <fetcher.Form 
                method="post"
                action="/send"
            >
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Project inquiries
                </h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="Name" name="name" autoComplete="name" />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextInput
                        label="Company"
                        name="company"
                        autoComplete="organization"
                    />
                    <TextInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                    />
                    <TextInput label="Message" name="message" />
                </div>
                <Button type="submit" className="mt-10" invert={false} >
                    {isSubmitting ? 'Sending...' : "Let's build together"}
                </Button>          
            </fetcher.Form>
        </FadeIn>
    );
}

function ContactDetails() {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Viva Web Design
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                We will assist in breaking down your ideas and refining them through prototypes, research, and thorough planning.
                Our approach is to start from the simplest and most solid foundations
            </p>

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Strategy &amp; Development
                </h2>
                <p className="mt-6 text-base text-neutral-600">
                    We cultivate enduring relationships with our clients, extending beyond product delivery, which enables us to serve them for many years and invoice them accordingly
                </p>
            </Border>

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Follow us
                </h2>
                <SocialMedia className="mt-6" />
            </Border>
        </FadeIn>
    );
}

export const metadata = {
    title: 'Contact Us',
    description:
    "We are Viva Web Design, and our focus is creating online experiences that work for everyone. It's as simple as that! We assist organizations in setting clear goals and delivering them with confidence",
};

export default function Contact() {
    return (
        <>
            <RootPattern />
            <PageIntro
                eyebrow="Let's build together"
                title="It starts with an idea..."
            >
                <p>
                    We have helped clients of all sizes produce stunning websites, and we are confident that we can help you produce stunning websites as well.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </Container>
        </>
    );
}