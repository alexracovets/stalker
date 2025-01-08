"use client";

interface displayType {
    children: React.ReactNode
}

export const PDADisplay = ({ children }: displayType) => {

    return (
        <main className="flex-grow text-pda-destructive p-[3.2rem] pt-[4.2rem]">
            {children}
        </main>
    )
}