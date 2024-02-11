import { PageIntro } from '~/components/PageIntro';
import { ServiceSection } from '~/components/CTAService';
import { ContactSection } from '~/components/CTAContact';
import { AboutSection } from '~/components/CTAAbout';

export default function Services() {
   return (
      <>
         <PageIntro
            eyebrow="Online Experiences"
            title="Building for the modern web"
            centered={true}
         >
            <p>
               We are{' '}
               <strong className="text-spursTurq">Viva Web Design</strong>, and
               our focus is creating online experiences that work for everyone.
               It's as simple as that! We assist organizations in setting clear
               goals and <strong>delivering them with confidence</strong>
            </p>
         </PageIntro>

         <ServiceSection />
         <AboutSection />
         <ContactSection />
      </>
   );
}
