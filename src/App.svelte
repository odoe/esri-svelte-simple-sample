<script>
	import Geoprocessor from "@arcgis/core/tasks/Geoprocessor";
	import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
	import Map from "@arcgis/core/Map"
	import MapView from "@arcgis/core/views/MapView";

	import { onMount } from 'svelte';
	
    export let name;

	let mapDiv;

	let gpUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Viewshed/GPServer/Viewshed";
	let submitGP = new Geoprocessor({url:gpUrl});

	let graphicsLayer = new GraphicsLayer();

	onMount(() => {
		const map = new Map({
			basemap: "dark-gray-vector"
		});
		const view = new MapView({
			container: mapDiv,
			map: map,
			center: [-122.812, 45.474],
			zoom: 12		
		})

		view.when(() => {
			console.log("view ready");
		});
	});

</script>

<main>
	<div id="viewDiv" bind:this={mapDiv}>
		<div id="sidebar" class="esri-widget">
			<h1 class="hello">Hello {name}!</h1>
			<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		</div>
	</div>
</main>

<style>

	main, #viewDiv {
		padding: 0;
		margin: 0;
		height: 100%;
		width: 100%;
	}

	#sidebar {
		position: absolute;
		top: 0;
		right: 0;
		height: 85%;
		width: 320px;
		overflow-y: auto;
	}

	.hello {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>