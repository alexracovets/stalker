"use client";

import { useState } from "react";

import { IconCategoryType } from "@/types";
import { cn } from "@/lib/utils";

export const PDAMenuIco = ({ Icon, active }: IconCategoryType) => {
    const [hover, setHover] = useState(false);
    const defaultColor = "#AFAC99";
    const hoverColor = "#3F3830";

    return (
        <li
            className={
                cn(
                    "flex justify-center items-center w-full h-[5rem] bg-pda-ico rounded-[.4rem] cursor-pointer",
                    "transition duration-300",
                    active || hover ? "bg-pda-destructive" : "bg-pda-ico"
                )
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="w-[3.2rem] h-[3.2rem]">
                <Icon color={active || hover ? hoverColor : defaultColor} />
            </div>
        </li>
    );
};
