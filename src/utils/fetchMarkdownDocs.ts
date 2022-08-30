export const fetchMarkdownDocs = async () => {
	const allDocFiles = import.meta.glob('/src/lib/docs/*.md');
	const iterableDocFiles = Object.entries(allDocFiles);

	const allDocs = await Promise.all(
		iterableDocFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			return {
				frontmatter: { ...metadata.frontmatter },
				path: `docs${postPath}`
			};
		})
	);

	return allDocs;
};
