<script lang="ts">
	const options = {
		timeZone: "America/Indiana/Indianapolis",
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	let timeText = new Date().toLocaleString("en-US", options as any);

	setInterval(() => {
		timeText = new Date().toLocaleString("en-US", options as any);
	}, 1 * 1000);
</script>

<p>
	It is currently {timeText} for me.
</p>
