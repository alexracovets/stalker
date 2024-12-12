"use client";

import { Button } from "@/components/ui";

export const FooterPDA = () => {
    return (
        <footer
            className="p-[1rem] w-full flex justify-start items-center gap-x-[27.8rem]"
        >
            <div
                className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]"
            >
                <Button variant="destructive">
                    <div className="leading-[1]">
                        X
                    </div>
                </Button>
                <div
                    className="text-[1.8rem] text-pda-light_yellow font-roboto"
                >
                    Вийти в Головне меню
                </div>
            </div>
            <div
                className="flex items-center gap-x-[12rem]"
            >
                <div
                    className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]"
                >
                    <Button variant="destructive">
                        <div className="leading-[1]">
                            ←
                        </div>
                    </Button>
                    <div
                        className="text-[1.8rem] text-pda-light_yellow font-roboto"
                    >
                        Попереднє
                    </div>
                </div>
                <div
                    className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]"
                >
                    <div
                        className="text-[1.8rem] text-pda-light_yellow font-roboto"
                    >
                        Попереднє
                    </div>
                    <Button variant="destructive">
                        <div className="leading-[1]">
                            →
                        </div>
                    </Button>
                </div>
            </div>
        </footer>
    )
}