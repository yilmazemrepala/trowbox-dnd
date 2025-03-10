"use client";
import React, { useCallback, useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogAction,
	AlertDialogCancel,
} from "@/components/ui/alert-dialog";

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
	const [isCropperOpen, setIsCropperOpen] = useState(false);
	const [cropperImage, setCropperImage] = useState<string>("");
	const [originalFileName, setOriginalFileName] = useState<string>("");
	const cropperRef = useRef<ReactCropperElement>(null);

	const handleCrop = () => {
		const cropper = cropperRef.current?.cropper;
		if (cropper) {
			const croppedCanvas = cropper.getCroppedCanvas();
			croppedCanvas.toBlob((blob) => {
				if (blob) {
					const file = new File([blob], originalFileName, {
						type: "image/jpeg",
					});
					onFileSelect(file);
					setIsCropperOpen(false);
				}
			}, "image/jpeg");
		}
	};

	const processFile = (file: File) => {
		const reader = new FileReader();
		reader.onload = () => {
			setCropperImage(reader.result as string);
			setOriginalFileName(file.name);
			setIsCropperOpen(true);
		};
		reader.readAsDataURL(file);
	};

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
				processFile(files[0]);
			}
		},
		[onFileSelect]
	);

	const handleFileInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (files && files.length > 0) {
				processFile(files[0]);
			}
		},
		[onFileSelect]
	);

	return (
		<>
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

			<AlertDialog open={isCropperOpen} onOpenChange={setIsCropperOpen}>
				<AlertDialogContent className="max-w-3xl">
					<AlertDialogHeader>
						<AlertDialogTitle>Crop Image</AlertDialogTitle>
						<AlertDialogDescription>
							Please crop your image to the desired size.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<div className="border rounded-lg overflow-hidden bg-gray-50">
						<Cropper
							src={cropperImage}
							style={{ height: 400, width: "100%" }}
							initialAspectRatio={1}
							guides={true}
							ref={cropperRef}
							viewMode={1}
							background={false}
							autoCropArea={1}
							className="rounded-lg"
						/>
					</div>
					<AlertDialogFooter className="flex gap-2">
						<AlertDialogCancel onClick={() => setIsCropperOpen(false)}>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction onClick={handleCrop}>
							Crop & Save
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
