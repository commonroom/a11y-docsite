<script lang="ts">
	// import "../app.postcss";

	// get route path for page title
	import { page } from '$app/stores';

	// globals';
	import '$src/app.scss';

	// components
	import Header from '$components/DefaultLayout/Header.svelte';
	import Footer from '$components/DefaultLayout/Footer.svelte';

	// layout logic

	// reactive svelte:head page title
	$: currentPath = $page.url.pathname;
	$: pageTitle = currentPath == '/' ? '' : ` | ${currentPath}`.replace('/', '');
</script>

<svelte:head>
	<title>A11y Docsite {pageTitle}</title>
</svelte:head>

<div class="doc-content">
	<slot />
</div>

<style lang="scss">
</style>

