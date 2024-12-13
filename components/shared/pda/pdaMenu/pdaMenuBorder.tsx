"use client";

import Image from "next/image"; 

export const PDAMenuBorder = () => {

    return (
        <div className="absolute right-0 top-0 h-full w-[.8rem] z-[-2]">
            <div className="relative w-full h-full">
                <Image src="/pda/border/vertical_center.jpg" fill alt="center" className="object-cover" />
            </div>
        </div>
    )
}