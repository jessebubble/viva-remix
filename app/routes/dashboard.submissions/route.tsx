import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getFormSubmissions } from "./queries"
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { LogButton } from "../dashboard._index/route";
import { PageIntro } from '~/components/PageIntro';

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const submissions = await getFormSubmissions()

    return json({ submissions })
}

export default function Index() {
    const data = useLoaderData<typeof loader>()

    return (
        <>
        <PageIntro
            eyebrow="VIVA Web Design"
            title="Contact Form Submissions"
            centered={false}
        >
            <p>
                Here are the latest project inquiries from the website.                   
            </p>                
        </PageIntro>    

        <Container className="mt-16">
            <FadeIn>
                <LogButton />
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {data.submissions.map((submission) => (
                    <div key={submission.id} className="overflow-hidden bg-neutral-100 shadow sm:rounded-3xl max-w-xl">
                        <div className="px-4 py-6 sm:px-6">
                            <h3 className="text-base font-semibold leading-7 text-neutral-950">Project Inquiries</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">{submission.id}</p>
                        </div>
                        <div className="border-t border-neutral-300"> 
                            <dl className="divide-y divide-neutral-300">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-neutral-950">Full name</dt>
                                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0">{submission.name}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-neutral-950">Email</dt>
                                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0">{submission.email}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-neutral-950">Company</dt>
                                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0">{submission.company}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-neutral-950">Phone</dt>
                                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0">{submission.phone}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-neutral-950">Message</dt>
                                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0">
                                    <p>{submission.message}</p>
                                </dd>
                            </div>
                            </dl>
                        </div>
                    </div>
                ))}
                </div>
            </FadeIn>
        </Container>
        </>
    )
}
