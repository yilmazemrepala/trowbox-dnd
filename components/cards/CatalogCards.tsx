import React, { memo } from "react";
import Image from "next/image";
import { SiAdobeacrobatreader } from "react-icons/si";

interface CatalogCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL";
	title: string;
	imageUrl?: string;
}

const CatalogCards = memo(({ size, title, imageUrl }: CatalogCardProps) => {
	// Varsayılan katalog görseli
	const defaultImage = "https://placehold.co/400x400";
	const catalogImage = imageUrl || defaultImage;

	if (size === "SMALL") {
		return (
			<div className="size-full bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6">
				<div className="flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-red-700">
							<SiAdobeacrobatreader className="h-6 w-6 text-white" />{" "}
						</div>
						<span className="font-base truncate text-sm mt-1.5">{title}</span>
					</div>
				</div>
				<div className="mt-4">
					<button className="bg-red-700 h-8 w-fit text-white px-4 py-1 rounded-md font-semibold text-xs">
						Download
					</button>
				</div>
			</div>
		);
	}

	if (size === "TALL") {
		return (
			<div className="size-full bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6">
				<div className="flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-red-700">
							<SiAdobeacrobatreader className="h-6 w-6 text-white" />{" "}
						</div>
						<span className="font-base text-sm mt-3 block">{title}</span>
						<Image
							src={catalogImage}
							alt={title}
							width={100}
							height={100}
							className=" object-cover rounded-md"
						/>
					</div>

					<button className="bg-red-700 h-8 w-fit text-white px-4 py-1 rounded-md font-semibold text-xs mt-auto">
						Download
					</button>
				</div>
			</div>
		);
	}

	if (size === "MEDIUM") {
		return (
			<div className="size-full bg-white rounded-3xl border border-gray-200 flex flex-row justify-between px-4 py-6">
				<div className="flex flex-col justify-between">
					<div>
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-red-700">
							<SiAdobeacrobatreader className="h-6 w-6 text-white" />{" "}
						</div>
						<span className="font-base text-sm mt-3 block">{title}</span>
					</div>
					<button className="bg-red-700 h-8 w-fit text-white px-4 py-1 rounded-md font-semibold text-xs mt-auto">
						Download
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
			<div className="size-full bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6">
				<div className="flex flex-row items-start justify-between mb-8">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-red-700">
							<SiAdobeacrobatreader className="h-6 w-6 text-white" />
						</div>
						<span className="font-base text-sm mt-1.5">{title}</span>
					</div>
					<button className="bg-red-700 h-8 w-fit text-white px-4 py-1 rounded-md font-semibold text-xs">
						Download
					</button>
				</div>
				<div className="flex flex-row flex-1 justify-between items-start mt-8">
					<div className="flex justify-center items-center p-4 bg-[#f9f9f9] rounded-lg w-full border border-gray-100">
						<Image
							src={catalogImage}
							alt={title}
							className="object-cover rounded-md"
							width={140}
							height={140}
						/>
					</div>
				</div>
			</div>
		);
	}

	return null;
});

CatalogCards.displayName = "CatalogCard";

export { CatalogCards };
