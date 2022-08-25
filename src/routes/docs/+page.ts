import { error } from '@sveltejs/kit';
import type { LoadEvent } from '@sveltejs/kit/types/internal';

export const load = async ({ fetch }: LoadEvent) => {
	try {
		const response = await fetch(`/api/docs`);
		const docs = await response.json();

		return {
			docs
		};
	} catch (err) {
		throw error(404, 'Not found');
	}
};
