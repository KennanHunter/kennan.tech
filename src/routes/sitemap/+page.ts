import type { Load } from "@sveltejs/kit";
import { globImport } from "../sitemap.xml/+server";

export const load: Load = async () => {
	const arr = globImport();

	return {
		links: arr,
	};
};
