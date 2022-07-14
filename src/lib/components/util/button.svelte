<script lang="ts">
	export let iconOnly = false;
	export let type = 'primary';

	$: classes = ['button', `button--${type}`, iconOnly ? 'button--iconOnly' : null]
		.filter((e) => !!e)
		.join(' ');
</script>

<button on:click on:focus class={classes}>
	<slot />
</button>

<style lang="scss">
	// @forward 'src/lib/scss/base/root';

	.button {
		all: unset;
		display: flex;
		gap: 1rem;
		cursor: pointer;

		padding-inline: 1rem;
		padding-block: 0.5rem;

		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;

		--background-color: var(--clr-accent-725);
		// --border-color: var(--background-color);
		--outline-color: var(--clr-inverted-725);
		--color: var(--clr-neutral-025);

		background-color: var(--background-color);
		color: var(--color);
		// border-width: var(--border-width);
		// border-style: solid;
		// border-color: var(--border-color);
		border-radius: var(--border-radius);

		&--secondary {
		}
		&--outline {
		}
		&--iconOnly {
			padding-inline: 0.5rem;
		}

		&:hover,
		&:focus {
			--background-color: var(--clr-accent-675);
		}

		&:focus-visible {
			--background-color: var(--clr-accent-675);
			outline: solid calc(var(--border-width) * 2);
			outline-color: var(--outline-color);
			// outline-offset: calc(var(--border-width) * 0.5);
		}
	}
</style>
