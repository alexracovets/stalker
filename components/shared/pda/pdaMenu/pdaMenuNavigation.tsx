"use client";

import { useState } from "react";

import { CheckMenuPages, PDAMenuCategories } from "@/components/shared/pda/pdaMenu";
import { CategoryType } from "@/types";

export const PDAMenuNavigation = () => {
    const [navCategories, setNavCategories] = useState<CategoryType[]>([]);

    return (
        <div className="flex justify-center items-center w-full pt-[2.5rem] pb-[1.4rem] gap-x-[1.8rem]">
            <CheckMenuPages setNavCategories={setNavCategories} />
            <PDAMenuCategories navCategories={navCategories} />
        </div>
    )
}