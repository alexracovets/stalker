"use client";

import { useEffect } from "react";

import { ListIco, ArmorIco, MaskIco } from "@/components/svg";
import { CategoryType, RenderCategoryType } from "@/types";

export const PDAMenuRenderCategories = ({ activeCategories, setNavCategories }: RenderCategoryType) => {

    useEffect(() => {
        const categories: CategoryType[] = [
            {
                ico: ListIco,
                name: "list"
            }
        ];

        activeCategories.forEach((item) => {
            switch (item) {
                case "armors":
                    categories.push({ ico: ArmorIco, name: "armors" });
                    break;
                case "masks":
                    categories.push({ ico: MaskIco, name: "masks" });
                    break;
                case "combo_armors":
                    categories.push({ ico: ListIco, name: "combo_armors" });
                    break;
                default:
                    return;
            }
        });

        setNavCategories(categories);
    }, [activeCategories, setNavCategories]);

    return null;
};
