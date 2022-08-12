<script lang="ts">
	import Line from "./Line.svelte";

	export let id;
</script>

<div>
	<h1 {id}><slot /></h1>
	<Line />
</div>

<style>
	h1 {
		text-align: center;
	}
</style>
