"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import usePDA from '@/store/usePDA';

export const PDA = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlay = usePDA(state => state.isPlay);
    const [isShow, setIsShow] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    useEffect(() => {
        setIsShow(isPlay);
        if (isPlay) handlePlay();
    }, [isPlay]);

    return (
        <div
            className={cn(
                "absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-black cursor-pointer z-[-1]",
                isShow ? "z-1" : "z-[-1]"
            )}
        >
            <video
                ref={videoRef}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                muted
            >
                <source src="/pda/pda_open.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
