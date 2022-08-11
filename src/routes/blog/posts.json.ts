import { getAllPosts } from "$lib/functions/posts";

/** @type {import('./blog/posts.json.ts').RequestHandler} */
export async function GET({ params }) {
	return {
		body: await getAllPosts(),
	};
}
