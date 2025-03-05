"use client";

import React, { memo } from "react";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa6";

interface SpotifyCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL" | "FLAT";
	title: string;
	songCount?: number;
	imageUrl?: string;
	songArtist?: string;
	songs?: Array<{
		title: string;
		artist: string;
		duration: string;
	}>;
}

const SpotifyCards = memo(
	({
		size,
		title,
		songCount,
		imageUrl,
		songArtist,
		songs,
	}: SpotifyCardProps) => {
		if (size === "MEDIUM") {
			return (
				<div
					className={`size-full bg-[#EDFDF3] rounded-3xl p-4 flex items-center gap-4 border border-gray-200`}>
					<div className="flex flex-col gap-1.5">
						<FaSpotify className="h-[2.5em] w-[2.5em] text-white bg-[#1DD760] rounded-xl p-2" />
						<h3 className="font-base text-sm">{title}</h3>
						{songCount && (
							<p className="text-xs text-gray-600">{songCount} songs</p>
						)}
						{songArtist && (
							<p className="text-xs text-gray-600">{songArtist}</p>
						)}
						<button className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex w-fit items-center gap-1.5 mt-1">
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
			);
		}

		if (size === "FLAT") {
			return (
				<div
					className={`size-full bg-[#EDFDF3] rounded-3xl p-4 flex items-center gap-4 border border-gray-200`}>
					<div className="flex flex-row overflow-hidden flex-1 items-center gap-1.5">
						<FaSpotify className="h-[2.5em] w-[2.5em] text-white bg-[#1DD760] rounded-xl p-2" />
						<h3 className="font-base truncate text-sm">{title}</h3>
					</div>
				</div>
			);
		}

		if (size === "LARGE") {
			return (
				<div
					className={`size-full bg-[#EDFDF3] rounded-3xl p-4 border border-gray-200 flex flex-col `}>
					{/* Üst Bar (Spotify Logo + Başlık + Play Butonu) */}
					<div className="flex flex-row flex-1 justify-between items-start mb-4">
						<div className="flex flex-col items-start gap-3">
							<FaSpotify className="h-[2.5em] w-[2.5em] text-white bg-[#1DD760] rounded-xl p-2" />
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
							<button className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
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
							/>
						</div>
					)}

					{/* Şarkı Listesi */}
					{songs && !imageUrl && (
						<div className="space-y-4 pr-4 max-h-[200px]">
							{songs?.map((song, index) => (
								<div
									key={index}
									className="flex items-center gap-4 relative group">
									<div className="relative">
										<Image
											src={`https://placehold.co/38x38`}
											alt={song.title}
											width={38}
											height={38}
											className="rounded-lg transition-opacity duration-300 group-hover:opacity-0"
										/>
										{/* Play Button */}
										<button className="absolute inset-0 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
											<IoPlay className="h-4 w-4" />
										</button>
									</div>
									<div className="flex-1">
										<p className="text-sm font-normal">{song.title}</p>
										<p className="text-xs text-gray-600">{song.artist}</p>
									</div>
									<span className="text-xs text-gray-600 pr-1">
										{song.duration}
									</span>
								</div>
							))}
						</div>
					)}
				</div>
			);
		}

		if (size === "TALL") {
			return (
				<div
					className={`size-full bg-[#EDFDF3] rounded-3xl p-4 flex flex-col justify-between border border-gray-200`}>
					<div className="flex flex-row flex-1 justify-between items-start mb-4">
						<div className="flex flex-col items-start gap-1">
							<FaSpotify className="h-[2.5em] w-[2.5em] text-white bg-[#1DD760] rounded-xl p-2" />
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
						<button className="bg-[#1DD760] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
							<IoPlay className="text-sm" />
							Play
						</button>
					</div>
				</div>
			);
		}

		if (size === "SMALL") {
			return (
				<div
					className={`size-full bg-[#EDFEF3] rounded-3xl p-4 flex flex-col justify-between border border-gray-200`}>
					<div className="flex flex-col items-start gap-1">
						<FaSpotify className="h-[2em] w-[2em] text-white bg-[#1DD760] rounded-xl p-1" />
						<h3 className="font-base text-sm truncate w-28">{title}</h3>
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
								width={100}
								height={100}
								className="rounded-lg mt-2"
							/>
						)}
					</div>
					<button className="bg-[#1DD760] text-white px-4 py-1 w-fit rounded-full text-sm flex items-center justify-center mt-2">
						<IoPlay className="text-sm" />
						Play
					</button>
				</div>
			);
		}
	}
);

SpotifyCards.displayName = "SpotifyCards";

export { SpotifyCards };
