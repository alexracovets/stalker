"use client";

import { Button } from "@/components/ui";

export const MenuPDANavigation = () => {
    return (
        <div>
            <Button variant="destructive">
                <div className="leading-[1]">
                    A
                </div>
            </Button>

            <Button variant="destructive">
                <div className="leading-[1]">
                    D
                </div>
            </Button>
        </div>
    )
}