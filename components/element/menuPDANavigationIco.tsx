"use client";

import { cn } from "@/lib/utils";
import { useState, FC } from "react";

interface MenuPDANavigationIcoProps {
    Icon: FC<{ color: string }>;
}

export const MenuPDANavigationIco = ({ Icon }: MenuPDANavigationIcoProps) => {
    const [hover, setHover] = useState(false);
    const defaultColor = "#AFAC99";
    const hoverColor = "#3F3830";

    return (
        <li
            className={
                cn(
                    "flex justify-center items-center w-[8.5rem] h-[5rem] bg-pda-ico rounded-[.4rem] cursor-pointer",
                    "transition duration-300",
                    hover && "bg-pda-destructive"
                )
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon color={hover ? hoverColor : defaultColor} />
        </li>
    );
};
