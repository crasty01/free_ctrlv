<script lang="ts">
  import Input from '$lib/components/input.svelte';
	import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/env';

  interface Image {
    lastModified: Date;
    name: string;
    type: string;
    src: string;
    data: ArrayBuffer;
  }
  let images: Array<Image> = [];

  const clipboardEvent = async ({ clipboardData }: ClipboardEvent) => {
    images = [];
    const items = clipboardData?.items;

    if (!clipboardData) throw new Error(`Can not read 'clipboardData' of type '${typeof clipboardData}'`);
    if (!items) throw new Error(`Can not read 'items' of type '${typeof items}'`);

    for (let i = 0; i < items?.length; i += 1) {
      const item = items[i];
      if (item.kind !== 'file' || !item.type.startsWith('image')) continue;
      images = [
        ...images,
        await getImage(item.getAsFile() as File),
      ]
    }
  }

  const filesSelected = async (payload: CustomEvent) => {
    const files: FileList = payload.detail;
    for (let i = 0; i < files?.length; i += 1) {
      images = [
        ...images,
        await getImage(files[i]),
      ]
    }
  }

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

<tempalte>
  {#if images.length === 0}
    <Input on:filesSelected={filesSelected} />
  {:else}
    {#each images as image}
      <img src={image.src} alt="">
    {/each}
  {/if}
</tempalte>
