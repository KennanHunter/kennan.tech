<script lang="ts">
	import SectionHeader from "../common/SectionHeader.svelte";
	import Center from "../common/Center.svelte";

	let name: string, contact: string, message: string;
	const submit = () => {
		const data = {
			name: name,
			contact: contact,
			message: message,
		};

		console.log(JSON.stringify(data));
	};
</script>

<section>
	<br />

	<SectionHeader id="contact">Like what you see?</SectionHeader>

	<Center>
		<section>
			<noscript>This Form requires Javascript</noscript>
			<form on:submit|preventDefault>
				<div>
					<h3>Contact Me</h3>
					<div class="info">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							bind:value={name}
						/>

						<label for="name">Contact</label>
						<input
							type="text"
							name="contact"
							id="contact"
							bind:value={contact}
						/>
						<br />
					</div>
					<em style="margin: 0">Email, Discord, SMS etc.</em>

					<br />
					<input
						type="submit"
						value="Send"
						class="shown"
						on:click={submit}
					/>
				</div>
				<div>
					<label for="message">Message </label>
					<br />
					<textarea
						type="text"
						name="message"
						id="message"
						bind:value={message}
					/>
					<input
						type="submit"
						value="Send"
						class="hidden"
						on:click={submit}
					/>
				</div>
			</form>
		</section>
	</Center>
</section>

<style lang="scss">
	@import "../../styles/variables.scss";
	.hidden {
		display: none;
	}
	h3 {
		margin-top: 0.5em;
	}
	.info {
		display: grid;
		grid-template-columns: auto auto;
		width: 90%;
	}

	@media only screen and (max-width: 800px) {
		.hidden {
			display: initial;
		}
		.shown {
			display: none;
		}
	}

	noscript {
		background-color: $yellow;
	}
	input[type="text"],
	textarea {
		background-color: inherit;
		color: $text;
		padding: 0.5em;
		margin-bottom: 1em;
		resize: none;
		border-radius: 0.5em;
		font-family: "Fira Code", monospace;
	}

	input[type="submit"] {
		text-align: center;
		background-color: $blue;
		border: none;
		color: $text;
		padding: 1em 2em;
		text-decoration: none;
		margin: 4px 2px;
		width: 90%;
		border-radius: 0.5em;
		transition: background-color 0.4s ease-in-out;
		margin-top: 1em;
	}

	input[type="submit"]:hover {
		background-color: $green;
	}

	#message {
		width: 90%;
		height: 15em;
	}

	form {
		display: grid;
		grid-template-columns: 20em auto;
		padding: 1em;
		text-align: left;
		min-width: 40em;
		border: 0.1em solid $text;
		margin: 1em;
		border-radius: 0.5em;
	}

	@media only screen and (max-width: 800px) {
		form {
			all: unset;
			display: flex;
			flex-direction: column;
			border: 0.1em solid $text;
			border-radius: 0.5em;
			padding: 1em;
			gap: 1em;
			margin: 1em;
			width: min(20em, 90%);
		}
	}
</style>
