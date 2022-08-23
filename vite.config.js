import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src/'),
			$components: resolve('./src/components/'),
			$routes: resolve('./src/routes/'),
			$stores: resolve('./src/stores/'),
			$types: resolve('./src/types/'),
			$utils: resolve('./src/utils/'),
			$styles: resolve('./src/styles'),
			$layouts: resolve('./src/routes/_layouts'),
		}
	}
};

export default config;
