<script lang="ts">
	import Center from "$lib/components/Center.svelte";
	export let title;
	export let date;
	export let technologies: string[];
</script>

<article>
	<Center>
		<h1>{title}</h1>
		{#if date}
			<h3>Written: {date}</h3>
		{/if}
		{#if technologies}
			<h4>Technologies:</h4>
			<ul>
				{#each technologies as tech}
					<a href={"/resume#" + encodeURIComponent(tech)}>
						<li>{tech}</li>
					</a>
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
	li {
		margin: 0 1em;
	}
	a {
		all: unset;
	}
</style>
