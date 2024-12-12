"use client";

import Image from "next/image";

export const HeaderTime = () => {

    return (
        <div className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem]">
            <div className="text-[1.6rem] text-pda-white font-roboto">
                24:00
            </div>
            <div className="relative w-[1.6rem] h-[1.6rem]">
                <Image src="/headerPDA/chargeBattery.svg" alt="internet" fill className="object-contain" />
            </div>
        </div>
    )
}