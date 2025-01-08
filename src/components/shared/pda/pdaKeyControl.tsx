import { useEffect } from "react";

export const PDAKeyControl = () => {
	useEffect(() => {
		// Маппинг клавиш на действия
		const keyMap: Record<string, string> = {
			KeyA: "[data-menu_pda-previous]",
			KeyD: "[data-menu_pda-next]",
			KeyQ: "[data-pda-previous]",
			KeyE: "[data-pda-next]",
			KeyX: "[data-to-main-page]",
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			const selector = keyMap[e.code];
			if (selector) {
				const element = document.querySelector(selector) as HTMLElement;
				element?.click();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// Очистка события при размонтировании компонента
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return null;
};
