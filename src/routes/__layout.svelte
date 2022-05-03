<script>
	import Nav from "$lib/components/Nav.svelte";
	import "$lib/styles/app.scss";
</script>

<Nav />

<div>
	<slot />
</div>

<style>
	div {
		margin: 0 1em;
		height: 100%;
	}
</style>
