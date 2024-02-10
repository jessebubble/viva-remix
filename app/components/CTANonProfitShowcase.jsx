import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { SectionIntro } from '~/components/SectionIntro';

export function NonProfitShowcase() {
   return (
      <>
         <article className="mt-24 sm:mt-32 sm:pt-32 lg:mt-40">
            <header>
               <SectionIntro
                  eyebrow="Non-Profit Spotlight"
                  title="Skip the bank, borrow from those you trust"
               >
                  <p>
                     FamilyFund is a crowdfunding platform for friends and
                     family. Allowing users to take personal loans from their
                     network without a traditional financial institution
                  </p>
               </SectionIntro>

               <FadeIn>
                  <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                     <Container>
                        <div className="mx-auto max-w-5xl">
                           <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Client</dt>
                                 <dd>FamilyFund</dd>
                              </div>
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Year</dt>
                                 <dd>
                                    <time>{new Date().getFullYear()}</time>
                                 </dd>
                              </div>
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Service</dt>
                                 <dd>Single Page Application</dd>
                              </div>
                           </dl>
                        </div>
                     </Container>
                  </div>

                  <div className="border-y border-neutral-200 bg-neutral-100">
                     <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                        <GrayscaleTransitionImage
                           src="https://res.cloudinary.com/jessebubble/image/upload/v1707537773/hero_1_az5hit.jpg"
                           quality={90}
                           className="w-full"
                           sizes="(min-width: 1216px) 76rem, 100vw"
                        />
                     </div>
                  </div>
               </FadeIn>
            </header>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
               <FadeIn>
                  <div className="mx-auto max-w-3xl">
                     <h1 className="text-3xl font-bold text-neutral-950 sm:text-4xl lg:text-center lg:text-5xl">
                        Overview
                     </h1>
                     <p className="mt-6 text-lg text-neutral-900 lg:mt-8 lg:text-xl">
                        Having written one of the most shared posts on
                        medium.com (“How to cash out your Dad’s 401K without him
                        knowing”) FamilyFund approached us looking to build out
                        their own blog.
                        <span className="mt-6 block">
                           The blog would help drive new traffic to their site
                           and serve as a resource-hub for users already trying
                           to exploit their network for money. Because it was so
                           important that they own their own content, we decided
                           that an on-prem solution would be best.
                        </span>
                        <span className="mt-6 block">
                           We installed 24 Mac Minis bought from craigslist in
                           the storage cupboard of their office. One machine
                           would be used for the web server and another one for
                           the build server. The other 22 were for redundancy,
                           and to DDOS squarespace.com every few months to keep
                           them on their toes.
                        </span>
                        <span className="mt-6 block">
                           To optimise their search traffic we used an
                           innovative technique. Every post has a shadow post
                           only visible to web crawlers that is some variation
                           of “Gary Vee is looking to invest in new founders”.
                           Like bees to honey.
                        </span>
                     </p>
                  </div>
               </FadeIn>
            </Container>
         </article>
      </>
   );
}
