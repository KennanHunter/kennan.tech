<script>
	import Project from "../common/Project.svelte";
	import SectionHeader from "../common/SectionHeader.svelte";
</script>

<section>
	<SectionHeader id="projects">Projects</SectionHeader>

	<Project
		title="Photo"
		description="Photo is a simple and fast graphql image
		processing server that shifts heavy loads off of your
		users device. Written in memory-safe Rust its speedy and 
		demands nothing from your server"
		links={[
			{
				text: "GitHub",
				href: "https://github.com/KennanHunter/photo/",
			},
			{
				text: "Docs",
				href: "https://photo.kennan.tech/",
			},
		]}
	>
		<img src="/favicon.svg" alt="test" />
	</Project>

	<Project
		title="Red Panda LMS"
		description="Red Panda was a Learning Management 
		Solution I built for the 2021-2022 TSA Software
		Development Competition. With my team we won
		first place for Rhode Island, Massachusets, and
		Connecticut."
		links={[
			{
				text: "GitHub",
				href: "https://github.com/KennanHunter/TSA-Canvas/",
			},
			{
				text: "Blog Post",
				href: "https://kennan.tech/",
			},
		]}
		reverse="true"
	>
		<img
			src="/assets/index/RedPandaLMSLogo.svg"
			alt="test"
			style="width: 30%"
		/>
	</Project>
</section>
