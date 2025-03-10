"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Link, Quote, Image, Laptop, Smartphone } from "lucide-react";
import { useState } from "react";

function BottomNavigationBar({
	onImageUpload,
}: {
	onImageUpload: (imageUrl: string) => void;
}) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleImageUpload = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center items-center">
			<div className="bg-white border border-gray-200 rounded-2xl w-fit h-14 flex px-4 items-center">
				<div className="flex flex-row gap-4 items-center">
					<Button
						variant="outline"
						className="bg-green-400 hover:bg-green-400 text-white hover:text-white font-bold hover:border-green-500 transition-all duration-75 relative overflow-hidden shimmer-button rounded-lg px-6">
						<span className="relative z-10">Save</span>
					</Button>

					<Separator
						orientation="vertical"
						className="!h-8 !w-[1px] !bg-gray-200"
					/>

					<div className="flex items-center gap-4">
						<Link className="h-5 w-5 text-gray-600" />
						<div
							className="bg-orange-400 rounded-md p-1.5"
							onClick={handleImageUpload}>
							<Image className="h-4 w-4 text-white" />
						</div>
						<div className="bg-blue-400 rounded-md p-1.5">
							<Quote className="h-4 w-4 text-white" />
						</div>
						<div className="bg-blue-300 rounded-md p-1.5">
							<Image className="h-4 w-4 text-white" />
						</div>
						<div className="bg-gray-100 rounded-md p-1.5 flex items-center justify-center">
							<div className="grid grid-cols-2 gap-0.5">
								<div className="h-1 w-1 bg-gray-400 rounded-sm"></div>
								<div className="h-1 w-1 bg-gray-400 rounded-sm"></div>
								<div className="h-1 w-1 bg-gray-400 rounded-sm"></div>
								<div className="h-1 w-1 bg-gray-400 rounded-sm"></div>
							</div>
						</div>
					</div>

					<input
						type="file"
						ref={fileInputRef}
						className="hidden"
						accept="image/*"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) {
								const reader = new FileReader();
								reader.onloadend = () => {
									onImageUpload(reader.result as string);
								};
								reader.readAsDataURL(file);
							}
						}}
					/>

					<Separator
						orientation="vertical"
						className="!h-8 !w-[1px] !bg-gray-200"
					/>

					<div className="flex items-center gap-4">
						<Laptop className="h-6 w-6 text-black" />
						<Smartphone className="h-6 w-6 text-gray-400" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigationBar;
