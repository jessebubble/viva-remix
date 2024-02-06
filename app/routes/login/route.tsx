import { json, redirect, type ActionFunctionArgs } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { forwardRef, useId } from 'react';
import { redirectIfLoggedInLoader, setAuthOnResponse } from '~/auth/auth';
import { validate } from './validate';
import { login } from './queries';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

export const loader = redirectIfLoggedInLoader;

export const meta = () => {
   return [{ title: 'Viva Web Design Employee Portal' }];
};

export async function action({ request }: ActionFunctionArgs) {
   let formData = await request.formData();
   let email = String(formData.get('email') || '');
   let password = String(formData.get('password') || '');

   let errors = validate(email, password);
   if (errors) {
      return json({ ok: false, errors }, 400);
   }

   let userId = await login(email, password);
   if (userId === false) {
      return json(
         { ok: false, errors: { password: 'Invalid credentials' } },
         400
      );
   }

   let response = redirect('/dashboard/submissions');
   return setAuthOnResponse(response, userId);
}

function LogInForm() {
   const actionResult = useActionData<typeof action>();

   return (
      <FadeIn>
         <h2 className="md:text-center">
            <span className="font-display mb-6 block text-base font-semibold">
               VIVA Web Design
            </span>
            <span className="text-4xl font-medium sm:text-5xl">
               Employee Portal
            </span>
         </h2>
         <p className="mt-2 text-neutral-500 md:text-center">
            <strong>Log in</strong> to view your employee dashboard
         </p>
         <Form method="post">
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
               <LabeledInput
                  label="Email"
                  autoFocus
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-describedby={
                     actionResult?.errors?.email
                        ? 'email-error'
                        : 'login-header'
                  }
               />
               <LabeledInput
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-describedby="password-error"
                  required
               />
            </div>
            <Button type="submit">Sign in</Button>
            <p className="mt-6 text-sm text-neutral-500">
               Forgot your password?{' '}
               <Link to="/forgot-password">
                  <strong>Reset password&rarr;</strong>
               </Link>
            </p>
            <p className="mt-2 text-sm text-neutral-500">
               Not an employee?{' '}
               <Link
                  to="/jobs"
                  className="font-semibold leading-6 text-spursPink hover:text-spursTurq"
               >
                  View open positions &rarr;
               </Link>
            </p>
         </Form>
      </FadeIn>
   );
}

export default function Login() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <PageIntro
            eyebrow="VIVA Web Design"
            title="Authenticate to view your data"
            centered={true}
         >
            <p>
               Not an employee?{' '}
               <Link
                  to="/jobs"
                  className="font-semibold leading-6 text-spursPink hover:text-spursTurq"
               >
                  View open positions &rarr;
               </Link>
            </p>
         </PageIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="relative">
                  <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                     <img
                        className="h-full w-full object-contain"
                        alt="Illustration of a team working together on a project"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1707188268/dogrock_sgotus.png"
                     />
                  </div>
                  <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                     <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <LogInForm />
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </div>
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
