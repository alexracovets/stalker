"use client";

import { useState } from "react";

import { PDAMenuIco, CheckMenuPages } from "@/components/shared/pda/pdaMenu";
import { Button } from "@/components/ui";
import { CategoryType } from "@/types";

export const PDAMenuNavigation = () => {
    const [navCategories, setNavCategories] = useState<CategoryType[]>([]);

    return (
        <div className="flex justify-center items-center w-full pt-[2.5rem] pb-[1.4rem] gap-x-[1.8rem]">
            <CheckMenuPages setNavCategories={setNavCategories} />
            <Button variant="destructive">A</Button>
            <ul className="flex justify-start items-center gap-x-[1.2rem] w-full max-w-[37.6rem]">
                {navCategories.map((item, idx) => (
                    <PDAMenuIco
                        key={idx}
                        Icon={item.ico}
                    />
                ))}
            </ul>
            <Button variant="destructive">D</Button>
        </div>
    )
}