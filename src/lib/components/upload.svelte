<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/env';
	
	// console.log('change - body');
	export let images: Array<Image>;

		const clipboardEvent = async ({ clipboardData }: ClipboardEvent) => {
		const items = clipboardData?.items;

		if (!clipboardData)
			throw new Error(`Can not read 'clipboardData' of type '${typeof clipboardData}'`);
		if (!items) throw new Error(`Can not read 'items' of type '${typeof items}'`);

		const _images = [];
		for (let i = 0; i < items?.length; i += 1) {
			const item = items[i];
			if (item.kind !== 'file' || !item.type.startsWith('image')) continue;
			_images.push(await getImage(item.getAsFile() as File));
		}
		// console.log('change - clipboardEvent');
		images = _images;
	};

	const filesSelected = async (payload: CustomEvent) => {
		const _images = [];
		const files: FileList = payload.detail;
		for (let i = 0; i < files?.length; i += 1) {
			_images.push(await getImage(files[i]));
		}
		// console.log('change - filesSelected');
		images = _images;
	};

	const getImage = async (file: File): Promise<Image> => ({
		lastModified: new Date(file.lastModified),
		name: file.name,
		type: file.type,
		src: URL.createObjectURL(file),
		data: await file.arrayBuffer(),
	});

	onMount(() => {
		if (browser) document.addEventListener('paste', clipboardEvent);
	});
	onDestroy(() => {
		if (browser) document.removeEventListener('paste', clipboardEvent);
	});
</script>

<!-- {#if images.length === 0} -->
	<Input on:filesSelected={filesSelected} />
<!-- {:else} -->
	{#each images as image}
		<img src={image.src} alt="" />
	{/each}
<!-- {/if} -->
