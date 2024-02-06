import type { MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { ExperienceSection } from '~/components/CTAExperience';
import { AboutSection } from '~/components/CTAAbout';
import { ContactSection } from '~/components/CTAContact';
import { CreativeSection } from '~/components/CTACreative';

export const meta: MetaFunction = () => {
   return [
      {
         title: "We are Viva Web Design, and our focus is creating online experiences that work for everyone. It's as simple as that!",
      },
      {
         name: 'Viva Web Design - Design and Web Development studio in San Antonio, Texas',
         content:
            "We are Viva Web Design, and our focus is creating online experiences that work for everyone. It's as simple as that! We assist organizations in setting clear goals and delivering them with confidence",
      },
   ];
};

export default function Index() {
   return (
      <>
         <PageIntro
            eyebrow="Viva Web Design"
            title="Design and Web development studio"
            centered={true}
         >
            <p className="text-balance">
               Our focus is creating online experiences that work for everyone.{' '}
               <strong>It's as simple as that!</strong> We assist organizations
               in setting clear goals and delivering them with confidence
            </p>
         </PageIntro>

         <ExperienceSection />
         <CreativeSection />
         <AboutSection />
         <ContactSection />
      </>
   );
}
