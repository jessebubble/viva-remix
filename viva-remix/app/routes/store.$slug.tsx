import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/lib/sanity";
import SingleSlug from "~/components/slug/SingleSlug";

export const loader = async ({params}: LoaderArgs) => {
  const community = `*[_type == "community" && slug.current == $slug][0]`;
  const twitchin = `*[_type == "twitchin" && slug.current == $slug][0]`;
  const developer = `*[_type == "developer" && slug.current == $slug][0]`;
  const query = `${community} || ${twitchin} || ${developer}`;
  const collectionItem = await client.fetch(query, params);

  return { collectionItem };
};

export default function SlugRoute() {
  const { collectionItem } = useLoaderData();

  return <SingleSlug collectionItem={collectionItem} />;
}