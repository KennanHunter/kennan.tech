import type { RequestEvent } from "@sveltejs/kit";

export const prerender = true;

export function globImport() {
	let arr = [];

	for (let path in import.meta.glob("../**/*.(svelte|md)")) {
		arr.push(
			path
				.replace(/\.(svelte|md|ts)/, "")
				.replace(/\+page/, "")
				.split(".")[2]
		);
	}

	return arr
		.filter((val: string) => !val.includes("+layout"))
		.map((path) => "https://kennan.tech" + path);
}

export async function GET({}: RequestEvent): Promise<Response> {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
			   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${(() => {
			return globImport()
				.map((path) => {
					return `<url>
						<loc>
					${path.replace(/[<>&'"]/g, (c) => {
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
					})}</loc></url>`;
				})
				.join("");
		})()}
		</urlset>`
			.replace(/>\s*/g, ">")
			.replace(/\s*</g, "<"),
		{
			headers: {
				"access-control-allow-origin": "*",
				"Content-Type": "text/xml",
			},
		}
	);
}
