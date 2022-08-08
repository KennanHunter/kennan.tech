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
	import Card from "$lib/components/index/Card.svelte";
	import Skills from "$lib/components/index/Skills.svelte";
	import type { Post } from "$lib/functions/posts";
	import Projects from "$lib/components/index/Projects.svelte";

	export let posts: Post[];
</script>

<Card />

<About />
<Skills />

<Projects />
