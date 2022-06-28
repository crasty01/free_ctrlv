<script lang="ts">
  import Upload from "$lib/components/upload.svelte";
  let images: Array<Image> = [];
  $: if (images.length > 0) console.log(images);

  const upload = async () => {
    const data = new FormData();
    
    for (const file of images) {
      data.append('files[]', new Blob([file.data]), file.name);
    }

    const res = await fetch(`/api/upload`, {
      method: 'post',
      body: data,
    });

    console.log(res);
  }
</script>

<main class="main">
  <div class="blank">
    <button on:click={() => images = []}>clear</button>
    <button on:click={upload}>upload</button>
  </div>
  <div class="center">
    <Upload bind:images={images} />
  </div>
</main>

<style lang="scss">
  .main {
    display: grid;
    grid-template-rows: auto auto auto;
    align-content: center;
    gap: .5rem;
  }
  .center {
    // min-height: 20rem;
    aspect-ratio: 16 / 9;
    display: grid;
  }
</style>