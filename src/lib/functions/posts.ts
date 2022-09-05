export interface Post {
	title: string;
	image: string | null;
	technologies: string[];
	publishedAt: string;
	url: string;
	description?: string;
}

export async function getAllPosts() {
	const posts = import.meta.glob("../../routes/blog/**/*.md");
	let body: Promise<Post>[] = [];

	for (const path in posts) {
		body.push(
			posts[path]().then(({ metadata }: any) => {
				const splitPath = path.split(/\.|\//g);
				return {
					...metadata,
					url: "/blog/e/" + splitPath[splitPath.length - 3],
				} as Post;
			})
		);
	}

	return (await Promise.all(body)).sort((a, b) => {
		return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
	});
}
