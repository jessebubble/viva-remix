import { PageIntro } from '~/components/PageIntro';
import { NonProfitSection } from '~/components/CTANonProfit';

export default function NonProfit() {
   return (
      <>
         <PageIntro
            eyebrow="Non-Profit Organizations"
            title="Single Page Applications"
            centered={true}
         >
            <p>
               We have helped clients of all sizes produce stunning single page
               applications, and we are confident that we can help you produce
               stunning SPAs as well
            </p>
         </PageIntro>

         <NonProfitSection />
      </>
   );
}
