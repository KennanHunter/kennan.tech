import { getAllPosts, type Post } from "$lib/functions/posts";
import type { RequestEvent, RequestHandlerOutput } from "@sveltejs/kit";

const origin = "https://kennan.tech";

function postToXml(post: Post): string {
	const absoluteUrl = origin + post.url;
	return `\
		<item>
			<title>${post.title}</title>
			<description>${post.description ? post.description : ""}</description>
			<link>${absoluteUrl}</link>
			<guid>${absoluteUrl}</guid>
			<image>${post.image}</image>
			<comments>${absoluteUrl + "#comments"}</comments>
			<pubDate>${post.publishedAt}</pubDate>
			<author>kennanhunter5@gmail.com</author>
${post.technologies
	.map((tech) => {
		return `\t\t\t<category>${tech}</category>`;
	})
	.join("\n")}
		</item>`;
}

export async function GET({}: RequestEvent): Promise<RequestHandlerOutput> {
	const posts = await getAllPosts();

	const lastPostPublishedAt = posts[0].publishedAt;

	const xmlString: string = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
	<title>kennan.tech blog</title>
	<description>Kennan Hunter's Personal Blog</description>
	<webmaster>kennanhunter5@gmail.com</webmaster>
	<copyright>2022 kennan.tech CC-BY</copyright>
	<language>en</language>
	<link>${origin}</link>
	<lastBuildDate>${lastPostPublishedAt}</lastBuildDate>
	<pubDate>${lastPostPublishedAt}</pubDate>
	<channel>
${posts
	.map((post) => {
		return postToXml(post);
	})
	.join("\n")}
	</channel>
</rss>`;
	return {
		status: 200,
		headers: {
			"access-control-allow-origin": "*",
			"Content-Type": "text/xml",
		},
		body: xmlString,
	};
}
