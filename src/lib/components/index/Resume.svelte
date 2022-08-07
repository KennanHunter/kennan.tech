<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import BlogCard from "../blog/BlogCard.svelte";
	import CenterVertically from "../common/CenterVertically.svelte";
	import Line from "../common/Line.svelte";

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
			return (value.technologies as Array<string>).find((value) => {
				return value === technology;
			});
		});
	}

	function selectTech(e) {
		if (e.target) {
			let res = selectTechFromElement(e.target);
			if (res) {
				technology = decodeURIComponent(res);
			}
		}
	}
	function selectTechFromElement(e: HTMLElement, iteration = 0): string {
		if (e.id && e.classList.contains("tech")) {
			return e.id;
		} else {
			if (iteration < 5) {
				return selectTechFromElement(e.parentElement, iteration + 1);
			} else {
				return undefined;
			}
		}
	}
</script>

<section id="resume">
	<div>
		<h3>Student level experience with</h3>
		<ul on:click={selectTech}>
			<li id="Javascript" class="tech">
				Javascript/Typescript on browsers and NodeJS
			</li>
			<li id="Java" class="tech">Java</li>
			<li id="Python" class="tech">Python Scripting and Development</li>
			<li id="Frontend" class="tech">
				Frontend Javascript Frameworks such as
				<ul>
					<li id="React" class="tech">React</li>
					<li id="Svelte" class="tech">Svelte</li>
				</ul>
			</li>
			<li id="GraphQL" class="tech">GraphQL</li>
			<li id="Rest" class="tech">Rest Apis</li>
			<li id="Linux" class="tech">Linux</li>
		</ul>
		<h3>Accolades</h3>
		<ul on:click={selectTech}>
			<li id="TSA" class="tech">
				1st place for Rhode Island, Massachusets, and Connecticut for
				Technology Student Association Compsci 2022
			</li>
			<li id={encodeURIComponent("First Tech Challenge")} class="tech">
				<h4>First Tech Challenge</h4>
				<ul>
					<li>
						Programmer for Rhode Island Winning Alliance Captain and
						Inspire Award (1st and 2nd Place) 2021
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- Only visible if small screen -->
	<div class="line">
		<Line />
	</div>
	<div id="blog-posts">
		{#if technology}
			<h3>
				Blog posts for {technology}
			</h3>
			<ul class="no-pad">
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

<style lang="scss">
	.no-pad {
		padding: 0;
	}
	section {
		display: grid;
		grid-template-columns: 50% auto;
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
