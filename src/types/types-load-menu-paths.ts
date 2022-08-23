// modify order to change UI
// manually add paths to the enum
export enum MenuPaths {
	Home = '/' // index.svelte
}

export interface MenuItem {
	path: string;
	label: string;
}

// blog post TOML frontmatter
export interface FM {
	title: string;
	description?: string;
	date: string;
	category?: string[];
	type?: string;
	tags?: string[];
	keywords?: string[];
}

export interface AllPosts {
	sortedPosts: {
		frontmatter: FM;
		path: string;
	}[];
}
