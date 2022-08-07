<script lang="ts">
	import Giscus from "@giscus/svelte";
	import { onMount } from "svelte";
	import Line from "../common/Line.svelte";

	let successful = true;
	let fetchIteration = 0;

	async function fetchGithub() {
		return await fetch("https://api.github.com/api/")
			.then(() => {
				successful = true;
			})
			.catch(() => {
				successful = false;
				setTimeout(async () => {
					if (fetchIteration !== 9) fetchIteration++;
					await fetchGithub();
				}, 5000 / Math.abs(fetchIteration - 10));
			});
	}
	onMount(() => {
		fetchGithub();
	});
</script>

<!-- Used to jump down to comments -->
<div id="comments" />

{#if successful}
	<!-- cSpell:disable  -->
	<Giscus
		repo="kennanhunter/kennan.tech"
		repoId="MDEwOlJlcG9zaXRvcnkzMjk3MzA0MDc="
		category="Announcements"
		categoryId="DIC_kwDOE6dJZ84CP_sB"
		mapping="title"
		reactionsEnabled="1"
		emitMetadata="0"
		inputPosition="top"
		theme="dark"
		lang="en"
		loading="lazy"
	/>
{:else}
	<div class="down">
		<Line />
		<h1>:(</h1>
		<h3>Comments seem to be down.</h3>
	</div>
{/if}

<style lang="scss">
	.down {
		width: 100%;
		h1 {
			margin-top: 1em;
		}
	}
</style>
