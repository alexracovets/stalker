"use client";

import { HeaderNavigationBg, HeaderNavigationLinks } from "@/components/shared/pda/pdaHeader";
import links from "@/data/mainPages.json";
import { Button } from "@/components/ui";
import usePDA from '@/store/usePDA';

export const HeaderNavigation = () => {
    const mainSection = usePDA(state => state.mainSection);
    const setMainSection = usePDA(state => state.setMainSection);
    const currentIndex = links.findIndex(link => link.id === mainSection);

    const prevSection = () => {
        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + links.length) % links.length;
            setMainSection(links[prevIndex].id);
        } else {
            setMainSection(links[0].id);
        }
    };

    const nextSection = () => {
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % links.length;
            setMainSection(links[nextIndex].id);
        } else {
            setMainSection(links[0].id);
        }
    };

    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem]"
        >
            <HeaderNavigationBg />
            <Button variant="destructive" data-pda-previous onClick={prevSection}>Q</Button>
            <HeaderNavigationLinks />
            <Button variant="destructive" data-pda-next onClick={nextSection}>E</Button>
        </div>

    )
}