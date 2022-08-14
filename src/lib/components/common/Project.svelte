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
	let innerWidth;
	let order;
	$: order = (reverse && innerWidth > 800) || innerWidth < 800;
</script>

<svelte:window bind:innerWidth />

<div class="grid">
	<div>
		<h1>{title}</h1>
		<div class="description">{description}</div>

		<div class="links">
			{#each links as link}
				<a class="sweep" href={link.href}>{link.text}</a>
			{/each}
		</div>
	</div>
	<div class="slot" style={order ? "order: -2" : ""}>
		<Center>
			<slot />
		</Center>
	</div>
</div>

<style lang="scss">
	@import "../../styles/variables.scss";
	@import "../../styles/hover.scss";
	.grid {
		display: flex;
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
		min-width: 50%;
		width: fit-content;
	}

	@media only screen and (max-width: 800px) {
		.grid {
			flex-direction: column;
			.slot {
				width: 100%;
				order: -2;
			}
		}
	}
</style>
