"use client";

import Image from "next/image";

export const PDAFooterBorder = () => {

    return (
        <div className="absolute left-0 top-0 w-full h-full z-[-1]">
            <div className="relative w-full h-full">
                <div className="absolute left-0 bottom-0 w-full h-[.7rem]">
                    <div className="relative w-full h-full">
                        <Image src="/pda/border/bottom.jpg" fill alt="bottom" className="object-cover" />
                    </div>
                </div>
                <div className="absolute left-0 top-0 w-[.9rem] h-full">
                    <div className="relative w-full h-full">
                        <Image src="/pda/border/left_footer.jpg" fill alt="left" className="object-cover" />
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-[.9rem] h-full">
                    <div className="relative w-full h-full">
                        <Image src="/pda/border/right_footer.jpg" fill alt="right" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}