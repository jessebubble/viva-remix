import { json, type ActionFunctionArgs } from '@remix-run/node';
import { useActionData, Form } from '@remix-run/react';
import { validate } from './validation';
import { createContact } from './queries';
import { forwardRef, useId } from 'react';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export async function action({ request }: ActionFunctionArgs) {
   const formData = await request.formData();
   const name = String(formData.get('name') || '');
   const email = String(formData.get('email') || '');
   const company = String(formData.get('company') || '');
   const phone = String(formData.get('phone') || '');
   const message = String(formData.get('message') || '');

   const errors = await validate(name, email, company, phone, message);

   if (errors) {
      return json({ ok: false, errors }, 400);
   }

   await createContact(name, email, company, phone, message);

   return json({ ok: true, errors: null });
}

export default function Jobs() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <PageIntro
            eyebrow="View Open Positions"
            title="General Application"
            centered
         >
            <p>
               We are always looking for talented individuals to join our team.
               If you are passionate about creating modern user experiences and
               are looking for a challenging and rewarding career, we want to
               hear from you
            </p>
         </PageIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="relative">
                  <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                     <img
                        className="h-full w-full object-contain"
                        alt="In-person meetup"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1707197890/discover_wsdbtc.png"
                     />
                  </div>
                  <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                     <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <GAForm />
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}

function GAForm() {
   const actionResult = useActionData<typeof action>();

   return (
      <FadeIn>
         <Form method="post">
            <h2 className="md:text-center">
               <span className="font-display mb-6 block text-base font-semibold">
                  General Application
               </span>
               <span className="text-4xl font-medium sm:text-5xl">
                  Let's Connect
               </span>
            </h2>
            <p className="mt-2 text-neutral-500 md:text-center">
               Fill out the form below and we will reach out to you about
               potential meetup opportunities
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
