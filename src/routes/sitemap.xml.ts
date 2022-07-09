import type { RequestEvent, RequestHandlerOutput } from "@sveltejs/kit";

export async function get({}: RequestEvent): Promise<RequestHandlerOutput> {
	return {
		status: 200,
		headers: {
			"access-control-allow-origin": "*",
			"Content-Type": "text/xml",
		},
		body: `<?xml version="1.0" encoding="UTF-8"?>
			   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${(() => {
			let arr = [];
			for (let path in import.meta.glob("./**/*.(svelte|md)")) {
				arr.push(
					path
						.replace(/\.(svelte|md)/, "")
						.split("@")[0]
						.split(".")[1]
				);
			}
			arr = arr.filter((val: string) => {
				return !val.includes("__");
			});
			return arr.map((path) => {
				return `<url>
						<loc>
					${("https://kennan.tech" + path).replace(/[<>&'"]/g, (c) => {
						switch (c) {
							case "<":
								return "&lt;";
							case ">":
								return "&gt;";
							case "&":
								return "&amp;";
							case "'":
								return "&apos;";
							case '"':
								return "&quot;";
						}
					})}</loc>
				</url>`;
			});
		})()}
		</urlset>`
			.replace(/>\s*/g, ">")
			.replace(/\s*</g, "<"),
	};
}
