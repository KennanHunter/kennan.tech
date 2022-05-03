<script>
	import Line from "./Line.svelte";
</script>

<nav>
	<a href="/"><h1>Kennan Hunter</h1></a>
	<div>
		<ul>
			<a href="/resume/">
				<li>Resume</li>
			</a>
			<a href="/blog/">
				<li>Blog</li>
			</a>
			<a href="/contact/">
				<li>Contact</li>
			</a>
		</ul>
		<ul>
			<a href="https://github.com/kennanhunter/kennan.tech">
				<li>Github</li>
			</a>
		</ul>
	</div>
</nav>
<Line />

<style lang="scss">
	@use "../styles/variables.scss";
	a {
		all: unset;
	}
	nav {
		padding: 0 1em;
		display: flex;
		align-items: center;
	}
	h1 {
		display: inline-block;
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		margin-left: 1em;
		display: inline-flex;
		height: 100%;
	}
	li {
		padding: 1.5em 1em;
		list-style: none;
	}
	li:hover {
		background-color: variables.$purple;
	}
	div {
		display: inline-flex;
		justify-content: space-between;
		flex-grow: 1;
	}
</style>
