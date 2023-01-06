<script>
	import { Tile, Grid, Row, Column, Loading } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	const endpoint = 'http://199.247.20.57:5000/market/stock/volumeRanking?desc=1';
	/**
	 * @type {any[]}
	 */
	let data = [];
	let isLoading = true;
	onMount(async function () {
		const response = await axios.get(endpoint);
		data = response.data.data;
		data.forEach((element) => {
			element.id = element.Code;
		});
		isLoading = false;
	});
</script>

<svelte:head>
	<title>Market</title>
</svelte:head>
<div>
	{#if isLoading}
	<Loading />
{:else}

	{#each data as item}
		<Tile 
			><Grid condensed>
				<Row>
					<Column><p>{item.Name}</p><br/>{item.Code}</Column>
					<Column>{item.MktCap}<br />{item.Volume}</Column>
					<Column>{item.Price}<br />{item.ChangePct}</Column>
				</Row>
			</Grid>
		</Tile>
	{/each}
	{/if}
</div>

<style>
	
</style>
