<script>
	import BlogCard from "$lib/components/blog/BlogCard.svelte";
	import Center from "$lib/components/common/Center.svelte";
	import Seo from "$lib/components/meta/SEO.svelte";
	export let data;
</script>

<Seo title="Blog" description="Kennan Hunter's Tech Blog" keywords={["Blog"]} />
<Center>
	<h1>My Blog</h1>
	<p>
		Welcome to my blog, home of mediocre short to middle form tech writings
		and tutorials
	</p>

	<h2>Posts</h2>
	{#each data.posts as post}
		<BlogCard {...post} />
	{/each}
</Center>
