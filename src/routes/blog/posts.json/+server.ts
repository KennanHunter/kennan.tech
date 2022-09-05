import { getAllPosts } from "$lib/functions/posts";
import { json } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./blog/posts.json.ts').RequestHandler} */
export async function GET({ params }) {
	return json(await getAllPosts());
}
