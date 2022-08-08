<script>
	import Line from "./Line.svelte";

	export const id = "";
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
