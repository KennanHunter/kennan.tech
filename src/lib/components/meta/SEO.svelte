<script lang="ts">
	import { serializeSchema } from "$lib/functions/serializeStructuredData";

	export let title: string = "Kennan Hunter";
	export let description: string =
		"Kennan Hunter's personal website, blog, and portfolio. \
		Learn about me, a Software Developer out of Bloomington Indiana.";
	export let imageURL: string = "https://kennan.tech/favicon.svg";
	export let keywords: string[] = [];
	export let author: string = "Kennan Hunter";

	export let ldJSON = {};
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<title>{title}</title>
	<meta property="og:description" content={description} />
	<meta property="description" content={description} />
	<meta property="og:image" content={imageURL} />
	<meta name="author" content={author} />
	<meta
		name="keywords"
		content={["Blog", "Programming", "Software Developer", "Hire"]
			.concat(keywords)
			.join(" ")}
	/>

	{#if ldJSON}
		{@html serializeSchema({
			"@context": "https://schema.org",
			...ldJSON,
		})}
	{/if}
</svelte:head>
