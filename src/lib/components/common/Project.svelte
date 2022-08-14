<script lang="ts">
	import Center from "./Center.svelte";

	interface Link {
		text: string;
		href: string;
	}
	export let title: string;
	export let description: string;
	export let links: Link[];
	export let reverse: boolean = false;
</script>

<div class="grid">
	<div style={reverse ? "grid-column-start: 2" : "grid-column-start: 1"}>
		<h1>{title}</h1>
		<div class="description">{description}</div>

		<div class="links">
			{#each links as link}
				<a class="sweep-to-right" href={link.href}>{link.text}</a>
			{/each}
		</div>
	</div>
	<div
		class="slot"
		style={reverse ? "grid-column-start: 1" : "grid-column-start: 2"}
	>
		<Center>
			<slot />
		</Center>
	</div>
</div>

<style lang="scss">
	@import "../../styles/variables.scss";
	@import "../../styles/hover.scss";
	.grid {
		display: grid;
		grid-template-columns: 50% auto;
		padding: 1em;
		margin: 1em;
		border: $text solid 0.1em;
	}
	h1 {
		margin: 0;
		margin-bottom: 1em;
	}
	.links {
		display: flex;
		width: 100%;
		gap: 1em;
		margin-top: 1em;
		a {
			text-decoration: none;
			padding: 0.2em;
		}
	}
	.slot {
		grid-row-start: 1;
	}
</style>
