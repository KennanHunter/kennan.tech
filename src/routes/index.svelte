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

<script lang="ts">
	import "$lib/styles/variables.scss";

	import About from "$lib/components/index/About.svelte";
	import Projects from "$lib/components/index/Projects.svelte";
	import Skills from "$lib/components/index/Skills.svelte";
	import Hero from "$lib/components/index/Hero.svelte";

	// export let posts: Post[];
</script>

<Hero />

<About />
<Skills />

<Projects />
