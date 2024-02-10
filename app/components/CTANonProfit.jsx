import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';
import { GrayscaleTransitionImage } from './GrayscaleTransitionImage';
import { GridPattern } from './GridPattern';
import { FadeIn } from './FadeIn';

export function NonProfitSection() {
   return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
         <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-3xl bg-gradient-to-b from-neutral-50">
            <GridPattern
               className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
               yOffset={-270}
            />
         </div>
         <SectionIntro
            eyebrow="Non-Profit Organizations"
            title="The problem you are solving deserves more than a template"
            invert={false}
         >
            <p>
               Creating a website today is easier than ever. However, standing
               out can be a challenge due to the abundance of free templates
               that make all those websites look the same. Your organization
               deserves a website as unique as the problem it's addressing
            </p>
         </SectionIntro>
         <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
               <Container>
                  <div className="mx-auto max-w-5xl">
                     <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                           <dt className="font-semibold">Client</dt>
                           <dd>Phobia</dd>
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
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1707537773/hero_mztbcy.jpg"
                     alt="App screenshot"
                     quality={90}
                     className="w-full"
                     sizes="(min-width: 1216px) 76rem, 100vw"
                  />
               </div>
            </div>
         </FadeIn>

         <Container className="">
            <GridList className="mt-24">
               <GridListItem title="Dynamic Data" invert={false}>
                  An application that can handle dynamic data providesa more
                  personalized, real-time experience to the user. Leading to
                  more interactive and engaging applications that can adapt to
                  the user's needs
               </GridListItem>
               <GridListItem title="User Experience" invert={false}>
                  A good user experience leads to higher user satisfaction. It
                  makes the experience intuitive and easy to use, reduces user
                  errors, and makes the overall interaction with your website
                  enjoyable, which leads to higher user retention and conversion
                  rates
               </GridListItem>
               <GridListItem title="Performance" invert={false}>
                  A high-performing online experience provides a smooth,
                  lag-free experience to the user. Leading to higher user
                  engagement, lower bounce rates, and better user retention.
                  Google also considers page speed as a ranking factor, so a
                  faster website leads to better SEO
               </GridListItem>
               <GridListItem title="Integration" invert={false}>
                  A website that easily integrates with other systems can extend
                  its functionality and make it more versatile. Leading to
                  better interoperability making your website part of larger
                  ecosystems
               </GridListItem>
               <GridListItem title="Web Standards" invert={false}>
                  Adhering to web standards makes your application more
                  accessible, interoperable, and maintainable. Leading to better
                  cross-browser compatibility, easier debugging, making code
                  easier to understand for other developers
               </GridListItem>
               <GridListItem title="Scalability" invert={false}>
                  Building a scalable application means that as your user base
                  grows, your application can handle the increased load,
                  providing a consistent experience. Leading to cost savings in
                  the long run as you can efficiently use resources and
                  accommodate growth without a complete redesign
               </GridListItem>
            </GridList>
         </Container>
      </div>
   );
}
