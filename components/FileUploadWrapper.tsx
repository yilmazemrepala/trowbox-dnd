"use client";
import React, { useCallback } from "react";

interface FileUploadWrapperProps {
	onFileSelect: (file: File) => void;
	children: React.ReactNode;
	className?: string;
	hoverText?: string;
	overlayClassName?: string;
	isRounded?: boolean;
}

export function FileUploadWrapper({
	onFileSelect,
	children,
	className = "",
	hoverText = "Click or Drag and Drop",
	overlayClassName = "",
	isRounded = false,
}: FileUploadWrapperProps) {
	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			const files = e.dataTransfer.files;
			if (files && files.length > 0) {
				onFileSelect(files[0]);
			}
		},
		[onFileSelect]
	);

	const handleFileInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (files && files.length > 0) {
				onFileSelect(files[0]);
			}
		},
		[onFileSelect]
	);

	return (
		<label className={`cursor-pointer group relative ${className}`}>
			<input
				type="file"
				className="hidden"
				accept="image/*"
				onChange={handleFileInput}
			/>
			<div
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				className="w-full h-full">
				{children}
				<div
					className={`absolute inset-0 ${overlayClassName} bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center`}>
					<span
						className={`text-white size-full flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-blue-500/50 px-4 py-2 ${
							isRounded ? "rounded-full" : "rounded-lg"
						}`}>
						{hoverText}
					</span>
				</div>
			</div>
		</label>
	);
}
