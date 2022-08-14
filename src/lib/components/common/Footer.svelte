<script>
	import Copyright from "../meta/Copyright.svelte";
</script>

<footer>
	<ul>
		<li>
			<a href="https://github.com/KennanHunter/" class="sweep">GitHub</a>
		</li>
		<li>
			<a href="mailto:kennanhunter5@gmail.com" class="sweep">E-Mail</a>
		</li>
		<li><a href="/feed.xml" class="sweep">RSS Feed</a></li>
		<li><a href="/sitemap" class="sweep">Sitemap</a></li>

		<li class="align"><Copyright /></li>
	</ul>
</footer>

<style lang="scss">
	@import "../../styles/variables.scss";
	@import "../../styles/hover.scss";

	footer {
		min-height: 5em;
		background-color: $bg2;
		padding: 1em 2em;
		box-shadow: 0 50vh 0 50vh $bg2;
		margin-top: 2em;
		overflow: hidden;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-items: center;
		gap: 1em;

		list-style-type: none;
		margin: 0;
		padding: 0;
		flex-wrap: wrap;
		li a {
			color: $text;
			padding: 0.2em;
		}
	}
	a {
		text-decoration: none;
	}
	.align {
		margin-left: auto;
		width: 30em;
	}
	@media only screen and (max-width: 800px) {
		.align {
			margin: auto;
			width: fit-content;
		}
	}
</style>
