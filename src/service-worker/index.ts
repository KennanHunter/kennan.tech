/// <reference lib="webworker" />

import { build, files, prerendered, version } from "$service-worker";

const worker = self as unknown as ServiceWorkerGlobalScope;

const STATIC_CACHE_NAME = `cache${version}`;

const toCache = [
	...files
		.filter(
			(f) => !/apple|android|browserconfig|favicon|mstile|safari/.test(f)
		)
		.filter((f) => /.(js|html|css)/.test(f)),
	...build,
	...prerendered,
];

const staticAssets = new Set(toCache);
console.log(staticAssets);

worker.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE_NAME)
			.then(async (cache) => {
				await cache.addAll(toCache);
				console.log("Initial static cache completed");
			})
			.then(() => {
				worker.skipWaiting();
			})
	);
});

worker.addEventListener("activate", (event) => {
	console.log("Worker Activated");
	event.waitUntil(
		caches.keys().then(async (keys) => {
			// delete old caches
			for (const key of keys) {
				if (key !== STATIC_CACHE_NAME) {
					await caches.delete(key);
				}
			}

			worker.clients.claim();
		})
	);
});

/**
 * Fetch the asset from the network and store it in the cache.
 * Fall back to the cache if the user is offline.
 */
async function fetchAndCache(request: Request) {
	const cache = await caches.open(STATIC_CACHE_NAME);

	try {
		const response = await fetch(request).catch((e) => {
			console.log(e + request.url);
			throw e;
		});
		cache.put(request, response.clone());
		console.log("Caching: " + request.url);
		return response;
	} catch (err) {
		const response = await cache.match(request);
		if (response) {
			console.log("Fetching from Cache: " + request);
			return response;
		}

		console.log(await cache.keys());

		throw err;
	}
}

worker.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET" || event.request.headers.has("range")) {
		return;
	}

	const url = new URL(event.request.url);

	// don't try to handle e.g. data: URIs
	const isHttp = url.protocol.startsWith("http");
	const isDevServerRequest =
		url.hostname === self.location.hostname &&
		url.port !== self.location.port;

	if (isHttp && !isDevServerRequest) {
		event.respondWith(
			(async () => {
				// always serve static files and bundler-generated assets from cache.
				// if your application has other URLs with data that will never change,
				// set this variable to true for them, and they will only be fetched once.
				const cachedAsset = await caches.match(event.request);

				return cachedAsset || fetchAndCache(event.request);
			})()
		);
	}
});
