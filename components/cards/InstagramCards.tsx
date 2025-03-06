import { Trash } from "lucide-react";
import React, { memo, useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { createPortal } from "react-dom";
// import Image from "next/image";

interface InstagramCardProps {
	size: "SMALL" | "MEDIUM" | "LARGE" | "TALL";
	title: string;
	imageUrl?: string;
	username?: string;
}

const InstagramCards = memo(({ size, title }: InstagramCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const mouseStartPosRef = useRef({ x: 0, y: 0 });
	const hoverTimeoutRef = useRef<NodeJS.Timeout>();
	const [hoverCardPosition, setHoverCardPosition] = useState({
		top: 0,
		left: 0,
	});

	const handleMouseEnter = (e: React.MouseEvent) => {
		mouseStartPosRef.current = { x: e.clientX, y: e.clientY };
		// Hover card'ı 200ms gecikme ile göster
		hoverTimeoutRef.current = setTimeout(() => {
			setIsHovered(true);
		}, 200);
	};

	const handleMouseLeave = () => {
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		setIsHovered(false);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isHovered) {
			const deltaX = Math.abs(e.clientX - mouseStartPosRef.current.x);
			const deltaY = Math.abs(e.clientY - mouseStartPosRef.current.y);

			// Eşik değerini 15 piksele çıkardık
			if (deltaX > 15 || deltaY > 15) {
				setIsHovered(false);
			}
		}
	};

	useEffect(() => {
		if (isHovered && cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect();
			setHoverCardPosition({
				top: rect.bottom + window.scrollY + 4,
				left: rect.left + window.scrollX,
			});
		}
	}, [isHovered]);

	// Component unmount olduğunda timeout'u temizle
	useEffect(() => {
		return () => {
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
			}
		};
	}, []);

	if (size === "SMALL") {
		return (
			<div
				ref={cardRef}
				className="relative"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}>
				<div
					className={`size-full bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 relative group`}>
					<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						<Trash className="w-10 h-10 text-black" />
					</div>
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

				{isHovered &&
					createPortal(
						<div
							className="fixed z-[999] w-[280px] bg-white border border-gray-200 rounded-xl shadow-lg p-4"
							style={{
								top: `${hoverCardPosition.top}px`,
								left: `${hoverCardPosition.left}px`,
							}}>
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-full bg-gray-100"></div>
									<div className="flex flex-col">
										<span className="font-medium text-sm">{title}</span>
										<span className="text-gray-500 text-xs">
											Instagram Account
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between border-t border-b border-gray-100 py-2">
									<div className="flex flex-col items-center">
										<span className="font-medium text-sm">1.2K</span>
										<span className="text-gray-500 text-xs">Posts</span>
									</div>
									<div className="flex flex-col items-center">
										<span className="font-medium text-sm">12.3K</span>
										<span className="text-gray-500 text-xs">Followers</span>
									</div>
									<div className="flex flex-col items-center">
										<span className="font-medium text-sm">321</span>
										<span className="text-gray-500 text-xs">Following</span>
									</div>
								</div>

								<p className="text-sm text-gray-600">
									Instagram account description goes here. This is a sample bio
									text.
								</p>
							</div>
						</div>,
						document.body
					)}
			</div>
		);
	}

	if (size === "MEDIUM") {
		return (
			<div
				className={`size-full bg-white rounded-3xl border border-gray-200 flex flex-row justify-between px-4 py-4 relative group`}>
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
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
				className={`size-full bg-white rounded-3xl border border-gray-200 flex gap-6 flex-col justify-between px-4 py-6 relative group`}>
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
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
				className={`size-full bg-white rounded-3xl border border-gray-200 flex flex-col justify-between px-4 py-6 relative group`}>
				<div className="remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white rounded-full w-8 h-8 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<Trash className="w-10 h-10 text-black" />
				</div>
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

InstagramCards.displayName = "InstagramCards";

export { InstagramCards };
