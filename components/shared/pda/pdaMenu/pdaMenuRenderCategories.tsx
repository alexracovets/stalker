"use client";

import { useEffect } from "react";

import { ListIco, ArmorIco, MaskIco, ComboArmorIco, PistolIco, AutomaticIco, ShotgunIco, RPGsIco, GrenadeIco, AmmoIco } from "@/components/svg";
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
                    categories.push({ ico: ComboArmorIco, name: "combo_armors" });
                    break;
                case "pistols":
                    categories.push({ ico: PistolIco, name: "pistols" });
                    break;
                case "automatics":
                    categories.push({ ico: AutomaticIco, name: "automatics" });
                    break;
                case "shotguns":
                    categories.push({ ico: ShotgunIco, name: "shotguns" });
                    break;
                case "rpgs":
                    categories.push({ ico: RPGsIco, name: "rpgs" });
                    break;
                case "grenades":
                    categories.push({ ico: GrenadeIco, name: "grenades" });
                    break;
                case "ammo":
                    categories.push({ ico: AmmoIco, name: "ammo" });
                    break;

                default:
                    return null;
            }
        });

        setNavCategories(categories);
    }, [activeCategories, setNavCategories]);

    return null;
};
