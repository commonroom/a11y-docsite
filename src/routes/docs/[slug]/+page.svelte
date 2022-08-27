<script lang="ts">
	import type { PageData } from '@sveltejs/kit/types/internal';

	import type { FM } from '$types/types-load-menu-paths';

	interface DocData {
		docData: PageData;
		frontmatter: FM;
		Doc: any; // TODO
	}

	export let data: DocData;

	const hackWrapper = '<div class="doc-content s-Ho9MrNAHWzxw"></div>'.length + 1;
</script>

<h1>{data.frontmatter.title}</h1>

{#if data.Doc.length > hackWrapper}
	{@html data.Doc}
{:else}
	<p>Contribute to the documentation on Github</p>
{/if}

<style lang="scss">
</style>
