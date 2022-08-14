<script>
	import SectionHeader from "../common/SectionHeader.svelte";
</script>

<section>
	<SectionHeader id="about">About</SectionHeader>

	<div class="wrap">
		<p>Hi</p>
	</div>
</section>

<style>
	.wrap {
		display: grid;
		grid-template-columns: auto auto;
		min-height: 40%;
	}
</style>
