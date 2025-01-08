"use client"; 

export const InitialVideo = () => {

    return (
        <div className="relative w-[140.1rem] h-[100dvh]">
            <video
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
            >
                <source src="/video/initial.mp4" type="video/mp4" />
            </video>
        </div>
    )
}