import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			includePaths: ['src'],
			prependData: `@use 'src/styles/main';`
		},
		sourceMap: true
	}),

	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		trailingSlash: 'always',
		paths: {
			base: '/~maxova'
		}
	}
};

export default config;
