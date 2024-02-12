import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';

function ContactEspanol() {
   return (
      <>
         <Container className="mt-24 sm:mt-32">
            <FadeIn>
               <div className="relative rounded-3xl bg-transparent">
                  <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                     <img
                        className="h-full w-full object-contain"
                        alt="devSA github logo"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1706924165/devSA/viva_gb6qgs.png"
                     />
                  </div>
                  <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                     <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-spursPink">
                           Comienza con una idea...
                        </h2>
                        <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                           Conectémonos y veamos qué podemos hacer por usted.
                        </p>
                        <p className="mt-6 text-base leading-7 text-neutral-800">
                           Hemos ayudado a clientes de todos los tamaños a crear
                           sitios web impresionantes y estamos seguros de que
                           también podemos ayudarle a usted a producir sitios
                           web impresionantes
                        </p>
                        <div className="mt-8">
                           <Link
                              to="/contact"
                              className="inline-flex rounded-md bg-spursPink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-spursPink/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                           >
                              Empecemos &rarr;
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </>
   );
}

export default function Espanol() {
   return (
      <>
         <PageIntro
            eyebrow="Diseño Web Vivo"
            title="Estudio de diseño y desarrollo web"
            centered
         >
            <p>
               Nuestro objetivo es crear experiencias en línea que funcionen
               para todos. <strong>¡Es tan simple como eso!</strong> Ayudamos a
               las organizaciones a establecer objetivos claros y cumplirlos con
               confianza
            </p>
         </PageIntro>
         <Container className="mt-16">
            <FadeIn>
               <ContactEspanol />
            </FadeIn>
         </Container>
      </>
   );
}
