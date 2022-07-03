<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageURL: string = "";
	export let technologies: string[] = [];
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<title>{title}</title>
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageURL} />
</svelte:head>
