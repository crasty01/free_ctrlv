<script lang="ts">
  import Upload from "$lib/components/upload.svelte";
  let images: Array<Image> = [];
  $: if (images.length > 0) console.log(images);
</script>

<div class="center">
  <Upload bind:images={images} />
</div>