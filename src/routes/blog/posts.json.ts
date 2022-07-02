interface Post {
	title: string;
	image: string | null;
	technologies: string[];
	publishedAt: string;
	url: string;
}

/** @type {import('./blog/posts.json.ts').RequestHandler} */
export async function get({ params }) {
	const posts = import.meta.glob("./**/*.md");
	let body: Promise<Post>[] = [];

	for (const path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => {
				return {
					...metadata,
					url: "/blog" + path.split(".")[1],
				} as Post;
			})
		);
	}

	return {
		body: (await Promise.all(body)).sort((a, b) => {
			return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
		}),
	};
}
