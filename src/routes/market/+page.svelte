<script>
	import {
		StructuredList,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		Loading,
		Select,
		SelectItem,
		Toggle
	} from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	let data = [];
	let isLoading = true;
	let selectedCategory = 'crypto';
	let selectedOrderItem = 'marketCapRanking';
	let descending = true;
	async function getData() {
		isLoading = true;
		const endpoint = `http://199.247.20.57:5000/market/${selectedCategory}/${selectedOrderItem}?desc=${
			descending ? '1' : '0'
		}`;
		const response = await axios.get(endpoint);
		data = response.data.data;
		isLoading = false;
	}
	onMount(async function () {
		getData();
	});
</script>

<svelte:head>
	<title>Market</title>
</svelte:head>
<div>
	<StructuredList condensed selection>
		<div style="width: 150%;">
			<div style="float:left;display:flex">
				<Select inline bind:selected={selectedCategory} on:update={() => getData()}>
					<SelectItem value="crypto" text="crypto" />
					<SelectItem value="stock" text="stock" />
				</Select>
			</div>
			<div style="float:right;display:flex">
				<div style="float:left;display:flex">
					<Select inline bind:selected={selectedOrderItem} on:update={() => getData()}>
						<SelectItem value="marketCapRanking" text="marketcap" />
						<SelectItem value="volumeRanking" text="volume" />
						<SelectItem value="changepctRanking" text="changepct" />
					</Select>
				</div>
				<div style="float:right;display:flex">
					<Toggle size="sm" bind:toggled={descending} labelA="⇩" labelB="⇧" on:toggle={() => getData()} />
				</div>
			</div>
		</div>

		<StructuredListBody>
			{#if isLoading}
				<Loading withOverlay={false} />
			{:else}
				{#each data as item}
					<StructuredListRow
						label
						for="row-{item.Code}"
						on:click={() => {
							window.location.href = `http://${window.location.host}/security?secid=${item.Market}.${item.Code}&interval=day`;
						}}
					>
						<StructuredListCell><b> {item.Name}</b><br />{item.Code}</StructuredListCell>
						<StructuredListCell align="right">{item.MktCap}<br />{item.Volume}</StructuredListCell>
						<StructuredListCell align="right">
							{item.Price}<br />{item.ChangePct === null ? 0 : item.ChangePct.toFixed(2)} %
						</StructuredListCell>
					</StructuredListRow>
				{/each}
			{/if}
		</StructuredListBody>
	</StructuredList>
</div>

<style>
</style>
