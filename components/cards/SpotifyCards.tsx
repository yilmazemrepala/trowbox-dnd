"use client";

import React, { memo, useRef, useCallback } from "react";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa6";
import { Trash } from "lucide-react";
import { CardProps } from "@/types/cardProps.types";
import { HoverCard } from "@/components/ui/hover-card";
import { useHoverCard } from "@/hooks/useHoverCard";
import { FixedSizeList as List } from "react-window";

const SpotifyCards = memo(
	({
		size,
		title,
		songCount,
		imageUrl,
		songArtist,
		songs,
		isDragging,
	}: CardProps) => {
		const cardRef = useRef<HTMLDivElement>(null);
		const { isHovered, hoverCardPosition, handleMouseEnter, handleMouseLeave } =
			useHoverCard({ ref: cardRef, isDragging });

		// Play butonu için callback
		const handlePlay = useCallback(() => {
			console.log("Playing...");
		}, []);

		if (size === "MEDIUM") {
			return (
				<div
					className="size-full relative"
					ref={cardRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div
						className={`size-full bg-[#EDFDF3] rounded-3xl px-4 py-6 flex items-center gap-4 border border-gray-200 relative group`}>
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
						<div className="flex flex-col gap-1.5">
							<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#1DD760]">
								<FaSpotify className="h-6 w-6 text-white" />
							</div>
							<h3 className="font-base text-sm">{title}</h3>
							{songCount && (
								<p className="text-xs text-gray-600">{songCount} songs</p>
							)}
							{songArtist && (
								<p className="text-xs text-gray-600">{songArtist}</p>
							)}
							<button
								onClick={handlePlay}
								className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
								<IoPlay className="text-sm" />
								Play
							</button>
						</div>

						{imageUrl && (
							<Image
								src={imageUrl}
								alt="Album cover"
								width={130}
								height={130}
								className="rounded-lg ml-auto"
							/>
						)}
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="spotify"
						cardRef={cardRef}
					/>
				</div>
			);
		}

		// if (size === "FLAT") {
		// 	return (
		// 		<div
		// 			className={`size-full bg-[#EDFDF3] rounded-3xl p-4 flex items-center gap-4 border border-gray-200 relative group`}>
		// 			<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
		// 				<Trash className="w-10 h-10 text-black" />
		// 			</div>
		// 			<div className="flex flex-row overflow-hidden flex-1 items-center gap-1.5">
		// 				<FaSpotify className="h-[2.5em] w-[2.5em] text-white bg-[#1DD760] rounded-xl p-2" />
		// 				<h3 className="font-base truncate text-sm">{title}</h3>
		// 			</div>
		// 		</div>
		// 	);
		// }

		if (size === "LARGE") {
			return (
				<div
					className="size-full relative"
					ref={cardRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div
						className={`size-full bg-[#EDFDF3] rounded-3xl px-4 py-6 border border-gray-200 flex flex-col relative group	`}>
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
						{/* Üst Bar (Spotify Logo + Başlık + Play Butonu) */}
						<div className="flex flex-row flex-1 justify-between items-start mb-4">
							<div className="flex flex-col items-start gap-3">
								<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#1DD760]">
									<FaSpotify className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="font-base text-sm">{title}</h3>
									{songCount && (
										<p className="text-xs text-gray-600">{songCount} songs</p>
									)}
									{songArtist && (
										<p className="text-xs text-gray-600">{songArtist}</p>
									)}
								</div>
							</div>

							<div className="flex gap-3">
								<button
									onClick={handlePlay}
									className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
									<IoPlay className="text-sm" />
									Play
								</button>
							</div>
						</div>

						{/* Image on the right side */}
						{imageUrl && (
							<div className="flex justify-center items-center p-4 bg-[#E8F8EE] rounded-lg border border-gray-100">
								<Image
									src={imageUrl}
									alt="Album cover"
									width={140}
									height={140}
									className="rounded-lg"
									priority={true}
								/>
							</div>
						)}

						{/* Şarkı Listesi */}
						{songs && !imageUrl && (
							<List
								height={200}
								itemCount={songs.length}
								itemSize={60}
								width="100%">
								{({ index, style }) => (
									<div style={style}>
										<div className="flex items-center gap-4 relative group/song">
											<div className="relative ">
												<Image
													src={`https://placehold.co/38x38`}
													alt={songs[index].title}
													width={38}
													height={38}
													className="rounded-lg transition-opacity duration-300 group-hover/song:opacity-0"
												/>
												<button className="absolute inset-0 bg-green-500 text-white opacity-0 group-hover/song:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
													<IoPlay className="h-4 w-4" />
												</button>
											</div>
											<div className="flex-1">
												<p className="text-sm font-normal">
													{songs[index].title}
												</p>
												<p className="text-xs text-gray-600">
													{songs[index].artist}
												</p>
											</div>
											<span className="text-xs text-gray-600 pr-1">
												{songs[index].duration}
											</span>
										</div>
									</div>
								)}
							</List>
						)}
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="spotify"
						cardRef={cardRef}
					/>
				</div>
			);
		}

		if (size === "TALL") {
			return (
				<div
					className="size-full relative"
					ref={cardRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div
						className={`size-full bg-[#EDFDF3] rounded-3xl px-4 py-6 flex flex-col justify-between border border-gray-200 relative group`}>
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
						<div className="flex flex-row flex-1 justify-between items-start mb-4">
							<div className="flex flex-col items-start gap-1">
								<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#1DD760]">
									<FaSpotify className="h-6 w-6 text-white" />
								</div>
								<h3 className="font-base text-sm">{title}</h3>
								{songCount && (
									<p className="text-xs text-gray-600">{songCount} songs</p>
								)}
								{songArtist && (
									<p className="text-xs text-gray-600">{songArtist}</p>
								)}
								{imageUrl && (
									<Image
										src={imageUrl}
										alt="Album cover"
										width={130}
										height={130}
										className="rounded-lg"
									/>
								)}
							</div>
						</div>

						<div className="flex gap-3">
							<button
								onClick={handlePlay}
								className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
								<IoPlay className="text-sm" />
								Play
							</button>
						</div>
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="spotify"
						cardRef={cardRef}
					/>
				</div>
			);
		}

		if (size === "SMALL") {
			return (
				<div
					className="size-full relative"
					ref={cardRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div
						className={`size-full bg-[#EDFEF3] rounded-3xl px-4 py-6 flex flex-col justify-between border border-gray-200 relative group`}>
						<div
							className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
							rounded-full w-8 h-8 flex items-center justify-center p-1.5 
							${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
							transition-opacity duration-200`}>
							<Trash className="w-10 h-10 text-black" />
						</div>
						<div className="flex flex-col items-start gap-1">
							<div className="flex flex-row items-center gap-2 rounded-xl h-10 w-10 justify-center bg-[#1DD760]">
								<FaSpotify className="h-6 w-6 text-white" />
							</div>
							<h3 className="font-base text-sm truncate w-28">{title}</h3>
							{songCount && (
								<p className="text-xs text-gray-600">{songCount} songs</p>
							)}
							{songArtist && (
								<p className="text-xs text-gray-600">{songArtist}</p>
							)}
						</div>
						<button
							onClick={handlePlay}
							className="bg-[#1DD760] text-white px-4 py-1 w-fit rounded-full text-sm flex items-center justify-center mt-2">
							<IoPlay className="text-sm" />
							Play
						</button>
					</div>
					<HoverCard
						isHovered={isHovered}
						title={title}
						position={hoverCardPosition}
						cardType="spotify"
						cardRef={cardRef}
					/>
				</div>
			);
		}
	}
);

SpotifyCards.displayName = "SpotifyCards";

export { SpotifyCards };
