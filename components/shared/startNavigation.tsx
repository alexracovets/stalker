"use client";

import { StartLinks } from "@/components/shared";

export const StartNavigation = () => {

    return (
        <aside
            className="relative w-[51.9rem] min-w-[51.9rem] h-[100dvh] bg-primary-black pt-[20rem] pl-[8.5rem] pr-[4.2rem]"
        >
            <h1
                className="flex flex-col w-full"
            >
                <span
                    className="uppercase text-[13rem] text-center text-primary-white font-stalker tracking-[-.15rem]"
                >
                    S.t.A.L.K.E.R. 2
                </span>
                <span
                    className="text-[2.2rem] text-center text-primary-gray font-calibri leading-[1.221] tracking-[1.4rem] mb-[1.6rem]"
                >
                    СЕРЦЕ ЧОРНОБИЛЯ
                </span>
            </h1>
            <div
                className="uppercase text-[2.8rem] text-center text-primary-dark_gray font-roboto_condensed font-[600] leading-[1.1717] mb-[4.8rem]"
            >
                Інформація
            </div>
            <StartLinks />
        </aside>
    )
}