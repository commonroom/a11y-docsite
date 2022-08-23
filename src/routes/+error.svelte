<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Well, something broke.</h1>

<h2>{$page.status}:</h2>

<pre class="blockquote error">
	{$page.error?.message}
</pre>

<style lang="scss">
	pre {
		white-space: normal;
		overflow-wrap: break-word;
		line-height: 1.5;
	}
</style>
