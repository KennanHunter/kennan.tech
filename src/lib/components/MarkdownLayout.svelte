<script lang="ts">
	import Center from "$lib/components/Center.svelte";
	import "$lib/styles/syntax.scss";
	import Giscus from "@giscus/svelte";
	import Image from "svelte-image";
	import Seo from "./SEO.svelte";
	import Tag from "./Tag.svelte";
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
		</div>
		<Giscus
			repo="kennanhunter/kennan.tech"
			repoId="MDEwOlJlcG9zaXRvcnkzMjk3MzA0MDc="
			category="Announcements"
			categoryId="DIC_kwDOE6dJZ84CP_sB"
			mapping="title"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="dark"
			lang="en"
			loading="lazy"
		/>
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
	}
	h4 {
		margin: 0;
	}
</style>
