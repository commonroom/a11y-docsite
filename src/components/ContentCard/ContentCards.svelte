<script lang="ts">
	import type { AllPosts } from '$types/types-load-menu-paths';

	export let content: AllPosts['sortedPosts'];
</script>

<ul class="list__no-bullets grid-layout">
	{#each content as post}
		<li>
			<a href={post.path}>
				{post.frontmatter.title}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-gap: 4rem 2rem;
		// outline: 1px solid tomato;
		li {
			padding: 3rem;
		}
	}
</style>
