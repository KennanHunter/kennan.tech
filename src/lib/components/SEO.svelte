<script lang="ts">
	export let title: string = "Kennan Hunter";
	export let description: string = "My personal blog";
	export let imageURL: string = "";
	export let technologies: string[] = [];
	export let keywords: string[] = [];
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<title>{title}</title>
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageURL} />
	<meta
		name="keywords"
		content={["Blog", "Programming"].concat(keywords).join(" ")}
	/>
</svelte:head>
