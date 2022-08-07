<script>
	import Line from "./Line.svelte";
</script>

<div class="wrap">
	<nav>
		<a href="/"><h1>Kennan Hunter</h1></a>
		<!-- <div>
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
			<ul class="github">
				<a href="https://github.com/kennanhunter/kennan.tech">
					<li>Github</li>
				</a>
			</ul>
		</div> -->
	</nav>
	<Line />
</div>

<style lang="scss">
	@use "../../styles/variables.scss";
	.wrap {
		display: inline-block;
		width: 100%;
	}
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
	@media only screen and (max-width: 500px) {
		h1 {
			text-align: center;
			margin-top: 1em;
		}
		nav {
			flex-wrap: wrap;
			justify-content: space-around;
		}
		div {
			justify-content: center;
			ul {
				margin: 0;
				flex-shrink: 1;
			}
		}
	}
	@media only screen and (max-width: 300px) {
		.github {
			display: none;
		}
	}
</style>
