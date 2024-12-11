"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const NavigationPDA = () => {
    const [underlineStyles, setUnderlineStyles] = useState({ left: '0px', width: '0px' });
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
        if (menuRect) {
            setUnderlineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        }
    };

    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem]"
        >
            <div className="absolute left-0 top-0">
                <div
                    className="relative w-[41rem] h-[8.8rem]"
                >
                    <Image src="/headerPDA/left_selection.png" fill alt="left" className="object-cover" />
                </div>
            </div>
            <div className="absolute right-0 top-0">
                <div
                    className="relative w-[41rem] h-[8.8rem]"
                >
                    <Image src="/headerPDA/right_selection.png" fill alt="left" className="object-cover" />
                </div>
            </div>
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
                                        {link.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div
                    className="absolute bottom-0 h-[0.3rem] w-[5rem] bg-custom-gradient transition-all ease-out duration-300"
                    style={underlineStyles}
                />
            </nav>
            <Button variant="destructive">
                <div className="leading-[1]">
                    E
                </div>
            </Button>
        </div>

    )
}