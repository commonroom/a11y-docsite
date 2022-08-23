<script lang="ts">
	export let label: string;
</script>

<button on:click>{label}</button>

<style lang="scss">
	button {
		border: 2px solid var(--color-text-1);
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		&:hover {
			text-decoration: underline;
            text-underline-offset: .25rem;
		}
	}
</style>
