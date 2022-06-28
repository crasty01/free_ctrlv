<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let input: HTMLInputElement;
	const dispatch = createEventDispatcher();

	const fileUploaded = (_payload: any) => {
		const files = input.files;
		dispatch('filesSelected', files);
	};

	const onKeyPress = (payload: KeyboardEvent) => {
		if (payload.code === 'Enter') input.click();
	}

	const id = crypto.randomUUID();
</script>

<label class="upload" for={id} tabindex="0" on:keyup={onKeyPress}>
	<span>drag, click or paste</span>
	<input
		class="input"
		type="file"
		multiple
		accept="image/jpeg,image/png,image/gif,image/apng,image/tiff,image/mp4,image/mpeg,image/avi,image/webm"
		{id}
		bind:this={input}
		on:change={fileUploaded}
	/>
</label>

<style lang="scss">
	.input {
		display: none;
	}
	.upload {
		display: grid;
		flex-direction: column;
		align-items: center;
		place-content: center;
		width: 100%;
		height: 100%;
		min-width: 6rem;
		padding-block: 0.5rem;
		padding-inline: 2rem;
		border: var(--border-width) dashed var(--clr-light-950);
		border-radius: var(--border-radius);
		cursor: pointer;
	}
</style>
