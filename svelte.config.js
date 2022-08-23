import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import toml from 'toml';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			mdsvexConfig,
			extensions: ['.md'],
			layout: {
				_: 'src/layouts/DocLayout.svelte'
			},
			frontmatter: {
				marker: '-',
				type: 'toml',
				parse: (frontmatter, messages) => {
					try {
						let content = toml.parse(frontmatter);
						return { frontmatter: content, ...content };
					} catch (e) {
						messages.push(e.message);
					}
				}
			}
		})
	],

	// preprocess: [
	// 	preprocess({
	// 		postcss: {
	// 			plugins: [autoprefixer()]
	// 		}
	// 	})
	// ],

	kit: {
		adapter: adapter()
	}
};

export default config;
