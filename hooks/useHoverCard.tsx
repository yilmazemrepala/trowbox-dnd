import { useState, useEffect, RefObject, useCallback } from "react";
import { debounce } from "lodash";
import { useSpring, animated } from "@react-spring/web";

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

	useEffect(() => {
		const handleDragStart = () => setIsHovered(false);
		const handleDragEnd = () => setIsHovered(true);

		window.addEventListener("dragstart", handleDragStart);
		window.addEventListener("dragend", handleDragEnd);

		return () => {
			window.removeEventListener("dragstart", handleDragStart);
			window.removeEventListener("dragend", handleDragEnd);
		};
	}, []);

	const handleMouseEnter = useCallback(
		debounce(() => {
			if (!isDragging) {
				setIsHovered(true);
			}
		}, 50),
		[isDragging]
	);

	const handleMouseLeave = useCallback(
		debounce(() => {
			setIsHovered(false);
		}, 50),
		[]
	);

	return {
		isHovered,
		hoverCardPosition,
		handleMouseEnter,
		handleMouseLeave,
	};
};
const Card = ({ size }) => {
	const [springs, api] = useSpring(() => ({
		width: size === "SMALL" ? 200 : 400,
		height: size === "TALL" ? 400 : 200,
	}));

	useEffect(() => {
		api.start({
			width: size === "SMALL" ? 200 : 400,
			height: size === "TALL" ? 400 : 200,
		});
	}, [size, api]);

	return (
		<animated.div style={springs} className="card">
			{/* Kart içeriği */}
		</animated.div>
	);
};
