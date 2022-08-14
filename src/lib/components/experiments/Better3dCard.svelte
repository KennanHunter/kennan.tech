<script lang="ts">
	import "$lib/styles/variables.scss";
	import * as SC from "svelte-cubed";
	import * as THREE from "three";
	import { onMount } from "svelte";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
	import Center from "../common/Center.svelte";
	import { tweened } from "svelte/motion";

	let loaded = false;
	let loadingVal: number;
	let data: THREE.Group;
	onMount(() => {
		const loader = new GLTFLoader();
		loader.load(
			"/3d/KH.glb",
			(gltf) => {
				data = gltf.scene;
				console.log("loaded");
				loaded = true;
				console.dir(data);
			},
			(xhr) => {
				loadingVal = (xhr.loaded / xhr.total) * 100;
				console.log(loadingVal + "% loaded");
			}
		);
	});
</script>

<section>
	{#if !loaded}
		<Center>
			<h1>Kennan Hunter</h1>
			<p>
				Loading:
				{#if loadingVal}
					<h1>{tweened(loadingVal, {})}%</h1>
				{/if}
			</p>
		</Center>
	{:else}
		<SC.Canvas background={new THREE.Color(0x36363f)}>
			<SC.PerspectiveCamera position={[0, 0, 0]} />

			<SC.OrbitControls enableZoom={true} />
		</SC.Canvas>

		<SC.Primitive
			object={data}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
			scale={[1, 1, 1]}
		/>

		<SC.DirectionalLight
			color={new THREE.Color(0xffffff)}
			position={[0, 10, 10]}
			intensity={0.75}
			shadow={false}
		/>
		<SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} />
	{/if}
</section>
