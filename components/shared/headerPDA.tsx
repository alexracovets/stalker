import Image from "next/image";

import { InternetConnection } from "@/components/shared";

export const HeaderPDA = () => {

    return (
        <header>
            <div
                className="flex justify-center items-center"
            >
                <div
                    className="w-[17.4rem] flex justify-center items-center gap-x-[.8rem]"
                >
                    <InternetConnection />
                    <span
                        className="text-[1.6rem] text-pda-white font-roboto"
                    >
                        Аномальна Зона
                    </span>
                </div>
                <div
                    className="relative w-[164.7rem] h-[4.1rem]"
                >
                    <Image src="/headerPDA/top_header.png" fill alt="header top" className="object-cover" />
                </div>
                <div
                    className="w-[9.9rem]"
                >

                </div>
            </div>
        </header>
    )
}