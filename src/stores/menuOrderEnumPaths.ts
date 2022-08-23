import { readable } from 'svelte/store';
import type { MenuItem } from '$types/types-load-menu-paths';
import { MenuPaths } from '$types/types-load-menu-paths';

let menuPaths: MenuItem[] = [];

// TS enums provide  each key value (e.g., {a: 1} twice: {a:1, 1: a})
// export const enumPaths = Object.entries(MenuPaths).filter((e) => e[0].includes('/'));
const enumPaths = Object.entries(MenuPaths);

enumPaths.map((ent) => {
	const path = ent[1];
	const label = ent[0];
	// change order of enum MenuPaths in types-load-menu-paths.ts
	// to modify the order of the menu items in the UI
	menuPaths = [
		...menuPaths,
		{
			path,
			label
		}
	];
});

// object export
export const menu = menuPaths;
// store export
export const menuOrderEnumPath = readable(menuPaths);
