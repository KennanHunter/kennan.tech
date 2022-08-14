<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { globImport } from "./sitemap.xml";

	export const load: Load = async () => {
		const arr = globImport();

		return {
			props: {
				links: arr,
			},
		};
	};
</script>

<script>
	export let links;
</script>

<h1>SiteMap</h1>
<a href="https://kennan.tech/sitemap.xml" class="sweep">XML SiteMap</a>
<ul>
	{#each links as link}
		<li><a class="sweep" href={link}>{link}</a></li>
	{/each}
</ul>

<style>
	@import "../lib/styles/hover.scss";

	a {
		text-decoration: none;
		padding: 0.5em 0;
	}
</style>
