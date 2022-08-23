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
	<title>Common Room {pageTitle}</title>
</svelte:head>

<div class="content">
	<Header {currentPath} />

	<main>
		<slot></slot>
	</main>
	<!--  -->
	<Footer />
</div>

<style lang="scss" global>
	body {
		padding: 0 2rem;
	}
	header,
	footer {
		padding: 1em 0 1rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: 70ch;
		min-height: 100vh;
	}
</style>
