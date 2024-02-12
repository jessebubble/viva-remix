import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';

export function AboutSection() {
   return (
      <div className="mt-24 pt-24 sm:mt-32 sm:pt-32">
         <SectionIntro
            eyebrow="It's that simple"
            title="Inclusive, performant, user-friendly online experiences"
            invert={false}
         >
            <p>
               We will assist in breaking down your ideas and refining them
               through prototypes, research, and thorough planning. Our approach
               is to start from the simplest and most solid foundations
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <GridList className="">
               <GridListItem title="Dynamic Data" invert={false}>
                  Applications that handle dynamic data provide more
                  personalized, real-time experiences to the user. This leads to
                  higher user engagement and better user retention
               </GridListItem>
               <GridListItem title="User Experience" invert={false}>
                  Making the experience intuitive and easy to use, reduces user
                  errors, and makes the overall interaction with your website
                  enjoyable and efficient for the user
               </GridListItem>
               <GridListItem title="Performance" invert={false}>
                  Smooth lag-free experiences lead to higher user engagement,
                  lower bounce rates, and better user retention. Google also
                  considers page speed as a ranking factor, so a faster website
                  leads to better SEO
               </GridListItem>
               <GridListItem title="Integration" invert={false}>
                  A website that easily integrates with other systems can extend
                  its functionality and make it more versatile. Leading to a
                  more powerful and feature-rich application that can adapt to
                  your needs
               </GridListItem>
               <GridListItem title="Web Standards" invert={false}>
                  Adhering to web standards makes your application more
                  accessible, more secure, and easier to maintain. Leading to
                  better SEO, better performance, and a more inclusive
                  experience
               </GridListItem>
               <GridListItem title="Scalability" invert={false}>
                  Scalable application means that as your user base grows, your
                  application can handle the increased load, providing a
                  consistent experience to all users regardless of the number of
                  users using the application at the same time
               </GridListItem>
            </GridList>
         </Container>
      </div>
   );
}
