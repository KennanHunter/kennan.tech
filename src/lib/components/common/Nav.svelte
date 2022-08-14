<script>
	import Logo from "./Logo.svelte";
</script>

<div class="wrap">
	<nav>
		<a href="/" class="inline">
			<Logo />
		</a>
		<div class="flex inline">
			<a href="/#about">About</a>
			<a href="/#skills">Skills</a>
			<a href="/#projects">Projects</a>
			<a href="/#contact" style="padding-right: 2em">Contact Me</a>
			<a href="/blog/">Blog</a>
		</div>
	</nav>
</div>

<style lang="scss">
	@use "../../styles/variables.scss";
	nav {
		margin: 0.3em;
		display: flex;
	}
	.wrap {
		box-shadow: 0px 0.6em 0.6em rgba(0, 0, 0, 0.5);
	}
	.flex {
		a {
			flex-grow: 1;
			text-decoration: none;
			color: variables.$text;
			font-size: large;
			align-items: center;
			text-align: center;
			padding: 1.3em 0;
			margin: auto;
		}
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
</style>
