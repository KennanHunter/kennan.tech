<script>
	import Line from "./Line.svelte";
</script>

<nav>
	<h1>Kennan Hunter</h1>
	<ul>
		<a href="/">
			<li>Index</li>
		</a>
		<a href="/resume/">
			<li>Resume</li>
		</a>
		<a href="/blog/">
			<li>Blog</li>
		</a>
		<a href="/links/">
			<li>Links</li>
		</a>
	</ul>
</nav>
<Line />

<style lang="scss">
	@use "../styles/variables.scss";
	a {
		all: unset;
	}
	nav {
		padding: 0 1em;
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
</style>
