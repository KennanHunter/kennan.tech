<script>
	import "$lib/styles/variables.scss";
</script>

<svelte:head>
	<meta name="description" content="Kennan Hunters Personal Webpage/Resume" />
</svelte:head>

<div class="initial-view">
	<div class="card">
		<h1>Kennan Hunter</h1>
		<ul>
			<li><a href="/resume/">My Resume</a></li>
			<li><a href="/blog/">My Blog</a></li>
			<!-- <li><a href="/contact/">Contact</a></li> -->
		</ul>
	</div>
</div>

<div class="more">
	<a href="/contact/"> Contact Me</a>
</div>

<style lang="scss">
	.initial-view {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-template-rows: auto auto auto;
		height: 100vh;
	}

	.card {
		grid-row-start: 2;
		grid-column-start: 2;
		text-align: center;
		align-self: center;
	}
	.more {
		position: absolute;
		width: 100%;
		left: 0;
		top: 90%;
		text-align: center;
	}

	ul {
		padding: 0;
	}

	li {
		margin: 1em 0;
		list-style-type: none;
	}

	a {
		all: inherit;
	}

	li:hover,
	a:hover {
		font-weight: 900;
	}
</style>
