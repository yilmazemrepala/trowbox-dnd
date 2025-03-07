import React, { memo, useRef } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { CardProps } from "@/types/cardProps.types";
import { HoverCard } from "@/components/ui/hover-card";
import { useHoverCard } from "@/hooks/useHoverCard";
import { Trash } from "lucide-react";

const YoutubeCards = memo(
	({
		i,
		size,
		title,
		imageUrl,
		channelName,
		videoUrl,
		isDragging,
	}: CardProps) => {
		// Varsayılan katalog görseli
		const defaultImage = "https://placehold.co/400x400";
		const catalogImage = imageUrl || defaultImage;

		const cardRef = useRef<HTMLDivElement>(null);
		const { isHovered, hoverCardPosition, handleMouseEnter, handleMouseLeave } =
			useHoverCard({ ref: cardRef, isDragging });

		// CSS transitions ile minimal geçiş
		const transitionStyle = {
			transition: "opacity 100ms ease",
		};

		if (size === "SMALL") {
			return (
				<div
					ref={cardRef}
					className="size-full relative"
					style={transitionStyle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6 relative group">
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
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
							{!videoUrl && (
								<button className="bg-[#ff0000] h-8 w-fit text-white px-3 py-1 rounded-md font-semibold text-xs">
									Subscribe
								</button>
							)}
						</div>
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="youtube"
						cardRef={cardRef}
						cardId={i}
					/>
				</div>
			);
		}

		if (size === "TALL") {
			return (
				<div
					ref={cardRef}
					className="size-full relative"
					style={transitionStyle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6 relative group">
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
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
									} rounded-md w-[130px] h-[130px]`}
								/>
							</div>

							{!videoUrl && (
								<button className="bg-[#ff0000] h-8 w-fit text-white px-3 py-1 rounded-md font-semibold text-xs">
									Subscribe
								</button>
							)}
						</div>
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="youtube"
						cardRef={cardRef}
						cardId={i}
					/>
				</div>
			);
		}

		if (size === "MEDIUM") {
			return (
				<div
					ref={cardRef}
					className="size-full relative"
					style={transitionStyle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-row justify-between px-4 py-6 relative group">
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
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
							{!videoUrl && (
								<button className="bg-[#ff0000] h-8 w-fit text-white px-3 py-1 rounded-md font-semibold text-xs">
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
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="youtube"
						cardRef={cardRef}
						cardId={i}
					/>
				</div>
			);
		}

		if (size === "LARGE") {
			return (
				<div
					ref={cardRef}
					className="size-full relative"
					style={transitionStyle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="size-full bg-[#FFF0F1] rounded-3xl border border-[#ECE0E0] flex flex-col justify-between px-4 py-6  relative group">
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
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
							{!videoUrl && (
								<button className="bg-[#ff0000] h-8 w-fit text-white px-3 py-1 rounded-md font-semibold text-xs">
									Subscribe
								</button>
							)}
						</div>
						<div className="flex flex-row flex-1 justify-between items-start mt-4">
							<Image
								src={catalogImage}
								alt={title}
								className="w-fit rounded-md"
								objectFit="cover"
								width={200}
								height={200}
							/>
						</div>
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="youtube"
						cardRef={cardRef}
						cardId={i}
					/>
				</div>
			);
		}

		return null;
	}
);

YoutubeCards.displayName = "YoutubeCards";

export { YoutubeCards };
