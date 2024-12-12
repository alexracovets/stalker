"use client";

import { useRef, useState } from "react";

import { NavigationBgPDA } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const NavigationPDA = () => {
    const [underlineStyles, setUnderlineStyles] = useState({ left: '0px', width: '0px' });
    const [shortlineStyles, setShortlineStyles] = useState({ left: '0px', width: '0px' });
    const menuRef = useRef<HTMLDivElement>(null);

    const links = [
        {
            name: "Захист"
        },
        {
            name: "Зброя"
        },
        {
            name: "Зона"
        },
        {
            name: "Угруповання"
        },
        {
            name: "Предмети"
        }
    ]

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = e.currentTarget.querySelector('span')?.getBoundingClientRect();

        if (menuRect && spanRect) {
            setUnderlineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
            setShortlineStyles({
                left: `${spanRect.left - menuRect.left}px`,
                width: `${spanRect.width}px`
            });
        }
    };

    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem]"
        >
            <NavigationBgPDA />
            <Button variant="destructive">
                <div className="leading-[1]">
                    Q
                </div>
            </Button>
            <nav
                ref={menuRef}
                className="relative"
            >
                <ul className="flex justify-center items-center gap-x-[8rem]">
                    {
                        links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        className={cn(
                                            "block text-[2.5rem] text-pda-links font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                                            "hover:font-[500] hover:text-pda-linksActive"
                                        )}
                                        onMouseEnter={handleMouseEnter}
                                    >
                                        <span>
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div
                    className={cn(
                        "absolute bottom-[0] h-[1px] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-center",
                    )}
                    style={underlineStyles}
                >
                    <div
                        className={cn(
                            "relative w-full h-full flex justify-center items-end"
                        )}
                    >
                        <div className="relative w-[8.5rem] h-[2.5rem]">
                            <Image src="/headerPDA/line_dot.png" fill alt="dot" className="object-cover" />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-[1px] h-[3px] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-center"
                    style={shortlineStyles}
                >
                    <div
                        className={cn(
                            "relative w-full h-full flex justify-center items-end"
                        )}
                    >
                        <div className="relative w-[4.4rem] h-[1.7rem] blur-[10px]">
                            <Image src="/headerPDA/line_dot_small.png" fill alt="dot" className="object-cover" />
                        </div>
                    </div>
                </div>
            </nav>
            <Button variant="destructive">
                <div className="leading-[1]">
                    E
                </div>
            </Button>
        </div>

    )
}