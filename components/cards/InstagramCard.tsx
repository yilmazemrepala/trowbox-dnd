import React, { memo } from "react";
import { FaInstagram } from "react-icons/fa6";
// import Image from "next/image";

interface InstagramCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL";
	title: string;
	imageUrl?: string;
	username?: string;
}

// todo: cardsize kullanımdan kaldırlacak
const CardSizes = {
	SMALL: "col-span-1 row-span-1",
	MEDIUM: "col-span-2 row-span-1",
	LARGE: "col-span-2 row-span-2",
	TALL: "col-span-1 row-span-2",
	FLAT: "col-span-2 h-20",
};
const InstagramCard = memo(({ size, title }: InstagramCardProps) => {
	if (size === "SMALL") {
		return (
			<div
				className={`${CardSizes.SMALL} bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 h-[164px]`}>
				<div className="flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2">
						<div
							className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center"
							style={{
								background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
									radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), 
									radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
									radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
									radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
									radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
									radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), 
									linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`,
							}}>
							<FaInstagram className="h-9 w-9 p-1 text-white" />
						</div>
						<span className="font-base truncate text-sm mt-1.5">{title}</span>
					</div>
				</div>
				<button className="bg-[#0095F6] h-7 w-fit text-white px-2 py-1 rounded-md font-semibold text-xs mt-auto">
					Follow
				</button>
			</div>
		);
	}

	if (size === "MEDIUM") {
		return (
			<div
				className={`${CardSizes.MEDIUM} bg-white rounded-3xl border border-gray-200 flex flex-row justify-between px-4 py-4 h-[164px]`}>
				<div className="flex flex-col items-start gap-2">
					<div className="flex flex-col gap-2">
						<div
							className="flex flex-row items-center gap-2 rounded-xl h-11 w-11 justify-center"
							style={{
								background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
								radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), 
								linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`,
							}}>
							<FaInstagram className="h-9 w-9 p-1 text-white" />
						</div>
						<span className="font-base text-sm mt-1.5">Instagram</span>
					</div>
					<button className="bg-[#0095F6] h-7 w-fit text-white px-2 py-1 rounded-md font-semibold text-xs mt-auto">
						Follow
					</button>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div className="border border-[#E2E2E2] rounded-md w-16 h-16 bg-[#F8F8F8]" />
					<div className="border border-[#E2E2E2] rounded-md w-16 h-16 bg-[#F8F8F8]" />
					<div className="border border-[#E2E2E2] rounded-md w-16 h-16 bg-[#F8F8F8]" />
					<div className="border border-[#E2E2E2] rounded-md w-16 h-16 bg-[#F8F8F8]" />

					{/* 
                    x4 eğer image varsa
                    <Image
						src="https://placehold.co/120x120"
						alt="Instagram"
						width={120}
						height={120}
						className="rounded-md w-full h-auto"
					/> */}
				</div>
			</div>
		);
	}

	if (size === "TALL") {
		return (
			<div
				className={`${CardSizes.TALL} bg-white rounded-3xl border border-gray-200 flex gap-6 flex-col justify-between px-4 py-6 h-[h-[343px]`}>
				<div className="flex flex-col gap-1">
					<div className="flex flex-col gap-1">
						<div
							className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center"
							style={{
								background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
								radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), 
								linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`,
							}}>
							<FaInstagram className="h-9 w-9 p-1 text-white" />
						</div>
						<span className="font-base text-sm mt-1.5">Instagram</span>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div className="border border-[#E2E2E2] rounded-md w-full h-14 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-14 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-14 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-14 bg-[#F8F8F8]" />
					</div>
				</div>

				<button className="bg-[#0095F6] h-7 w-fit text-white px-2 py-1 rounded-md font-semibold text-xs mt-auto">
					Follow
				</button>
			</div>
		);
	}

	if (size === "LARGE") {
		return (
			<div
				className={`${CardSizes.LARGE} bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 h-[343px]`}>
				<div className="flex flex-col gap-5">
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col gap-2">
							<div
								className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center"
								style={{
									background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
								radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
								radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), 
								linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`,
								}}>
								<FaInstagram className="h-9 w-9 p-1 text-white" />
							</div>
							<span className="font-base text-sm mt-1.5">Instagram</span>
						</div>
						<button className="bg-[#0095F6] h-7 w-fit text-white px-2 py-1 rounded-md font-semibold text-xs">
							Follow
						</button>
					</div>
					<div className="grid grid-cols-3 gap-2 mt-6">
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
						<div className="border border-[#E2E2E2] rounded-md w-full h-20 bg-[#F8F8F8]" />
					</div>
				</div>
			</div>
		);
	}
});

InstagramCard.displayName = "InstagramCard";

export { InstagramCard };
