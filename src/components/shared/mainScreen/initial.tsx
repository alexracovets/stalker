"use client";

import { Logo, Info, Navigation } from "@/src/components/shared/mainScreen";

export const Initial = () => {
	return (
		<aside className="relative w-[51.9rem] min-w-[51.9rem] h-[100dvh] bg-primary-black pt-[20rem] pl-[8.5rem] pr-[4.2rem]">
			<Logo />
			<Info />
			<Navigation />
		</aside>
	);
};
