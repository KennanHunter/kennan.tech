<script>
	let scrollY;
</script>

<a href="#top" style={scrollY >= 400 ? "display: block" : "display: none"}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40"
		height="40"
		fill="currentColor"
		class="absolute bi bi-chevron-up"
		viewBox="0 0 16 16"
	>
		<path
			fill-rule="evenodd"
			d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
		/>
	</svg>
</a>

<svelte:window bind:scrollY />

<style lang="scss">
	@import "../../styles/variables.scss";

	.absolute {
		position: fixed;
		right: 2em;
		bottom: 2em;
		color: $text;
		background-color: $bg;
		z-index: 100;
		padding: 0.2em;
		border: $text 0.1em solid;
		border-radius: 0.4em;
	}
	.absolute :hover {
		border-radius: 1em;
	}
</style>
