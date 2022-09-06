export function serializeSchema(obj) {
	return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}
