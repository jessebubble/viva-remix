import { Form } from '@remix-run/react';
import { useId } from 'react';
import { Border } from '~/components/Border';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';
import { SocialMedia } from '~/components/SocialMedia';
import { Button } from '~/components/Button';

export default function Index() {
   let rotations = [
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      'rotate-2',
      '-rotate-2',
   ];
   return (
      <>
         <PageIntro
            eyebrow="Let's build together"
            title="It starts with an idea..."
            centered={true}
         >
            <p>
               We have helped clients of all sizes produce stunning websites,
               and we are confident that we can help you produce stunning
               websites as well.
            </p>
         </PageIntro>

         <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
               <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                  {imageArray.map((image, index) => (
                     <div
                        key={index}
                        className="relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <img
                           src={image.href}
                           alt="midjourney collection"
                           className={`relative h-full w-full rounded-xl bg-neutral-950/5 object-cover shadow-lg ${rotations[index]}`}
                        />
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn className="mt-24 sm:mt-32 lg:mt-40">
               <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                  <ContactDetails />
                  <ContactForm />
               </div>
            </FadeIn>
         </Container>
      </>
   );
}

function ContactForm() {
   return (
      <FadeIn className="lg:order-last">
         <Form method="post">
            <h2 className="font-display text-base font-semibold text-neutral-950">
               Project inquiries
            </h2>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
               <TextInput label="Name" name="name" autoComplete="name" />
               <TextInput
                  label="Email"
                  type="email"
                  name="email"
                  id="email-address"
                  autoComplete="email"
                  required
               />
               <TextInput
                  label="Company"
                  name="company"
                  autoComplete="organization"
               />
               <TextInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
               />
               <TextInput label="Message" name="message" />
               <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                  <fieldset>
                     <legend className="text-base/6 text-neutral-500">
                        Service
                     </legend>
                     <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <RadioInput
                           label="Online Experience"
                           name="name"
                           value="Online Experience"
                        />
                        <RadioInput
                           label="Software Application"
                           name="name"
                           value="Software Application"
                        />
                        <RadioInput
                           label="Non-Profit SPA"
                           name="name"
                           value="Non-Profit SPA"
                        />
                        <RadioInput
                           label="Marketing Campaign"
                           name="name"
                           value="Marketing Campaign"
                        />
                     </div>
                  </fieldset>
               </div>
            </div>
            <Button type="submit" className="mt-10" invert={false} href>
               Let's start building!
            </Button>
         </Form>
      </FadeIn>
   );
}

function ContactDetails() {
   return (
      <FadeIn>
         <h2 className="font-display text-base font-semibold text-neutral-950">
            Online Experiences
         </h2>
         <p className="mt-6 text-base text-neutral-600">
            We have helped clients of all sizes produce stunning websites, and
            we are confident that we can help you produce stunning websites as
            well
         </p>
         <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
               Non-Profit SPAs
            </h2>
            <p className="mt-6 text-base text-neutral-600">
               What's our secret? We keep it simple, focus on the essentials and
               build only what we need to
            </p>
         </Border>
         <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
               Software Applications
            </h2>
            <p className="mt-6 text-base text-neutral-600">
               Who said business software has to be boring? From authentication,
               data management, billing, and scalability, we've got you covered
            </p>
         </Border>

         <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
               Follow us
            </h2>
            <SocialMedia className="mt-6" />
         </Border>
      </FadeIn>
   );
}

const imageArray = [
   {
      name: 'image1',
      href: 'https://a-us.storyblok.com/f/1014518/1024x1024/0809148c2c/blended-array-1.png',
   },
   {
      name: 'image2',
      href: 'https://a-us.storyblok.com/f/1014518/896x1344/7863ec52e4/blended-array-2.png',
   },
   {
      name: 'image3',
      href: 'https://a-us.storyblok.com/f/1014518/1024x1024/56606e6303/blended-array-3.png',
   },
   {
      name: 'image4',
      href: 'https://a-us.storyblok.com/f/1014518/896x1344/1b43a440fb/blended-array-4.png',
   },
   {
      name: 'image5',
      href: 'https://a-us.storyblok.com/f/1014518/1344x896/3f23f7a233/blended-array-5.png',
   },
];

/* export let Button = forwardRef<
   HTMLButtonElement,
   React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
   return <button {...props} ref={ref} />;
}); */

function TextInput({ label, ...props }) {
   let id = useId();

   return (
      <div className="group relative z-0 transition-all focus-within:z-10">
         <input
            type="text"
            id={id}
            {...props}
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
         />
         <label
            htmlFor={id}
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
         >
            {label}
         </label>
      </div>
   );
}

function RadioInput({ label, ...props }) {
   return (
      <label className="flex gap-x-3">
         <input
            type="radio"
            {...props}
            className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
         />
         <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
   );
}
