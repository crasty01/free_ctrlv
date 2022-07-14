<script lang="ts">
	import Icon from '$lib/components/util/icon.svelte';
	import Button from '$lib/components/util/button.svelte';

	export let value = 'tests';
	let id = crypto?.randomUUID();
</script>

<label class="input" for={id}>
	<input {id} type="text" bind:value disabled />
	<slot name="button">
		<Button iconOnly><Icon>share</Icon></Button>
	</slot>
</label>

<style lang="scss">
	.input {
		all: unset;
		display: flex;
		// gap: 1rem;
		cursor: text;

		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;

		--background-color: var(--clr-neutral-325);
		--color: var(--clr-neutral-925);

		background-color: var(--background-color);
		color: var(--color);
		border-radius: var(--border-radius);

		&:hover,
		&:focus-within {
			--background-color: var(--clr-neutral-300);
		}

		& > input {
			all: unset;
			padding-inline: 1rem;
			padding-block: 0.5rem;
			width: 100%;
		}
	}
</style>
