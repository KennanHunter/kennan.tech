<script>
	import Logo from "./Logo.svelte";
</script>

<div class="wrap">
	<nav id="top">
		<a href="/" class="inline">
			<Logo />
		</a>
		<div class="flex inline">
			<a href="/#about" class="hideWhenSmall">About</a>
			<a href="/#skills" class="hideWhenSmall">Skills</a>
			<a href="/#projects" class="hideWhenSmall">Projects</a>
			<a href="/#contact" style="padding-right: 2em" class="hideWhenSmall"
				>Contact Me</a
			>
			<a href="/blog/">Blog</a>
		</div>
	</nav>
</div>

<style lang="scss">
	@use "../../styles/variables.scss";
	.wrap {
		box-shadow: 0px 0.6em 0.6em rgba(0, 0, 0, 0.5);
	}
	@media only screen and (max-width: 800px) {
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			div {
				a {
					text-decoration: none;
					color: variables.$text;
					font-size: large;
					padding: 2em;
				}
			}
		}
		.hideWhenSmall {
			display: none;
		}
	}
	@media (min-width: 800px) {
		nav {
			margin: 0.3em;
			display: flex;
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
	}
</style>
