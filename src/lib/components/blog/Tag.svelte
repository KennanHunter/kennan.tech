<script lang="ts">
	export let technology: string;
</script>

<div>
	<a href={"/blog/#" + encodeURIComponent(technology)}>
		{"#" + technology}
	</a>
</div>

<style lang="scss">
	@use "../../styles/variables.scss";
	a {
		all: unset;
		margin: 0 0.7em;
		color: variables.$yellow;
	}
	div {
		display: inline-block;
	}
</style>
