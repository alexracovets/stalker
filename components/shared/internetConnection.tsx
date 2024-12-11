import Image from "next/image"

export const InternetConnection = () => {

    return (
        <div
            className="relative w-[1.4rem] h-[1.4rem]"
        >
            <Image src="/headerPDA/InternetConnection.svg" alt="internet" fill className="object-cover" />
        </div>
    )
}