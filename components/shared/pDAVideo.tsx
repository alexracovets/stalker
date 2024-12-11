"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import usePDA from '@/store/usePDA';

export const PDAVideo = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlay = usePDA(state => state.isPlay);
    const isOpenedPDA = usePDA(state => state.isOpen);

    const setIsPlay = usePDA(state => state.setIsPlay);

    const [isShow, setIsShow] = useState(false);

    const handleVideoPlay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            setTimeout(() => {
                videoRef?.current?.play();
            }, 300);
        }
    };

    const handleVideoEnd = () => {
        if (isOpenedPDA) {
            router.push("/pda");
        } else {
            router.push("/");
        }
        
        setTimeout(() => {
            setIsPlay(false);
        }, 300);
    };

    useEffect(() => {
        setIsShow(isPlay);
        if (isPlay) handleVideoPlay();
    }, [isPlay]);

    return (
        <div
            className={cn(
                "absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-black z-[-1]",
                isShow ? "z-1 opacity-1" : "z-[-1] opacity-0",
                "transition-opacity duration-300 ease-in-out"
            )}
        >
            <video
                ref={videoRef}
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
            >
                <source src="/pda/pda_open.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
