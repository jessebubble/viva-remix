import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";
import { client } from "~/lib/sanity";

const builder = imageUrlBuilder(client);

export default function SinglePost({ collectionItem }: { collectionItem: SanityDocument }) {
    const { title, mainImage, body } = collectionItem;

    return (
        <main className="bg-white">
            <div className="lg:pl-72">
                <div className="mx-auto flex flex-col items-center justify-between gap-16 lg:flex-row lg:mx-0 lg:max-w-none">
                    <div className="w-full lg:max-w-lg lg:flex-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        {mainImage ? (
                            <img
                            className="mt-10 lg:mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover object-left-bottom lg:object-center lg:aspect-auto lg:h-[34.5rem] "
                            src={builder.image(mainImage).url()}
                            alt={title}
                            />

                        ) : null}
                    </div>
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <ul className="">
                            <dl className="relative flex flex-wrap gap-x-3 p-2 md:p-4">
                                <dd className="w-full flex-none text-lg md:text-xl lg:text-lg font-semibold tracking-tight text-gray-900">
                                    {title}
                                    <span className="absolute inset-0" aria-hidden="true" />
                                </dd>
                                <dd className="mt-2 w-full flex-none text-base md:text-lg lg:text-base leading-7 text-gray-500">
                                    {body ? <PortableText value={body} /> : null}
                                </dd>
                            </dl>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}