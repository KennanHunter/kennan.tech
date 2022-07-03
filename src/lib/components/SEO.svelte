<script lang="ts">
	export let title: string = "Kennan Hunter";
	export let description: string = "My personal blog";
	export let imageURL: string = "";
	export let technologies: string[] = [];
	export let keywords: string[] = [];
	export let author: string = "Kennan Hunter";
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
		content={["Blog", "Programming"].concat(keywords).join(" ")}
	/>
</svelte:head>
