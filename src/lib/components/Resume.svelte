<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import BlogCard from "./BlogCard.svelte";
	import CenterVertically from "./CenterVertically.svelte";
	import Line from "./Line.svelte";

	export let posts = [];

	let technology: string;
	let sortedPosts = [];

	onMount(() => {
		if ($page.url.hash) {
			technology = decodeURIComponent($page.url.hash.split("#")[1]);
		}
	});
	$: if (technology) {
		if (
			$page.url.pathname === "/resume" ||
			$page.url.pathname === "/resume/"
		) {
			window.history.replaceState(
				{},
				"",
				"/resume#" + encodeURIComponent(technology)
			);
		}

		sortedPosts = posts.filter((value) => {
			console.log(value);
			return (value.technologies as Array<string>).find((value) => {
				return value === technology;
			});
		});
	}

	function selectTech(e) {
		if (e.target.id) {
			technology = decodeURIComponent(e.target.id);
		}
	}
</script>

<section id="resume">
	<div>
		<h3>Student level experience with</h3>
		<ul on:click={selectTech}>
			<li id="Javascript">
				Javascript/Typescript on browsers and NodeJS
			</li>
			<li id="GraphQL">GraphQL</li>
			<li id="API">Backend Api Development</li>
			<li id="Frontend">
				Frontend Frameworks such as
				<ul>
					<li id="Svelte">Svelte</li>
				</ul>
			</li>
			<li id={encodeURIComponent("Dynamic Programming")}>
				Dynamic programming patterns
			</li>
			<li id="Python">Python Scripting</li>
		</ul>
	</div>
	<!-- Only visable if small screen -->
	<div class="line">
		<Line />
	</div>
	<div id="blog-posts">
		{#if technology}
			<h3>
				Blog posts for {technology}
			</h3>
			<ul>
				{#each sortedPosts as post}
					<BlogCard {...post} />
				{:else}
					<CenterVertically>
						<h1>:(</h1>
						<p>Doesn't look like theres any blog posts yet</p>
					</CenterVertically>
				{/each}
			</ul>
		{:else}
			<h3>Click technology to view posts</h3>
		{/if}
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: auto auto;
	}
	.line {
		display: none;
	}
	@media only screen and (max-width: 800px) {
		section {
			grid-template-columns: auto;
		}
		.line {
			display: initial;
			width: 100%;
		}
	}
	ul {
		list-style: square;
	}
	li {
		margin: 0.4em 0;
	}
	h3 {
		text-align: left;
	}
</style>
