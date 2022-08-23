<script lang="ts">
	// stores
	import { menuOrderEnumPath as menuPaths } from '$stores/menuOrderEnumPaths';

	// props
	export let currentPath: string;
</script>

<header>
	<nav>
		<ul class="list__no-bullets">
			{#each $menuPaths as menuItem}
				<!-- content here -->
				<li>
					<a href={menuItem.path} aria-current={currentPath === menuItem.path ? 'page' : false}
						>{menuItem.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		// removes list decoration and positions to left
		list-style-position: outside;
		list-style: none;
		margin-inline-start: 0;
		padding-inline-start: 0;
	}

	li {
		line-height: var(--font-lineheight-4);
		letter-spacing: var(--font-letterspacing-1);
		margin-inline-end: 2rem;
	}
</style>
