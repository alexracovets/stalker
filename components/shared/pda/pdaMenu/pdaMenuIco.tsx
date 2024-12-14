"use client";

import { useState } from "react";

import { IconCategoryType } from "@/types";
import { cn } from "@/lib/utils";

export const PDAMenuIco = ({ Icon }: IconCategoryType) => {
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
            <div className="w-[3.2rem] h-[3.2rem]">
                <Icon color={hover ? hoverColor : defaultColor} />
            </div>
        </li>
    );
};
