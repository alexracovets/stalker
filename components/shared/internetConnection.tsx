"use client";

import Image from "next/image";

export const InternetConnection = () => {

    return (
        <>
            <div
                className="relative w-[1.4rem] h-[1.4rem]"
            >
                <Image src="/headerPDA/internetConnection.svg" alt="internet" fill className="object-cover" />
            </div>
            <span
                className="text-[1.6rem] text-pda-white font-roboto"
            >
                Аномальна Зона
            </span>
        </>

    )
}