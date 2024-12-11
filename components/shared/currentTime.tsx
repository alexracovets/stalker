"use client";

import Image from "next/image";

export const CurrentTime = () => {

    return (
        <>
            <div
                className="text-[1.6rem] text-pda-white font-roboto"
            >
                24:00
            </div>
            <div
                className="relative w-[1.6rem] h-[1.6rem]"
            >
                <Image src="/headerPDA/chargeBattery.svg" alt="internet" fill className="object-contain" />
            </div>
        </>

    )
}