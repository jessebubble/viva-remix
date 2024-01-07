import RootPattern from '~/RootPattern';
import { PageIntro } from '~/components/PageIntro';
import { ExperienceSection } from '~/components/ExperienceSection';
import { ServiceSection } from '~/components/ServiceSection';
import { ContactSection } from '~/components/ContactSection';

export const metadata = {
    title: 'Experiences powered by Viva Web Design',
    description:
        "We are Viva Web Design, and our focus is creating online experiences that work for everyone. It's as simple as that! We assist organizations in setting clear goals and delivering them with confidence",
};

export default function Experiences() {
    return (
        <>
            <RootPattern />
            <PageIntro
                eyebrow="We sell online experiences"
                title="Experienes so good you might start to think we're automated!"
            >
                <p>
                    We are Viva Web Design, and our focus is creating online
                    experiences that work for everyone. It's as simple as that!
                    We assist organizations in setting clear goals and
                    delivering them with confidence
                </p>
            </PageIntro>

            <ExperienceSection />
            <ServiceSection />
            <ContactSection />
        </>
    );
}
