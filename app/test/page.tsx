"use client";

import { useState } from "react";
import Layout from "@/components/layout";

export enum TabKey {
	Home = "Home",
	Work = "Work",
	Blog = "Blog",
	Contact = "Contact",
}

export default function Test() {
	const [tab, setTab] = useState<TabKey>(TabKey.Home);
	const [x, setX] = useState(0);
	const [w, setW] = useState(0);
	return (
		<div>
			<Layout tab={tab} setTab={setTab} left={x} sliderWidth={w} />
		</div>
	);
}
