<script>
	export let data;
</script>

<h1>SiteMap</h1>
<a href="https://kennan.tech/sitemap.xml" class="sweep">XML SiteMap</a>
<ul>
	{#each data.links as link}
		<li><a class="sweep" href={link}>{link}</a></li>
	{/each}
</ul>

<style>
	@import "../../lib/styles/hover.scss";

	a {
		text-decoration: none;
		padding: 0.5em 0;
	}
</style>
