import Image from "next/image"

export const MenuPDA = () => {

    return (
        <div
            className="relative w-[52.2rem] max-w-[52.2rem] h-auto flex-grow"
        >
            <div
                className="absolute right-0 top-0 h-full w-[.8rem] z-[-1]"
            >
                <div
                    className="relative w-full h-full"
                >
                    <Image src="/pda/border/vertical_center.jpg" fill alt="center" className="object-cover" />
                </div>
            </div>
        </div>
    )
}