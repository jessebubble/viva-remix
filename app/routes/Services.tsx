import { PageIntro } from '~/components/PageIntro';
import { ServiceSection } from '~/components/CTAService';
import { ExperienceSection } from '~/components/CTAExperience';
import { ContactSection } from '~/components/CTAContact';

export default function Services() {
    return (
        <>
            <PageIntro
                eyebrow="We create online experiences"
                title="Designing and building for the modern web"
                centered={true}
            >
                <p>
                    We are{' '}
                    <strong className="text-spursTurq">Viva Web Design</strong>,
                    and our focus is creating online experiences that work for
                    everyone. It's as simple as that! We assist organizations in
                    setting clear goals and{' '}
                    <strong>delivering them with confidence</strong>
                </p>
            </PageIntro>

            <ServiceSection />
            <ExperienceSection />
            <ContactSection />
        </>
    );
}
