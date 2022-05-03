<script>
	import "$lib/styles/variables.scss";
</script>

<div class="initial-view">
	<div class="card">
		<h1>Kennan Hunter</h1>
		<ul>
			<li>High School Student</li>
			<!-- <li><a href="/my-setup"> Linux User</a></li> -->
			<li><a href="/resume/">Amateur Developer</a></li>
			<li><a href="/blog/">Blogger</a></li>
			<!-- <li><a href="/#blog"> </a></li> -->
			<!-- <li></li> -->
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
		width: 30%;
		left: 35%;
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
