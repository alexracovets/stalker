"use client";

import Image from "next/image";

export const PDAFooterBorder = () => {

    return (
        <div className="absolute left-0 bottom-0 w-full h-[.7rem]">
            <div className="relative w-full h-full">
                <Image src="/pda/border/bottom.jpg" fill alt="bottom" className="object-cover" />
            </div>
        </div>
    )
}