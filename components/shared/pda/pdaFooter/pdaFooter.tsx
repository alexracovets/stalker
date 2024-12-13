"use client";

import { PDAFooterBorder } from "@/components/shared/pda/pdaFooter";
import { Button } from "@/components/ui";

export const PDAFooter = () => {

    return (
        <footer className="p-[1rem] w-full flex justify-start items-center gap-x-[27.8rem] relative">
            <PDAFooterBorder />
            <div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
                <Button variant="destructive">X</Button>
                <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                    Вийти в Головне меню
                </div>
            </div>
            <div className="flex items-center gap-x-[12rem]">
                <div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
                    <Button variant="destructive">←</Button>
                    <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                        Попереднє
                    </div>
                </div>
                <div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
                    <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                        Попереднє
                    </div>
                    <Button variant="destructive">→</Button>
                </div>
            </div>
        </footer>
    )
}