import { json, type ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import React, { useId, forwardRef } from 'react';
import { validate } from './validation';
import { createContact } from './queries';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

export async function action({ request }: ActionFunctionArgs) {
   const formData = await request.formData();
   const name = String(formData.get('name') || '');
   const email = String(formData.get('email') || '');
   const company = String(formData.get('company') || '');
   const phone = String(formData.get('phone') || '');
   const message = String(formData.get('message') || '');
   // const serviceId = Number(formData.get('serviceId'));

   const errors = await validate(
      name,
      email,
      company,
      phone,
      message
      // serviceId
   );

   if (errors) {
      return json({ ok: false, errors }, 400);
   }

   await createContact(
      name,
      email,
      company,
      phone,
      message
      // serviceId
   );

   return json({ ok: true, errors: null });
}

function ContactForm() {
   const actionResult = useActionData<typeof action>();

   return (
      <FadeIn>
         <Form method="post">
            <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
               Let's get started
            </h2>
            <p className="mt-4 max-w-xl text-base/6 text-neutral-600">
               Fill out the form below and we will schedule an appointment to
               discuss your project in more detail. We look forward to working
               with you!
            </p>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
               <LabeledInput
                  label="Name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  aria-describedby={
                     actionResult?.errors?.name ? 'name-error' : undefined
                  }
               />
               <LabeledInput
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-describedby={
                     actionResult?.errors?.email ? 'email-error' : undefined
                  }
               />
               <LabeledInput
                  label="Company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  required
                  aria-describedby={
                     actionResult?.errors?.company ? 'company-error' : undefined
                  }
               />
               <LabeledInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  aria-describedby={
                     actionResult?.errors?.phone ? 'phone-error' : undefined
                  }
               />
               <LabeledInput
                  label="Message"
                  type="text"
                  name="message"
                  autoComplete="off"
                  required
                  aria-describedby={
                     actionResult?.errors?.message ? 'message-error' : undefined
                  }
               />
            </div>
            <Button type="submit">
               {actionResult?.ok ? (
                  <span className="text-green-400">
                     Submitted successfully 🎉
                  </span>
               ) : (
                  'Submit'
               )}
            </Button>
         </Form>
      </FadeIn>
   );
}

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
               <div className="grid grid-cols-1 gap-x-8 gap-y-24">
                  <ContactForm />
               </div>
            </FadeIn>
         </Container>
      </>
   );
}

const imageArray = [
   {
      name: 'image1',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/saintadobe-heb_lfk6cc.png',
   },
   {
      name: 'image2',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/views_m2n19m.png',
   },
   {
      name: 'image3',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1707761502/eye_tb5sez.png',
   },
   {
      name: 'image4',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1707762797/abyss_qthhik.png',
   },
   {
      name: 'image5',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924008/saint-adobe_ibzq0m.png',
   },
];

export let Button = forwardRef<
   HTMLButtonElement,
   React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
   return (
      <button
         {...props}
         ref={ref}
         className="mt-10 inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
      />
   );
});

export let Input = forwardRef<
   HTMLInputElement,
   React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
   return (
      <input
         {...props}
         ref={ref}
         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
   );
});

export let Label = forwardRef<
   HTMLLabelElement,
   React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
   return (
      <label
         {...props}
         ref={ref}
         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      />
   );
});

export let LabeledInput = forwardRef<
   HTMLInputElement,
   React.InputHTMLAttributes<HTMLInputElement> & {
      label: React.ReactNode;
      id?: string;
   }
>(({ id, label, ...props }, ref) => {
   let uid = useId();
   id = id ?? uid;

   return (
      <>
         <div className="group relative z-0 transition-all focus-within:z-10">
            <Input {...props} ref={ref} id={id} placeholder=" " />
            <Label htmlFor={id}>{label}</Label>
         </div>
      </>
   );
});

/* export let RadioInput = forwardRef<
   HTMLInputElement,
   React.InputHTMLAttributes<HTMLInputElement> & {
      label: React.ReactNode;
      id?: string;
   }
>((props, ref) => {
   let uid = useId();
   let { label } = props;
   let id = props.id ?? uid;

   return (
      <label htmlFor={uid} className="flex gap-x-3">
         <input 
            {...props} 
            ref={ref} 
            id={id}
            type="radio"
            className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
         />
         <span className="text-base/6 text-neutral-950">
            {label}
         </span>
      </label>
   );
}); */
/*<div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
   <fieldset>
      <legend className="text-base/6 text-neutral-500">
         Service
      </legend>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
         <RadioInput
            label="Online Experiences"
            name="serviceId"
            value="1"
         />
         <RadioInput
            label="Non-Profit SPAs"
            name="serviceId"
            value="2"
         />
         <RadioInput
            label="Software Applications"
            name="serviceId"
            value="3"
         />
         <RadioInput
            label="Marketing Campains"
            name="serviceId"
            value="4"
         />
      </div>
   </fieldset>
</div> */
