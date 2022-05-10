<script>
	import CenterVertically from "$lib/components/CenterVertically.svelte";
</script>

<CenterVertically>
	<h1>Contact me at</h1>
	<table>
		<tr>
			<td>Discord</td>
			<td>Kennan#4955</td>
		</tr>

		<tr>
			<td>Email</td>
			<td>
				<a href="mailto: kennanhunter5@gmail.com">
					kennanhunter5@gmail.com
				</a>
			</td>
		</tr>

		<tr>
			<td>GitHub</td>
			<td>KennanHunter</td>
		</tr>
	</table>
</CenterVertically>

<style>
	table {
		width: 70%;
	}
	a {
		all: unset;
	}
	a:hover {
		font-weight: 900;
	}
</style>
