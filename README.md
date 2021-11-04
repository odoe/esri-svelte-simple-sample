Simple test case to figure out how to use esri js api 4.18+ esm with svelte and rollup. 

Currently setting rollup fails to package the esri js api when using it as ES modules, this is the error being produced: 

```
[!] Error: UMD and IIFE output formats are not supported for code-splitting builds.
Error: UMD and IIFE output formats are not supported for code-splitting builds.
    at error (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\rollup.js:5265:30)
    at validateOptionsForMultiChunkOutput (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\rollup.js:12549:16)    
    at Bundle$1.generate (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\rollup.js:12399:17)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at handleGenerateWrite (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\rollup.js:20028:23)
    at async Promise.all (index 0)
    at Task.run (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\watch.js:739:32)
    at Watcher.run (C:\_DATA\PROJECTS\NGA-Imagery\git-gma-bulk-upload\node_modules\rollup\dist\shared\watch.js:666:13)
```

*Psst — looking for a more complete solution? Check out [SvelteKit](https://kit.svelte.dev), the official framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.*

*Looking for a shareable component template instead? You can [use SvelteKit for that as well](https://kit.svelte.dev/docs#packaging) or the older [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

## Get started

Install the dependencies...

```bash
cd esri-svelte-rollup-minimal-test
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
