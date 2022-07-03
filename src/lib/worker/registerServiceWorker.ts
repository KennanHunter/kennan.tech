export function Register() {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("/serviceworker.js");
	}
}
