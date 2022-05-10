<script context="module">
	/** @type {import('./blog/index.svelte').Load} */
	export async function load({ fetch }) {
		let postsRequest;
		await fetch("/blog/posts.json")
			.then((response) => response.json())
			.then((data) => {
				postsRequest = data;
			});

		return {
			props: {
				posts: postsRequest,
			},
		};
	}
</script>

<script>
	import Resume from "$lib/components/Resume.svelte";
	export let posts;
</script>

<Resume {posts} />
