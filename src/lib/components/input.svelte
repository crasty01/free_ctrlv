<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let input: HTMLInputElement;
	const dispatch = createEventDispatcher();

	const fileUploaded = (_payload: any) => {
		const files = input.files;
		dispatch('filesSelected', files);
	};
</script>

<template>
	<label class="label" for="fileUpload"> 
    <span>drag your file here</span>
    <span>or click to open a file explorer</span>
  </label>
	<input
		class="input"
		type="file"
		multiple
		accept="image/*"
		id="fileUpload"
		bind:this={input}
		on:change={fileUploaded}
	/>
</template>

<style lang="scss">
	.input {
		display: none;
	}
	.label {
		display: flex;
    padding: 1rem;
    min-width: 6rem;
    
	}
</style>
