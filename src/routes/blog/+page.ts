/** @type {import('./blog/index.svelte').PageLoad} */
export async function load({ fetch }) {
	let postsRequest;
	await fetch("/blog/posts.json")
		.then((response) => response.json())
		.then((data) => {
			postsRequest = data;
		});

	return {
		posts: postsRequest,
	};
}
