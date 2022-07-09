<script lang="ts">
	import Center from "$lib/components/Center.svelte";
	import Comments from "$lib/components/Comments.svelte";
	import Seo from "$lib/components/SEO.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import "$lib/styles/syntax.scss";
	import Image from "svelte-image";
	import Copyright from "./Copyright.svelte";

	export let title;
	export let date;
	export let technologies;
	export let description = "";
	export let image = "";
</script>

<svelte:head><title>{title}</title></svelte:head>

<Seo {title} {technologies} {description} keywords={technologies} />
<article>
	<Center>
		{#if image}
			<Image src={image} />
		{/if}
		<h1>{title}</h1>
		{#if date}
			<h3>Written: {date}</h3>
		{/if}
		{#if technologies}
			<h4>Technologies:</h4>
			<ul>
				{#each technologies as tech}
					<Tag technology={tech} />
				{/each}
			</ul>
		{/if}
		<div>
			<slot />
			<Copyright />
		</div>
		<Comments />
	</Center>
</article>

<style lang="scss">
	@import "../styles/variables.scss";
	div {
		max-width: 45em;
		text-align: left;
	}
	@media only screen and (max-width: 800px) {
		div {
			max-width: 100%;
		}
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	h4 {
		margin: 0;
	}
</style>
