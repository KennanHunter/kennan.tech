<script>
	import Image from "svelte-image";
	import Tag from "./Tag.svelte";
	export let title = "Untitled Post";
	export let description;
	export let image;
	export let technologies;
	export let publishedAt;
	export let url;
	let dateString;

	$: dateString = new Date(publishedAt).toDateString();
</script>

<a href={url}>
	<article>
		{#if image}
			<Image width="100" src={image} />
		{/if}
		<h1>{title}</h1>
		<p>
			Published On: {dateString}
		</p>
		{#if description}
			<p>{description}</p>
		{/if}
		<div class="technology">
			{#each technologies as technology}
				<Tag {technology} />
			{/each}
		</div>
	</article>
</a>

<style>
	a {
		all: inherit;
	}
	h1:hover {
		font-weight: 1000;
	}
</style>
