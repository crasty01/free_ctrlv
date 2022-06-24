<script lang="ts">
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
        await getImage(item),
      ]
    }
  }

  const getImage = async (item: DataTransferItem): Promise<Image> => {
    const file = item.getAsFile() as File;
    return {
      lastModified: new Date(file.lastModified),
      name: file.name,
      type: file.type,
      src: URL.createObjectURL(file),
      data: await file.arrayBuffer(),
    }
  }

	onMount(() => {
		if (browser) document.addEventListener('paste', clipboardEvent);
	});
	onDestroy(() => {
    if (browser) document.removeEventListener('paste', clipboardEvent);
  });
</script>

<tempalte>
  {#if images.length === 0}
    no images
  {:else}
    {#each images as image}
      <img src={image.src} alt="">
    {/each}
  {/if}
</tempalte>
