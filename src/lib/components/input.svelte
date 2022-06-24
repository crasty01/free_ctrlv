<script lang="ts">
	import { createEventDispatcher } from 'svelte';

  let input: HTMLInputElement;
	const dispatch = createEventDispatcher();

  const fileUploaded = (payload: any) => {
    const files = input.files;
    dispatch('filesSelected', files);
  }
</script>

<template>
  <label for="fileUpload">
    label
  </label>
  <input type="file" multiple accept="image/*" name="fileUpload" bind:this={input} on:change={fileUploaded}>
</template>