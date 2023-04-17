import StoreGrid from "~/components/grid/StoreGrid"
import { getMerch } from "~/lib/merchQuery"
import { useLoaderData } from "@remix-run/react"

export const loader = async () => {
    const merchArray = await getMerch();
    return { merchArray };
}

export default function Store() {
    const { merchArray } = useLoaderData();

    return (
        <>
        <StoreGrid merchArray={merchArray} />
        </>
    )
}