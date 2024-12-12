"use client";

import { useCallback, useRef, useState } from "react";

import { HeaderLinksList, HeaderLinksDash } from "@/components/shared/pda/pdaHeader";

export const HeaderNavigationLinks = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [lineStyles, setLineStyles] = useState({
        underline: { left: '0px', width: '0px' },
        shortline: { left: '0px', width: '0px' }
    });

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = e.currentTarget.querySelector('span')?.getBoundingClientRect();

        if (menuRect && spanRect) {
            setLineStyles({
                underline: {
                    left: `${linkRect.left - menuRect.left}px`,
                    width: `${linkRect.width}px`
                },
                shortline: {
                    left: `${spanRect.left - menuRect.left}px`,
                    width: `${spanRect.width}px`
                }
            });
        }
    }, []);

    return (
        <nav ref={menuRef} className="relative">
            <HeaderLinksList handleMouseEnter={handleMouseEnter} />
            <HeaderLinksDash styles={lineStyles} />
        </nav>
    )
}