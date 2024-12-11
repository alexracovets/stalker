import Image from "next/image";

import { InternetConnection, CurrentTime, NavigationPDA } from "@/components/shared";

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
                </div>
                <div
                    className="relative w-[164.7rem] h-[4.1rem]"
                >
                    <Image src="/headerPDA/top_header.png" fill priority alt="header top" className="object-cover" />
                </div>
                <div
                    className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem]"
                >
                    <CurrentTime />
                </div>
            </div>
            <NavigationPDA />
        </header>
    )
}