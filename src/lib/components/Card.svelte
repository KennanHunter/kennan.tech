<script>
	import TextCursor from "$lib/components/text-cursor.svelte";
	import "$lib/styles/variables.scss";
</script>

<div class="initial-view">
	<div class="card">
		<h1>Kennan Hunter</h1>
		<ul>
			<li>High School Student</li>
			<!-- <li><a href="/my-setup"> Linux User</a></li> -->
			<li><a href="/#resume"> Ameteur Developer</a></li>
			<!-- <li><a href="/#blog"> </a></li> -->
			<!-- <li></li> -->
		</ul>
	</div>
</div>

<div class="more">
	{#each [undefined] as _}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="currentColor"
			class="bi bi-chevron-down"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
			/>
		</svg>
	{/each}
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

	li:hover {
		font-weight: 700;
	}
</style>
