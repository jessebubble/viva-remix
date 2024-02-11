import { PageIntro } from '~/components/PageIntro';
import { SoftwareSection } from '~/components/CTASoftware';
import { ContactSection } from '~/components/CTAContact';

export default function SoftwareApplications() {
   return (
      <>
         <PageIntro
            eyebrow="Web Applications"
            title="Everything you need to manage your business"
            centered={true}
         >
            <p>
               Our software applications are designed to help you manage your
               business more efficiently. From accounting and payroll to
               inventory and project management, we have the tools you need to
               keep your business running smoothly
            </p>
         </PageIntro>

         <SoftwareSection />
         <ContactSection />
      </>
   );
}
