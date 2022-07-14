<script lang="ts">
	export let type: 'rounded' | 'outlined' | 'sharp' = 'outlined';

	export let size: number = 1.5;
	export let unit: AbsoluteUnit | RelativeUnit = 'rem';

	/**@type {numeber} (0 - 1)*/
	export let FILL: number = 0;

	/**@type {numeber} (100 - 700)*/
	export let wght: number = 700;

	/**@type {numeber} (-50 - 200)*/
	export let GRAD: number = 200;

	/**@type {numeber} (20 - 48)*/
	export let opsz: number = 48;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href={`https://fonts.googleapis.com/css2?family=Material+Symbols+${
			type[0].toUpperCase() + type.slice(1)
		}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`}
	/>
</svelte:head>

<span
	class={`icon material-symbols-${type}`}
	style={`font-variation-settings: 'FILL' ${FILL}, 'wght' ${wght}, 'GRAD' ${GRAD}, 'opsz' ${opsz};
    font-size: ${size}${unit};
		width: ${size}${unit};
		height: ${size}${unit};`}
>
	<slot />
</span>

<style lang="scss">
	.icon {
		overflow: hidden;
	}
</style>
