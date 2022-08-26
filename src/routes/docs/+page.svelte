<script lang="ts">
	import type { PageData } from '@sveltejs/kit/types/internal';
	import type { FM } from '$types/types-load-menu-paths';

	interface DocInfo {
		frontmatter: FM;
		path: string;
	}
	interface DocsAPI extends PageData {
		docs: DocInfo[];
	}
	export let data: DocsAPI;

	let docCategories: string[] = [];

	data.docs.map((ent) => {
		let cat = ent.frontmatter.category;

		if (!cat || docCategories.includes(cat.toLowerCase())) return;

		docCategories = [...docCategories, cat];
	});

	console.log(docCategories);
</script>

<h1>A11y Docs</h1>

{#each docCategories as category}
	<h2>{category}</h2>
	{#each data.docs as doc}
		{@const cat = category}

		{#if doc.frontmatter.category?.toLowerCase() === cat}
			<a href={doc.path} class="doc-link">
				{doc.frontmatter.title}
			</a>
		{/if}
	{/each}
{/each}

<style lang="scss">
	.doc-link {
		display: block;
		margin-block-start: 1rem;
	}
</style>
