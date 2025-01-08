"use client";

import Image from "next/image";

import { PDAFooterBorder } from "@/components/shared/pda/pdaFooter";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

export const PDAFooter = () => {
	const router = useRouter();

	const toMainPage = () => {
		router.push("/");
	};

	return (
		<footer className="p-[1rem] w-full flex justify-start items-center gap-x-[27.8rem] relative">
			<PDAFooterBorder />
			<div
				data-to-main-page
				onClick={toMainPage}
				className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]"
			>
				<Button variant="destructive">X</Button>
				<div className="text-[1.8rem] text-pda-light_yellow font-roboto">
					Вийти в Головне меню
				</div>
			</div>
			<div className="flex items-center gap-x-[12rem]">
				<div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
					<Button variant="destructive">
						<div className="relative w-[2rem] h-full">
							<Image
								src="/svg/arrow_destructive.svg"
								fill
								alt="bottom"
								className="object-contain rotate-180"
							/>
						</div>
					</Button>
					<div className="text-[1.8rem] text-pda-light_yellow font-roboto">
						Попереднє
					</div>
				</div>
				<div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
					<div className="text-[1.8rem] text-pda-light_yellow font-roboto">
						Наступне
					</div>
					<Button variant="destructive">
						<div className="relative w-[2rem] h-full">
							<Image
								src="/svg/arrow_destructive.svg"
								fill
								alt="bottom"
								className="object-contain"
							/>
						</div>
					</Button>
				</div>
			</div>
		</footer>
	);
};
