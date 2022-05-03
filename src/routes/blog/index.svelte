<!-- <script context="module">
	/** @type {import('./blog/index.svelte').Load} */
	export async function load({ fetch }) {
        let postsRequest = await fetch()

		return {
			props: {
				posts: "",
			},
		};
	}
</script> -->
<script>
	import Center from "$lib/components/Center.svelte";
	// export let posts;
</script>

<Center>
	<h1>My Blog</h1>
	<p>
		Welcome to my blog, home of mediocre short to middle form tech writings
		and tutorials
	</p>
</Center>
