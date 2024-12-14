"use client";

import { useEffect } from "react";

import { ListIco, ArmorIco, MaskIco, ComboArmorIco, PistolIco, AutomaticIco, ShotgunIco, RPGsIco, GrenadeIco, AmmoIco } from "@/components/svg";
import { CategoryType, RenderCategoryType } from "@/types";

export const PDAMenuRenderCategories = ({ activeCategories, setNavCategories }: RenderCategoryType) => {

    useEffect(() => {
        const categories: CategoryType[] = [
            {
                ico: ListIco,
                name: "list",
                route: false
            }
        ];

        activeCategories.forEach((item) => {
            switch (item) {
                case "armors":
                    categories.push({
                        ico: ArmorIco,
                        name: "armors",
                        route: "/pda/protects/armors"
                    });
                    break;
                case "masks":
                    categories.push({
                        ico: MaskIco,
                        name: "masks",
                        route: "/pda/protects/masks"
                    });
                    break;
                case "combo_armors":
                    categories.push({
                        ico: ComboArmorIco,
                        name: "combo_armors",
                        route: "/pda/protects/combo_armors"
                    });
                    break;
                case "pistols":
                    categories.push({
                        ico: PistolIco,
                        name: "pistols",
                        route: "/pda/weapons/pistols"
                    });
                    break;
                case "automatics":
                    categories.push({
                        ico: AutomaticIco,
                        name: "automatics",
                        route: "/pda/weapons/automatics"
                    });
                    break;
                case "shotguns":
                    categories.push({
                        ico: ShotgunIco,
                        name: "shotguns",
                        route: "/pda/weapons/shotguns"
                    });
                    break;
                case "rpgs":
                    categories.push({
                        ico: RPGsIco,
                        name: "rpgs",
                        route: "/pda/weapons/rpgs"
                    });
                    break;
                case "grenades":
                    categories.push({
                        ico: GrenadeIco,
                        name: "grenades",
                        route: "/pda/weapons/grenades"
                    });
                    break;
                case "ammo":
                    categories.push({
                        ico: AmmoIco,
                        name: "ammo",
                        route: "/pda/weapons/ammo"
                    });
                    break;

                default:
                    return null;
            }
        });

        setNavCategories(categories);
    }, [activeCategories, setNavCategories]);

    return null;
};
