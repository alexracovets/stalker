"use client";

import Image from "next/image";

export const HeaderInternet = () => {

    return (
        <div className="w-[17.4rem] flex justify-center items-center gap-x-[.8rem]">
            <div className="relative w-[1.4rem] h-[1.4rem]">
                <Image src="/headerPDA/internetConnection.svg" alt="internet" fill className="object-cover" />
            </div>
            <span className="text-[1.6rem] text-pda-white font-roboto">
                Аномальна Зона
            </span>
        </div>
    )
}