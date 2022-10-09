<script>
	import SectionHeader from "../common/SectionHeader.svelte";
</script>

<section>
	<SectionHeader id="about">About</SectionHeader>

	<div class="wrap">
		<p>
			Hi, my name is Kennan Hunter and I'm a passionate self taught
			developer living in Bloomington Indiana. I mostly work on Full Stack
			Web Development. I've written on various programming topics at my
			<a href="/blog" class="sweep">Blog</a>.
		</p>
	</div>
</section>

<style lang="scss">
	@import "../../styles/hover.scss";
	.wrap {
		display: grid;
		grid-template-columns: auto auto;
		min-height: 40%;
	}
	.sweep {
		padding: 0.1em;
		text-decoration: none;
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
