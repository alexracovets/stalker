"use client";

import { ArmorIco, ListIco, MaskIco, DevicesIco } from "@/components/svg";
import { PDAMenuIco } from "@/components/shared/pda/pdaMenu";
import { Button } from "@/components/ui";

export const PDAMenuNavigation = () => {

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
            <Button variant="destructive">A</Button>
            <ul className="flex justify-center items-center gap-x-[1.2rem]">
                {nav.map((item, idx) => (
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