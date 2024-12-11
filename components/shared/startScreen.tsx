"use client";

import Image from "next/image";

export const StartScreen = () => {

    return (
        <div className="relative w-[140.1rem] h-[100dvh]">
            <Image
                priority={true}
                fill
                alt="start screen"
                className="object-cover"
                placeholder="blur"
                src="/home/startScreen.jpg"
                blurDataURL="/home/startScreen_low.jpg"
            />
        </div>
    )
}