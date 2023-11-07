import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';
import { Link } from '@remix-run/react';

export function AboutSection() {
    return (
        <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="It's that simple"
                title="Inclusive, performant, user-friendly online experiences"
                invert
            >
                <p>
                    <span className="text-centroCyan">Need help getting started with your online experience?</span>{' '}
                    Viva Web Design help organisations set clear goals and <span className='font-bold'>delivers them with confidence</span>
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList className="">
                    <GridListItem title="Built for everyone" invert className="">
                        We build websites that are accessible to everyone, regardless of ability or device
                    </GridListItem>
                    <GridListItem title="Built to scale" invert className="">
                        We build websites that are accessible to everyone, regardless of ability or device
                    </GridListItem>
                    <GridListItem title="Built for the web" invert className="">
                        We build websites that are accessible to everyone, regardless of ability or device
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    );
}