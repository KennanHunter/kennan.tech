import { getAllPosts } from "$lib/functions/posts";

/** @type {import('./blog/posts.json.ts').RequestHandler} */
export async function get({ params }) {
	return {
		body: await getAllPosts(),
	};
}
