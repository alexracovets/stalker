"use client";

import { HeaderNavigationBg, HeaderNavigationLinks } from "@/components/shared/pda/pdaHeader";
import { Button } from "@/components/ui";

export const HeaderNavigation = () => {

    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem]"
        >
            <HeaderNavigationBg />
            <Button variant="destructive">Q</Button>
            <HeaderNavigationLinks />
            <Button variant="destructive">E</Button>
        </div>

    )
}