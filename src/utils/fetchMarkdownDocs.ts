export const fetchMarkdownDocs = async () => {
	const allDocFiles = import.meta.glob('/src/routes/docs/*.md');
	const iterableDocFiles = Object.entries(allDocFiles);

	const allDocs = await Promise.all(
		iterableDocFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				frontmatter: { ...metadata.frontmatter },
				path: postPath
			};
		})
	);

	return allDocs;
};
