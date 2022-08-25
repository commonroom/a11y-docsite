import { error } from '@sveltejs/kit';

import type { LoadEvent } from '@sveltejs/kit/types/internal';
import type { FM } from '$types/types-load-menu-paths';

export const load = async ({ params }: LoadEvent) => {
	try {
		const Doc = await import(`../${params.slug}.md`);

		const frontmatter: FM = Doc.metadata;

		return {
			Doc,
			frontmatter
		};
	} catch (err) {
		throw error(404, 'Not found');
	}
};
