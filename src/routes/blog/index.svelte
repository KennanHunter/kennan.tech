<script context="module">
	/** @type {import('./blog/index.svelte').Load} */
	export async function load({ fetch }) {
		let postsRequest;
		await fetch("/blog/posts.json")
			.then((response) => response.json())
			.then((data) => {
				postsRequest = data;
			});

		console.log(postsRequest);

		return {
			props: {
				posts: postsRequest,
			},
		};
	}
</script>

<script>
	import BlogCard from "$lib/components/BlogCard.svelte";
	import Center from "$lib/components/Center.svelte";
	export let posts;
</script>

<Center>
	<h1>My Blog</h1>
	<p>
		Welcome to my blog, home of mediocre short to middle form tech writings
		and tutorials
	</p>

	<h2>Posts</h2>
	{#each posts as post}
		<BlogCard {...post} />
	{/each}
</Center>
