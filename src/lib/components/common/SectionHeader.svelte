<script lang="ts">
	import Line from "./Line.svelte";

	export let id;
</script>

<div>
	<h1 {id}><a href={"/#" + id}><slot /></a></h1>
	<Line />
</div>

<style>
	a {
		all: unset;
	}
	h1 {
		text-align: center;
	}
</style>
