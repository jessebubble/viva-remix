import { PageIntro } from '~/components/PageIntro';
import { ShowcaseSection } from '~/components/CTAShowcase';
import { ServiceSection } from '~/components/CTAService';
import { ContactSection } from '~/components/CTAContact';

export default function Showcase() {
    return (
        <>
            <PageIntro
                eyebrow="It starts with an idea..."
                title="Let's connect and see what we can do for you"
                centered={true}
            >
                <p>
                    We have helped clients of all sizes produce stunning
                    websites, and we are confident that we can help you produce
                    stunning websites as well.
                </p>
            </PageIntro>

            <ShowcaseSection />
            <ServiceSection />
            <ContactSection />
        </>
    );
}
