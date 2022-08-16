<script lang="ts">
	import Line from "./Line.svelte";

	export let id;
</script>

<div>
	<h1 {id}><a href={"/#" + id}><slot /></a></h1>
	<Line />
</div>

<style lang="scss">
	@import "../../styles/variables.scss";

	a {
		all: unset;
	}
	h1 {
		text-align: center;
	}
	h1 :focus-within {
		border: 0.1em solid $blue;
		border-radius: 0.1em;
		padding: 0.1em;
	}
</style>
