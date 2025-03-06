import { useState, useEffect, RefObject } from "react";

// Hover pozisyonu için type
interface HoverPosition {
	top: number;
	left: number;
}

// Hook için props type
interface UseHoverCardProps {
	ref: RefObject<HTMLElement>;
	isDragging?: boolean;
}

export const useHoverCard = ({ ref, isDragging }: UseHoverCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [hoverCardPosition, setHoverCardPosition] = useState<HoverPosition>({
		top: 0,
		left: 0,
	});

	// Hover pozisyonunu güncelle
	useEffect(() => {
		if (isHovered && ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHoverCardPosition({
				top: rect.bottom + window.scrollY + 4,
				left: rect.left + window.scrollX,
			});
		}
	}, [isHovered, ref]);

	// Sürükleme durumunda hover'ı kapat
	useEffect(() => {
		if (isDragging) {
			setIsHovered(false);
		}
	}, [isDragging]);

	const handleMouseEnter = () => {
		if (!isDragging) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return {
		isHovered,
		hoverCardPosition,
		handleMouseEnter,
		handleMouseLeave,
	};
};
