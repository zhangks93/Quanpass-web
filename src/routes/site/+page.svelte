<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { DataTable } from "carbon-components-svelte";
	const endpoint = 'http://199.247.20.57:5000/market/stock/volumeRanking?desc=1';
	let data = [];
	onMount(async function () {
		const response = await axios.get(endpoint);
		data = response.data.data;
		data.forEach(element => {
			element.id = element.Code
		});
		console.log(data);
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<DataTable 
size="short"
headers={[
    { key: "Name", value: "Name" },
    { key: "MktCap", value: "MarketCap" },
    { key: "Volume", value: "Volume" },
    { key: "Price", value: "Price" },
	{ key: "ChangePct", value: "ChangePct" },
  ]} 
  rows={data}/>
