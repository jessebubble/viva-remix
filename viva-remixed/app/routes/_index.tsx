import type { V2_MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import RootPattern from '~/RootPattern';
import { ContactSection } from '~/components/ContactSection';
import { CreativeSection } from '~/components/CreativeSection';
import { ServiceSection } from '~/components/ServiceSection';
import { ExperienceSection } from '~/components/ExperienceSection';

export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Viva Web Design' },
        {
            name: 'Viva Web Design',
            content:
                'We specialize in building ecommerce shops and interactive branding websites for non-profit organizations, cities, art and music education events, political events, lawyers, realtors, and entrepreneurs. Additionally, we offer design services for menus, flyers, trifold brochures, and a variety of marketing materials.',
        },
    ];
};

export default function Index() {
    return (
        <>
            <RootPattern />

            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-7xl font-black tracking-tight text-neutral-950 [text-wrap:balance] sm:text-9xl">
                        Viva Web Design<span className="text-spursPink">!</span>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        We are Viva Web Design, and our focus is creating online
                        experiences that work for everyone. It's as simple as
                        that! We assist organizations in setting clear goals and{' '}
                        <span className="font-bold">
                            delivering them with confidence
                        </span>
                    </p>
                </FadeIn>
            </Container>

            <ExperienceSection />
            <CreativeSection />
            <ServiceSection />
            <ContactSection />
        </>
    );
}
