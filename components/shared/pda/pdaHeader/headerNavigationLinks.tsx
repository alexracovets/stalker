"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { HeaderLinksList, HeaderLinksDash } from "@/components/shared/pda/pdaHeader";
import usePDA from '@/store/usePDA';

export const HeaderNavigationLinks = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const mainSection = usePDA(state => state.mainSection);
    const [isHidenDash, setIsHidenDash] = useState(true);

    const [lineStyles, setLineStyles] = useState({
        underline: { left: '0px', width: '0px' },
        shortline: { left: '0px', width: '0px' }
    });

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = e.currentTarget.querySelector('span')?.getBoundingClientRect();

        if (menuRect && spanRect) {
            setIsHidenDash(false);

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

    const handleMouseLeave = useCallback(() => {
        const menuRect = menuRef.current?.getBoundingClientRect();
        const linkRect = document.getElementById(mainSection)?.getBoundingClientRect();
        const spanRect = document.getElementById(mainSection)?.querySelector('span')?.getBoundingClientRect();

        if (menuRect && linkRect && spanRect) {
            setIsHidenDash(false);
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
        } else if (mainSection === "") {
            setIsHidenDash(true);
        }
    }, [mainSection]);

    useEffect(() => {
        handleMouseLeave();
    }, [mainSection, handleMouseLeave]);

    return (
        <nav ref={menuRef} className="relative" onPointerLeave={handleMouseLeave}>
            <HeaderLinksList handleMouseEnter={handleMouseEnter} />
            <HeaderLinksDash styles={lineStyles} isHidenDash={isHidenDash} />
        </nav>
    )
}