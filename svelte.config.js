import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import image from "svelte-image";
import preprocess from "svelte-preprocess";

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
			rehypePlugins: [rehypeSlug],
		}),
	],

	kit: {
		adapter: adapter({ out: "build" }),
		prerender: { default: true },
		alias: {
			$threejsm: "node_modules/three/examples/jsm",
		},
	},
};

export default config;
