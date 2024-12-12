"use client";

import Image from "next/image";

export const HeaderPlug = () => {

    return (
        <div className="relative w-[164.7rem] h-[4.1rem]">
            <Image src="/headerPDA/top_header.png" fill priority alt="header top" className="object-cover" />
        </div>
    )
}