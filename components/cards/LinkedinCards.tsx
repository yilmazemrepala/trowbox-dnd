import React, { memo } from "react";
import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import { Trash } from "lucide-react";
interface LinkedinCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL";
	title: string;
	imageUrl?: string;
}

const LinkedinCards = memo(({ size, title, imageUrl }: LinkedinCardProps) => {
	// Varsayılan katalog görseli
	const defaultImage = "https://placehold.co/400x400";
	const catalogImage = imageUrl || defaultImage;

	if (size === "SMALL") {
		return (
			<div className="size-full bg-[#F0F6F9] rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 relative group">
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
				<div className="flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#0A66C2]">
							<SiLinkedin className="h-6 w-6 text-white" />
						</div>
						<span className="font-medium truncate text-sm mt-1.5 text-gray-800">
							{title}
						</span>
					</div>
				</div>
				<div className="mt-4">
					<button className="bg-[#0A66C2] hover:bg-[#004182] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs transition-colors">
						View
					</button>
				</div>
			</div>
		);
	}

	if (size === "TALL") {
		return (
			<div className="size-full bg-[#F0F6F9] rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 relative group">
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
				<div className="flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2 mb-8">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#0A66C2]">
							<SiLinkedin className="h-6 w-6 text-white" />{" "}
						</div>
						<span className="font-base text-sm mt-3 block">{title}</span>
						<Image
							src={catalogImage}
							alt={title}
							width={130}
							height={130}
							className=" object-cover rounded-md"
						/>
					</div>

					<button className="bg-[#0A66C2] hover:bg-[#004182] h-8 mt-8 w-fit text-white px-4 py-1  font-semibold text-xs rounded-full transition-colors">
						View
					</button>
				</div>
			</div>
		);
	}

	if (size === "MEDIUM") {
		return (
			<div className="size-full bg-[#F0F6F9] rounded-3xl border border-gray-200 flex flex-row justify-between px-4 py-6 relative group">
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#0A66C2]">
							<SiLinkedin className="h-6 w-6 text-white" />
						</div>
						<span className="font-base text-sm mt-3 block">{title}</span>
					</div>
					<button className="bg-[#0A66C2] hover:bg-[#004182] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs mt-auto transition-colors">
						View
					</button>
				</div>
				<div className="ml-4">
					<Image
						src={catalogImage}
						alt={title}
						width={130}
						height={130}
						className="w-full h-full object-cover rounded-md"
					/>
				</div>
			</div>
		);
	}

	if (size === "LARGE") {
		return (
			<div className="size-full bg-[#F0F6F9] rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 relative group">
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
				<div className="flex flex-row items-start justify-between mb-8">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#0A66C2]">
							<SiLinkedin className="h-6 w-6 text-white" />
						</div>
						<span className="font-base text-sm mt-1.5">{title}</span>
					</div>
					<button className="bg-[#0A66C2] hover:bg-[#004182] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs transition-colors">
						View
					</button>
				</div>
				<div className="flex flex-row flex-1 justify-between items-start mt-4">
					<Image
						src={catalogImage}
						alt={title}
						className="w-full rounded-md"
						objectFit="cover"
						width={200}
						height={200}
					/>
				</div>
			</div>
		);
	}

	return null;
});

LinkedinCards.displayName = "LinkedinCard";
export { LinkedinCards };
