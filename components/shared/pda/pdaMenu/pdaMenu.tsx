"use client";

import { PDAMenuBorder, PDAMenuNavigation } from "@/components/shared/pda/pdaMenu";

export const PDAMenu = () => {

    return (
        <aside className="relative w-[52.5rem] max-w-[52.5rem] h-auto flex-grow">
            <PDAMenuBorder />
            <PDAMenuNavigation />
        </aside>
    )
}