// modify order to change UI
// manually add paths to the enum

export interface MenuItem { 
	path: string; 
	label: string; 
}

export enum MenuPaths {
	Home = '/' // index.svelte
}
