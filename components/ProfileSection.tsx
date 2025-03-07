import React from "react";

function ProfileSection() {
	return (
		<div className="relative w-full rounded-3xl bg-gray-200 overflow-hidden md:sticky md:top-4">
			{/* Banner kısmı */}
			<div className="h-48 w-full bg-gradient-to-r from-gray-300 to-gray-200 relative">
				{/* Banner içeriği buraya eklenebilir */}
			</div>

			{/* Avatar kısmı */}
			<div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 top-48">
				<div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md">
					<div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
						{/* Kullanıcı ikonu */}
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
					</div>
				</div>
			</div>

			{/* Profil bilgileri */}
			<div className="pt-20 pb-6 px-4 flex flex-col items-center">
				<h2 className="text-xl font-bold text-gray-800">Kullanıcı Adı</h2>
				<p className="text-sm text-gray-500 mt-1">@kullanici</p>
			</div>
		</div>
	);
}

export default ProfileSection;
