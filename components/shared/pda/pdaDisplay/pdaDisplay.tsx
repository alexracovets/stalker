"use client";

interface displayType {
    children: React.ReactNode
}

export const PDADisplay = ({ children }: displayType) => {

    return (
        <main className="flex-grow">
            {children}
        </main>
    )
}