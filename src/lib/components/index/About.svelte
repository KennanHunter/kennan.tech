<script>
	import SectionHeader from "../common/SectionHeader.svelte";
</script>

<section>
	<SectionHeader id="about">About</SectionHeader>

	<div class="wrap">
		<p>
			Hi, my name is Kennan Hunter and I'm a passionate self taught
			developer from Bloomington Indiana. I mostly work on Full Stack Web
			Development. I'm very big into robotics, having competed in First
			Tech Challenge for 4 years.
		</p>
	</div>
</section>

<style>
	.wrap {
		display: grid;
		grid-template-columns: auto auto;
		min-height: 40%;
	}
	p {
		margin: 2em 5em;
	}
	@media only screen and (max-width: 800px) {
		p {
			margin: 2em 0.5em;
		}
	}
</style>
