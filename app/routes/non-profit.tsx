import { PageIntro } from '~/components/PageIntro';
import { NonProfitSection } from '~/components/CTANonProfit';
import { NonProfitShowcase } from '~/components/CTANonProfitShowcase';
import { ContactSection } from '~/components/CTAContact';

export default function NonProfit() {
   return (
      <>
         <PageIntro
            eyebrow="Non-Profit Websites"
            title="Our modern solution for non-profit organizations"
            centered={true}
         >
            <p>
               While you can choose a free template from build-it-yourself
               platforms, the problem your{' '}
               <strong>501(c)(3) organization</strong> is solving deserves more
               than that - it deserves our modern solution
            </p>
         </PageIntro>

         <NonProfitSection />
         <NonProfitShowcase />
         <ContactSection />
      </>
   );
}
