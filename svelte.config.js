import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */


const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		router: false,
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
