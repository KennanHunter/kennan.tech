/** @type {import('./blog/posts.json.ts').RequestHandler} */
export async function get({ params }) {
	const posts = import.meta.glob("./**/*.md");
	let body = [];

	for (const path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => {
				return {
					...metadata,
					url: "/blog" + path.split(".")[1],
				};
			})
		);
	}

	const returnPosts = await Promise.all(body);

	return {
		body: returnPosts,
	};
}
