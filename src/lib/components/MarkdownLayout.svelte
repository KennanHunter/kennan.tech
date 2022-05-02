<script>
	import Center from "$lib/components/Center.svelte";
	export let title;
	export let date;
</script>

<article>
	<Center>
		<h1>{title}</h1>
		{#if date}
			<h3>Written: {date}</h3>
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
</style>
