export interface CardProps {
	i: string;
	type: string;
	isResizable: boolean;
	size: "TALL" | "SMALL" | "MEDIUM" | "LARGE" | "BANNER";
	title: string;
	songCount?: number;
	imageUrl?: string;
	channelName?: string;
	videoUrl?: string;
	songArtist?: string;
	songs?: {
		title: string;
		artist: string;
		duration: string;
	}[];
	x: number;
	y: number;
	w: number;
	h: number;
	keyProp?: string;
	isDragging?: boolean;
}
