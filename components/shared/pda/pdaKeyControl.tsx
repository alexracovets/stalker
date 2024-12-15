import { useEffect } from "react";

export const PDAKeyControl = () => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.code) {
                case "KeyA":
                    (document.querySelector("[data-menu_pda-previous]") as HTMLElement)?.click();
                    break;
                case "KeyD":
                    (document.querySelector("[data-menu_pda-next]") as HTMLElement)?.click();
                    break;
                case "KeyQ":
                    (document.querySelector("[data-pda-previous]") as HTMLElement)?.click();
                    break;
                case "KeyE":
                    (document.querySelector("[data-pda-next]") as HTMLElement)?.click();
                    break;
                case "KeyX":
                    (document.querySelector("[data-to-main-page]") as HTMLElement)?.click();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return null;
}