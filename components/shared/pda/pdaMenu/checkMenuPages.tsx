"use client";

import { useEffect, useState } from "react";

import { PDAMenuRenderCategories } from "@/components/shared/pda/pdaMenu";
import mainPages from "@/data/mainPages.json";
import { SetCategoryType } from "@/types";
import usePDA from '@/store/usePDA';

export const CheckMenuPages = ({ setNavCategories }: SetCategoryType) => {
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const mainSection = usePDA(state => state.mainSection);

    useEffect(() => {
        const currentPage = mainPages.find((page) => page.id === mainSection);

        if (currentPage) {
            setActiveCategories(currentPage.categories);
        }
    }, [mainSection])

    return (
        <PDAMenuRenderCategories activeCategories={activeCategories} setNavCategories={setNavCategories} />
    );
}