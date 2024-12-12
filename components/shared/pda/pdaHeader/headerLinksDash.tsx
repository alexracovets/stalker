"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ItemType {
    left: string,
    width: string
}

interface HeaderLinksDashType {
    styles: {
        underline: {
            left: string,
            width: string
        },
        shortline: {
            left: string,
            width: string
        }
    }
}

const Line = ({ style, imgSrc, imgClass }: { style: ItemType, imgSrc: string, imgClass: string }) => (
    <div className="absolute bottom-0 transition-all ease-out duration-300" style={style}>
        <div className="relative w-full h-full flex justify-center items-end">
            <div className={imgClass}>
                <Image src={imgSrc} fill alt="dot" className="object-cover" />
            </div>
        </div>
    </div>
);

export const HeaderLinksDash = ({ styles }: HeaderLinksDashType) => {

    return (
        <div className="relative">
            <div
                className={cn(
                    "absolute bottom-[0] h-[1px] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-center"
                )}
                style={styles.underline}
            >
                <div className="relative w-full h-full flex justify-center items-end">
                    <div className="relative w-[8.5rem] h-[2.5rem]">
                        <Image src="/headerPDA/line_dot.png" fill alt="dot" className="object-cover" />
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[1px] h-[3px] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-center"
                style={styles.shortline}
            >
                <div className="relative w-full h-full flex justify-center items-end">
                    <div className="relative w-[4.4rem] h-[1.7rem] blur-[10px]">
                        <Image src="/headerPDA/line_dot_small.png" fill alt="dot" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}