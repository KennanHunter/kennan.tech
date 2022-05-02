import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import image from "svelte-image";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({}),
		mdsvex({
			extensions: [".md"],
			layout: "./src/lib/components/MarkdownLayout.svelte",
		}),
		image(),
	],

	kit: {
		adapter: adapter(),
		prerender: { default: true },
	},
};

export default config;
