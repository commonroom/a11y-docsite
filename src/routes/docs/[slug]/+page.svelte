<script lang="ts">
	import type { PageData } from '@sveltejs/kit/types/internal';

	import type { FM } from '$types/types-load-menu-paths';

	interface DocData {
		docData: PageData;
		frontmatter: FM;
		Doc: any; // TODO
	}

	export let data: DocData;
</script>

<h1>{data.frontmatter.title}</h1>

{@html data.Doc}
<!-- {@html data.Doc.default.render().html} -->

<!-- <data.Doc />  -->

<style lang="scss">
</style>
