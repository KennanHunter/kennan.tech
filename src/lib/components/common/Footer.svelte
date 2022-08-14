<script>
	import Copyright from "../meta/Copyright.svelte";
</script>

<footer>
	<div>
		<a href="/#top">
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
	</div>
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
	.absolute {
		position: absolute;
		left: calc(50% - 20px);
		color: $text;
	}
	@media only screen and (max-width: 800px) {
		.align {
			margin: auto;
			width: fit-content;
		}
		.absolute {
			display: none;
		}
	}
</style>
