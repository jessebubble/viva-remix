import { PageIntro } from '~/components/PageIntro';
import { ShowcaseSection } from '~/components/CTAShowcase';
import { ContactSection } from '~/components/CTAContact';
import { ServiceSection } from '~/components/CTAService';

export default function Showcase() {
   return (
      <>
         <PageIntro eyebrow="Viva Web Design" title="SHOWCASE" centered={true}>
            <p>
               We appreciate the opportunity to showcase our work. Let's connect
               and discuss how we can help you with your next project
            </p>
         </PageIntro>

         <ShowcaseSection />
         <ServiceSection />
         <ContactSection />
      </>
   );
}
