<script lang="ts">
	import type { PageData } from '@sveltejs/kit/types/internal';

	import type { FM } from '$types/types-load-menu-paths';

	// import DocLayout from '$src/layouts/DocLayout.svelte';

	// TODO
	// get type for doc
	// annotate data with FM type

	interface DocData {
		docData: PageData;
		frontmatter: FM;
		Doc: any; // TODO
	}

	export let data: DocData;
</script>

{@html data.Doc.default.render().html}

<style lang="scss">
</style>
