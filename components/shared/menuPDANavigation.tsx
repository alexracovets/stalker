"use client";

import { Button } from "@/components/ui";
import { ArmorIco, ListIco, MaskIco, DevicesIco } from "@/components/svg";
import { MenuPDANavigationIco } from "../element/menuPDANavigationIco";

export const MenuPDANavigation = () => {
    const nav = [
        {
            ico: ListIco,
            name: "list"
        },
        {
            ico: ArmorIco,
            name: "armors"
        },
        {
            ico: MaskIco,
            name: "masks"
        },
        {
            ico: DevicesIco,
            name: "divices"
        }
    ];

    return (
        <div className="flex justify-center items-center w-full pt-[2.5rem] pb-[1.4rem] px-[1.9rem] gap-x-[1.8rem]">
            <Button variant="destructive">
                <div className="leading-[1]">A</div>
            </Button>
            <ul className="flex justify-center items-center gap-x-[1.2rem]">
                {nav.map((item, idx) => (
                    <MenuPDANavigationIco
                        key={idx}
                        Icon={item.ico}
                    />
                ))}
            </ul>
            <Button variant="destructive">
                <div className="leading-[1]">D</div>
            </Button>
        </div>
    );
};
