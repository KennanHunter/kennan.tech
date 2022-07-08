<script>
	import { onMount } from "svelte";

	import {
		Scene,
		PerspectiveCamera,
		WebGLRenderer,
		BoxGeometry,
		MeshBasicMaterial,
		Mesh,
		AmbientLight,
	} from "three";

	let innerHeight, innerWidth;
	let el;

	onMount(() => {
		const scene = new Scene(el);
		const camera = new PerspectiveCamera(
			75,
			innerWidth / innerHeight,
			0.1,
			1000
		);

		const renderer = new WebGLRenderer({ canvas: el });
		renderer.setSize(innerWidth, innerHeight);

		const geometry = new BoxGeometry(1, 1, 1);
		const material = new MeshBasicMaterial({ color: 0x00ff00 });
		const light = new AmbientLight(0x404040);
		scene.add(light);
		const cube = new Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 5;

		function animate() {
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<canvas bind:this={el} />
<h1>why is there cube???????</h1>

<style>
	h1 {
		position: absolute;
		top: 10px;
		width: 100%;
		text-align: center;
		z-index: 100;
		display: block;
	}
	canvas {
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
