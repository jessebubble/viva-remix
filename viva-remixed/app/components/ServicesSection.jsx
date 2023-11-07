import { Container } from '~/components/Container'
import { BlockQuote } from '~/components/BlockQuote'
import { FadeIn } from '~/components/FadeIn'
import { GridList, GridListItem } from '~/components/GridList'
import { GridPattern } from '~/components/GridPattern'
import { List, ListItem } from '~/components/List'
import { PageIntro } from '~/components/PageIntro'
import { SectionIntro } from '~/components/SectionIntro'
import { StylizedImage } from '~/components/StylizedImage'
import { TagList, TagListItem } from '~/components/TagList'
import imageScarf from '~/components/images/scarf.png'
import imageDentist from '~/components/images/dentist.jpeg'
import imageDoor from '~/components/images/door.png'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageScarf }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to comprehend their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and goals.
          We immerse ourselves in their day-to-day operations to grasp the essence of their business
        </p>
        <p>
          Our team of private investigators shadow the company directors for
          several weeks, while our account managers focus on examinining their discarded materials.
          Subsequently, our senior security experts employ social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts, providing that information to our forensic accounting team.
        </p>
        <p>
          After completing a thorough audit, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          most importantly, a budget
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageDentist, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the discovery phase, we create a comprehensive roadmap for each product and begin working towards its delivery.
          The roadmap may appear complex and technical, but its purpose is to ensure a thorough project execution
        </p>
        <p>
          To facilitate effective communication, each client is assigned a key account manager who acts as a liaison between the client and the development team.
          This helps manage client expectations and allows the development team to focus on their work, which includes exploring open source projects for reusable code
        </p>
        <p>
          Our account managers are trained to respond to client emails several days after the initial email, typically after 9pm.
          This deliberate delay creates the perception of a busy schedule and discourages clients from making frequent change requests
        </p>
      </div>

      <BlockQuote
        author={{ name: 'Elton John', role: 'CEO of Rocketman' }}
        className="mt-12"
      >
        Viva Web Design were so regular with their progress updates we almost began to
        think they were automated!
      </BlockQuote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageDoor, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we extend the timeline for each project by 6
          weeks due to a change in{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to make a final budget increase before launch
        </p>
        <p>
          Despite heavily relying on pre-built components, the majority of{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          on each project occurs in the final 24 hours. The development
          time allocated to each client is actually spent creating augmented
          reality demos that become viral on Twitter
        </p>
        <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          upon launch. However, the auxiliary pages will initially consist of placeholder text (lorem ipusm),
          which will be updated as part of our thorough{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          retainer
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive if our tests weren't so full of holes
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability, we only use the best Digital Ocean droplets that $4 a month can buy
        </ListItem>
        <ListItem title="Support">
          Since we possess the API keys for all the essential services your business utilizes, you can rely on us for ongoing support and invoicing throughout your entire business journey
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="We sell online experiences"
        title="No idea starts perfect"
      >
        <p>
          We will assist in breaking down your ideas and refining them through prototypes, research, and thorough planning. 
          Our approach is to start from the simplest and most solid foundations
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Remove ambiguity">
            The first step in establishing a partnership is to have our designer incorporate your logo into our template. 
          </GridListItem>
          <GridListItem title="360° view">
            We take pride in our ability to always meet deadlines, which is made easy by the fact that most of the work was completed years ago
          </GridListItem>
          <GridListItem title="Grounded in data">
            We prioritize transparency in all of our processes, acknowledging the reality that our clients rarely read any content.
          </GridListItem>
          <GridListItem title="Consistent digital experience">
            Every business has unique needs, and our greatest challenge is accommodating those needs within our existing framework
          </GridListItem>
          <GridListItem title="Strategy development">
            We cultivate enduring relationships with our clients, extending beyond product delivery, which enables us to serve them for many years and invoice them accordingly
          </GridListItem>
          <GridListItem title="Solving common problems">
            The technological landscape is constantly evolving, and we are too. We are always searching for new open-source projects to replicate
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <>
      <PageIntro eyebrow="What's our secret?" title="We only build what we need to">
        <p>
          At Viva Web Design, we take the time to understand the business goals and user needs before finding creative solutions to address them.
          Our creative process: <strong className="font-semibold text-neutral-950">Discover</strong>, <strong className="font-semibold text-neutral-950">Build</strong>, <strong className="font-semibold text-neutral-950">Deliver</strong> 
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

    </>
  )
}