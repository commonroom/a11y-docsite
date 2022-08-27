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
	<h2>This page needs some work</h2>
	<p>
		Contribute to the documentation <a href="https://github.com/commonroom/a11y-docsite" target="_blank"
			>on Github</a
		>
	</p>
{/if}

<style lang="scss">
</style>
