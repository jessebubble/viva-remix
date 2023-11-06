import type { V2_MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import RootPattern from '~/RootPattern';


export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Viva Web Design' },
        {
            name: 'Viva Web Design',
            content:
            "We specialize in building ecommerce shops and interactive branding websites for non-profit organizations, cities, art and music education events, political events, lawyers, realtors, and entrepreneurs. Additionally, we offer design services for menus, flyers, trifold brochures, and a variety of marketing materials."
        },
    ];
};

export default function Index() {
    return (
        <>
            <RootPattern />
           
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        Need help creating an online experience? 
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        We specialize in building ecommerce shops and interactive online experiences for non-profit organizations, city, art, music and education events, political events, lawyers, realtors, and entrepreneurs. 
                    </p>
                </FadeIn>
            </Container>

        </>
    );
}