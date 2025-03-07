export const CardTypes = {
	Instagram: "instagram",
	Twitter: "twitter",
	Linkedin: "linkedin",
	Facebook: "facebook",
	Youtube: "youtube",
	Twitch: "twitch",
	Discord: "discord",
	Telegram: "telegram",
	Spotify: "spotify",
	Catalog: "catalog",
};

export const cardData = {
	lg: [
		{
			i: "1",
			isResizable: true,
			type: CardTypes.Spotify,
			size: "TALL",
			title: "My Playlist",
			songCount: 15,
			imageUrl: "https://placehold.co/400x400",
			x: 3,
			y: 3,
			w: 1,
			h: 2,
		},
		{
			i: "2",
			isResizable: false,
			type: CardTypes.Instagram,
			size: "SMALL",
			title: "Instagram",
			imageUrl: "https://placehold.co/400x400",
			x: 1,
			y: 0,
			w: 1,
			h: 1,
		},
		{
			i: "3",
			isResizable: false,
			type: CardTypes.Spotify,
			size: "MEDIUM",
			title: "Daily Mix",
			songCount: 25,
			imageUrl: "https://placehold.co/400x400",
			x: 2,
			y: 0,
			w: 2,
			h: 1,
		},
		{
			i: "4",
			isResizable: false,
			type: CardTypes.Instagram,
			size: "MEDIUM",
			title: "Instagram Feed",
			imageUrl: "https://placehold.co/400x400",
			x: 1,
			y: 1,
			w: 2,
			h: 1,
		},
		{
			i: "5",
			isResizable: false,
			type: CardTypes.Spotify,
			size: "LARGE",
			title: "Spotify",
			songCount: 15,
			imageUrl: "https://placehold.co/400x400",
			x: 0,
			y: 2,
			w: 2,
			h: 2,
		},
		{
			i: "6",
			isResizable: false,
			type: CardTypes.Instagram,
			size: "LARGE",
			title: "Instagram",
			imageUrl: "https://placehold.co/400x400",
			x: 2,
			y: 2,
			w: 2,
			h: 2,
		},
		{
			i: "7",
			isResizable: false,
			type: CardTypes.Instagram,
			size: "TALL",
			title: "Instagram",
			imageUrl: "https://placehold.co/400x400",
			x: 3,
			y: 0,
			w: 1,
			h: 2,
		},
		{
			i: "8",
			isResizable: false,
			type: CardTypes.Spotify,
			size: "LARGE",
			title: "Spotify",
			songCount: 15,
			songs: [
				{ title: "Yerle Yeksan", artist: "Merve Özbey", duration: "2:54" },
				{ title: "Nazar", artist: "Demet Akalın", duration: "3:16" },
				{ title: "Heat Waves", artist: "Glass Animals", duration: "3:16" },
				{ title: "Balada", artist: "Gusttavo Lima", duration: "3:21" },
			],
			x: 3,
			y: 2,
			w: 2,
			h: 2,
		},
		{
			i: "9",
			isResizable: false,
			type: CardTypes.Catalog,
			size: "LARGE",
			title: "Catalog Large",
			imageUrl: "https://placehold.co/400x400",
			x: 0,
			y: 4,
			w: 2,
			h: 2,
		},
		{
			i: "10",
			isResizable: false,
			type: CardTypes.Catalog,
			size: "MEDIUM",
			title: "Catalog Medium",
			imageUrl: "https://placehold.co/400x400",
			x: 2,
			y: 4,
			w: 2,
			h: 1,
		},
		{
			i: "11",
			isResizable: false,
			type: CardTypes.Catalog,
			size: "SMALL",
			title: "Catalog Small",
			imageUrl: "https://placehold.co/400x400",
			x: 0,
			y: 6,
			w: 1,
			h: 1,
		},
		{
			i: "12",
			isResizable: false,
			type: CardTypes.Catalog,
			size: "TALL",
			title: "Catalog Tall",
			imageUrl: "https://placehold.co/400x400",
			x: 1,
			y: 6,
			w: 1,
			h: 2,
		},
		{
			i: "13",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "LARGE",
			title: "Youtube",
			channelName: "@youtube channel",
			imageUrl: "https://placehold.co/1200x630",

			x: 0,
			y: 8,
			w: 2,
			h: 2,
		},
		{
			i: "14",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "MEDIUM",
			title: "Youtube",
			channelName: "@youtube channel",
			imageUrl: "https://placehold.co/400x400",
			x: 2,
			y: 8,
			w: 2,
			h: 1,
		},
		{
			i: "15",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "SMALL",
			title: "Youtube",
			channelName: "@youtube channel",
			imageUrl: "https://placehold.co/400x400",
			x: 0,
			y: 10,
			w: 1,
			h: 1,
		},
		{
			i: "16",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "TALL",
			title: "Youtube",
			channelName: "@youtube channel",
			// videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
			imageUrl: "https://placehold.co/400x400",
			x: 1,
			y: 10,
			w: 1,
			h: 2,
		},
		{
			i: "17",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "TALL",
			title: "Youtube",
			imageUrl: "https://placehold.co/400x400",
			videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			x: 2,
			y: 10,
			w: 1,
			h: 2,
		},
		{
			i: "18",
			isResizable: false,
			type: CardTypes.Youtube,
			size: "SMALL",
			title: "Youtube",
			imageUrl: "https://placehold.co/400x400",
			videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			x: 3,
			y: 10,
			w: 1,
			h: 1,
		},
		{
			i: "19",
			isResizable: false,
			type: CardTypes.Linkedin,
			size: "SMALL",
			title: "Linkedin",
			x: 0,
			y: 0,
			w: 1,
			h: 1,
		},
		{
			i: "20",
			isResizable: false,
			type: CardTypes.Linkedin,
			size: "MEDIUM",
			title: "Linkedin",
			imageUrl: "https://placehold.co/400x400",
			x: 1,
			y: 12,
			w: 2,
			h: 1,
		},
		{
			i: "21",
			isResizable: false,
			type: CardTypes.Linkedin,
			size: "TALL",
			title: "Linkedin",
			imageUrl: "https://placehold.co/400x400",
			x: 3,
			y: 12,
			w: 1,
			h: 2,
		},
		{
			i: "22",
			isResizable: false,
			type: CardTypes.Linkedin,
			size: "LARGE",
			title: "Linkedin",
			imageUrl: "https://placehold.co/1200x630",
			x: 0,
			y: 14,
			w: 2,
			h: 2,
		},
		{
			i: "23",
			isResizable: false,
			type: CardTypes.Spotify,
			size: "SMALL",
			title: "Spotify",
			songArtist: "Cem Karaca",
			x: 2,
			y: 14,
			w: 1,
			h: 1,
		},
	],
};
