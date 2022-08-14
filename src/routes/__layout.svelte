<script>
	import Footer from "$lib/components/common/Footer.svelte";
	import Nav from "$lib/components/common/Nav.svelte";
	import ToTop from "$lib/components/common/ToTop.svelte";

	import "$lib/styles/app.scss";
	import "@fontsource/fira-code";
</script>

<ToTop />

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin: 0 1em;
		height: 100%;
	}
</style>
