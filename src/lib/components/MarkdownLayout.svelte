<script lang="ts">
	import Center from "$lib/components/Center.svelte";
	import Tag from "./Tag.svelte";
	import Image from "svelte-image";
	export let title;
	export let date;
	export let technologies;
	export let image = "";
</script>

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
	</Center>
</article>

<style>
	div {
		max-width: 40em;
		text-align: left;
	}
	ul {
		display: flex;
	}
	h4 {
		margin: 0;
	}
</style>
