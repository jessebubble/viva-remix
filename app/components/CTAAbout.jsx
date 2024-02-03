import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';

export function AboutSection() {
   return (
      <div className="mt-24 rounded-3xl bg-neutral-50 py-24 pt-24 sm:mt-32 sm:py-32 sm:pt-32 lg:mt-40 lg:py-40 lg:pt-40">
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
               <GridListItem title="Remove ambiguity" invert={false}>
                  The first step in establishing a partnership is to have our
                  designer incorporate your logo into our template.
               </GridListItem>
               <GridListItem title="360° view" invert={false}>
                  We take pride in our ability to always meet deadlines, which
                  is made easy by the fact that most of the work was completed
                  years ago
               </GridListItem>
               <GridListItem title="Grounded in data" invert={false}>
                  We prioritize transparency in all of our processes,
                  acknowledging the reality that our clients rarely read any
                  content.
               </GridListItem>
               <GridListItem
                  title="Consistent digital experience"
                  invert={false}
               >
                  Every business has unique needs, and our greatest challenge is
                  accommodating those needs within our existing framework
               </GridListItem>
               <GridListItem title="Strategy development" invert={false}>
                  We cultivate enduring relationships with our clients,
                  extending beyond product delivery, which enables us to serve
                  them for many years and invoice them accordingly
               </GridListItem>
               <GridListItem title="Solving common problems" invert={false}>
                  The technological landscape is constantly evolving, and we are
                  too. We are always searching for new open-source projects to
                  replicate
               </GridListItem>
            </GridList>
         </Container>
      </div>
   );
}
