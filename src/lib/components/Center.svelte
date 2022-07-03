<div class="container">
	<div class="element">
		<slot />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: auto auto auto;
	}

	.element {
		grid-column-start: 2;
		text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (max-width: 800px) {
		.container {
			grid-template-columns: 100%;
		}
		.element {
			grid-column-start: 1;
		}
	}
</style>
