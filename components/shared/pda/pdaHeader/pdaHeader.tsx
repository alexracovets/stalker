"use client";

import { HeaderNavigation, TopSide } from "@/components/shared/pda/pdaHeader";

export const PDAHeader = () => {

    return (
        <header className="mb-[.3rem]">
            <TopSide />
            <HeaderNavigation />
        </header>
    )
}