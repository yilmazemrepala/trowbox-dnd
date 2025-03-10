"use client";
import React, { useState, useCallback } from "react";
import { FileUploadWrapper } from "./FileUploadWrapper";
import { Mail, QrCode, UserRoundPlus, Globe } from "lucide-react";

function ProfileSection() {
	const [bannerImage, setBannerImage] = useState<string | null>(null);
	const [profileImage, setProfileImage] = useState<string | null>(null);

	const handleBannerUpload = useCallback((file: File) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			setBannerImage(e.target?.result as string);
		};
		reader.readAsDataURL(file);
	}, []);

	const handleProfileUpload = useCallback((file: File) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			setProfileImage(e.target?.result as string);
		};
		reader.readAsDataURL(file);
	}, []);

	return (
		<div className="relative w-full rounded-3xl border overflow-hidden md:sticky md:top-4">
			{/* Banner kısmı */}
			<FileUploadWrapper onFileSelect={handleBannerUpload} className="relative">
				<div
					className="h-48 w-full relative"
					style={{
						backgroundColor: !bannerImage ? "rgb(229 231 235)" : undefined,
						backgroundImage: bannerImage
							? `url(${bannerImage})`
							: "linear-gradient(to right, rgb(209 213 219), rgb(229 231 235))",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</FileUploadWrapper>

			{/* Avatar kısmı */}
			<div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 top-48">
				<FileUploadWrapper
					onFileSelect={handleProfileUpload}
					overlayClassName="rounded-full"
					hoverText="Click or Drag and Drop"
					isRounded>
					<div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md">
						<div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
							{profileImage ? (
								<img
									src={profileImage}
									alt="Profile"
									className="size-full object-cover"
								/>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-20 h-20 text-gray-400">
									<path
										fillRule="evenodd"
										d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</div>
					</div>
				</FileUploadWrapper>
			</div>

			{/* Profil bilgileri */}
			<div className="pt-20 pb-6 px-4 flex flex-col items-center">
				<div className="grid grid-cols-4 gap-4 mt-4 w-[392px]">
					<div className="flex flex-col items-center justify-center border border-[#323232] rounded-3xl p-4 hover:bg-[#323232] group transition-all duration-300">
						<div className="text-[#323232] mb-2 group-hover:text-white">
							<Globe size={20} />
						</div>
						<span className="text-[#323232] text-sm font-medium group-hover:text-white">
							Website
						</span>
					</div>

					<div className="flex flex-col items-center justify-center border border-[#007AFF] rounded-3xl p-4 hover:bg-[#007AFF] group transition-all duration-300">
						<div className="text-[#007AFF] mb-2 group-hover:text-white">
							<Mail size={20} />
						</div>
						<span className="text-[#007AFF] text-sm font-medium group-hover:text-white">
							E-posta
						</span>
					</div>

					<div className="flex flex-col items-center justify-center border border-[#8E8E93] rounded-3xl p-4 hover:bg-[#8E8E93] group transition-all duration-300">
						<div className="text-[#8E8E93] mb-2 group-hover:text-white">
							<QrCode size={20} />
						</div>
						<span className="text-[#8E8E93] text-sm font-medium group-hover:text-white">
							QR
						</span>
					</div>

					<div className="flex flex-col items-center justify-center border border-[#FF9500] rounded-3xl p-4 hover:bg-[#FF9500] group transition-all duration-300">
						<div className="text-[#FF9500] mb-2 group-hover:text-white">
							<UserRoundPlus size={20} />
						</div>
						<span className="text-[#FF9500] text-sm font-medium group-hover:text-white">
							Kaydet
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileSection;
