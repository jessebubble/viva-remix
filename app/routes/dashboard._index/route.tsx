import { redirect, type LoaderFunctionArgs } from '@remix-run/node';
import {
   Link,
   useLoaderData,
   type ShouldRevalidateFunctionArgs,
} from '@remix-run/react';
import { getAuthFromRequest } from '~/auth/auth';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';

export async function loader({ request }: LoaderFunctionArgs) {
   const auth = await getAuthFromRequest(request);
   if (auth && new URL(request.url).pathname === '/dashboard') {
      return redirect('/dashboard/submissions');
   }
   return auth;
}

export function shouldRevalidate({ formAction }: ShouldRevalidateFunctionArgs) {
   return formAction && ['/login', '/signup', 'logout'].includes(formAction);
}

export default function Index() {
   return (
      <PageIntro
         eyebrow="Employee Portal"
         title="Where is my data?"
         centered={true}
      >
         <Link
            to="/login"
            className="inline-flex px-4 py-1.5 text-sm font-semibold text-neutral-950"
         >
            Log in required &rarr;
         </Link>
      </PageIntro>
   );
}

export function LogButton() {
   const userId = useLoaderData<typeof loader>();

   return (
      <Container className="">
         <FadeIn>
            {userId ? (
               <div className="mx-auto mb-6 flex max-w-7xl justify-end">
                  <form method="post" action="/logout">
                     <button className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                        Log out
                     </button>
                  </form>
               </div>
            ) : (
               <Link
                  to="/login"
                  className="mt-10 inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
               >
                  Log in
               </Link>
            )}
         </FadeIn>
      </Container>
   );
}
