import { fetchMarkdownDocs } from '$utils/fetchMarkdownDocs';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allDocs = await fetchMarkdownDocs();

	return json(allDocs);
};
