import React, { memo } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

interface YoutubeCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL";
	title: string;
	imageUrl?: string;
	channelName?: string;
	videoUrl?: string;
}

const YoutubeCards = memo(
	({ size, title, imageUrl, channelName, videoUrl }: YoutubeCardProps) => {
		// Varsayılan katalog görseli
		const defaultImage = "https://placehold.co/400x400";
		const catalogImage = imageUrl || defaultImage;

		if (size === "SMALL") {
			return (
				<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6">
					<div>
						<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#ff0000]">
							<FaYoutube className="h-6 w-6 text-white" />
						</div>
						<span className="font-base text-sm mt-3 block">{title}</span>
						<span className="font-base text-xs block">
							{videoUrl ? videoUrl : channelName}
						</span>
					</div>
					<div className="mt-4">
						{channelName && (
							<button className="bg-[#ff0000] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs">
								Subscribe
							</button>
						)}
					</div>
				</div>
			);
		}

		if (size === "TALL") {
			return (
				<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6">
					<div className="flex flex-col gap-5 justify-between">
						<div className="flex flex-col gap-2 mb-8">
							<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#ff0000]">
								<FaYoutube className="h-6 w-6 text-white" />
							</div>
							<span className="font-base text-sm mt-3 block">{title}</span>
							<span className="font-base text-xs block">
								{videoUrl ? videoUrl : channelName}
							</span>
							<Image
								src={catalogImage}
								alt={title}
								width={130}
								height={130}
								className={`${
									videoUrl ? " object-cover mt-16" : "object-cover"
								} rounded-md`}
							/>
						</div>

						{channelName && (
							<button className="bg-[#ff0000] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs">
								Subscribe
							</button>
						)}
					</div>
				</div>
			);
		}

		if (size === "MEDIUM") {
			return (
				<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-row justify-between px-4 py-6">
					<div className="flex flex-col justify-between">
						<div>
							<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#ff0000]">
								<FaYoutube className="h-6 w-6 text-white" />{" "}
							</div>
							<span className="font-base text-sm mt-3 block">{title}</span>
							<span className="font-base text-xs block">
								{videoUrl ? videoUrl : channelName}
							</span>
						</div>
						{channelName && (
							<button className="bg-[#ff0000] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs">
								Subscribe
							</button>
						)}
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
				<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6 overflow-hidden">
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col gap-2">
							<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#ff0000]">
								<FaYoutube className="h-6 w-6 text-white" />
							</div>
							<span className="font-base text-sm mt-1.5">{title}</span>
							<span className="font-base text-xs block">
								{videoUrl ? videoUrl : channelName}
							</span>
						</div>
						{channelName && (
							<button className="bg-[#ff0000] h-8 w-fit text-white px-4 py-1 rounded-full font-semibold text-xs">
								Subscribe
							</button>
						)}
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
	}
);

YoutubeCards.displayName = "YoutubeCards";

export { YoutubeCards };
