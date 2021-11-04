import esriConfig from "@arcgis/core/config";
import "@arcgis/core/assets/esri/themes/dark/main.css";

esriConfig.assetsPath = "./assets";

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;