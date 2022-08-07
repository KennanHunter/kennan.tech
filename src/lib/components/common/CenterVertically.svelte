<div class="container">
	<div class="element">
		<slot />
	</div>
</div>

<style>
	.container {
		display: grid;
		height: 100%;
		grid-template-columns: auto auto auto;
		grid-template-rows: auto auto auto;
	}

	.element {
		grid-column-start: 2;
		grid-row-start: 2;
		text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
		/* width: 300px; */
	}
</style>
