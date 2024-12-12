"use client";

import { cn } from "@/lib/utils";

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
        name: "Поради"
    },
    {
        name: "Екіпіруватись"
    }
]

interface HeaderLinksListType {
    handleMouseEnter: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const HeaderLinksList = ({ handleMouseEnter }: HeaderLinksListType) => {

    return (
        <ul className="flex justify-center items-center gap-x-[8rem]">
            {
                links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <a
                                onMouseEnter={handleMouseEnter}
                                className={cn(
                                    "block text-[2.5rem] text-pda-links font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                                    "hover:font-[500] hover:text-pda-linksActive"
                                )}

                            >
                                <span>{link.name}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}