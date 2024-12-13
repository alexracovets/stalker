"use client";

import links from "@/data/mainPages.json";
import { HeaderLink } from "./headerLink";

interface HeaderLinksListType {
    handleMouseEnter: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const HeaderLinksList = ({ handleMouseEnter }: HeaderLinksListType) => {

    return (
        <ul className="flex justify-center items-center gap-x-[8rem]">
            {
                links.map((link, idx) => {
                    return (
                        <HeaderLink key={idx} name={link.name} route={link.route} handleMouseEnter={handleMouseEnter} id={link.id} />
                    )
                })
            }
        </ul>
    )
}