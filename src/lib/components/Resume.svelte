<script lang="ts">
	import BlogCard from "./BlogCard.svelte";
	import Line from "./Line.svelte";
	let technology;
	let posts = [];

	$: if (technology) {
	}

	function selectTech(e) {
		if (e.target.id) {
			technology = (e.target.id as string).replace("_", " ");
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
					<li />
					<li />
				</ul>
			</li>
			<li id={"Dynamic_Programming"}>Dynamic programming patterns</li>
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
				{#each posts as blog}
					<!-- <BlogCard /> -->
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
	li {
		margin: 0.4em 0;
	}
	h3 {
		text-align: left;
	}
</style>
