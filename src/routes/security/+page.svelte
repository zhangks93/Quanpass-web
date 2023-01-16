<script>
	import { Chart, CandlestickSeries} from 'svelte-lightweight-charts';
	import axios from 'axios';
	import { onMount } from 'svelte';
	let observer;
	let width = 600;
	let height = 300;
	let ref = (element) => {
		if (observer) {
			observer.disconnect();
		}
		if (!element) {
			return;
		}
		observer = new ResizeObserver(([entry]) => {
			width = entry.contentRect.width;
			height = entry.contentRect.height;
		});
		observer.observe(element);
	};
	const options = {
		rightPriceScale: {
			scaleMargins: {
				top: 0.3,
				bottom: 0.25
			},
			borderVisible: false
		},
		layout: {
			backgroundColor: '#262626',
			textColor: '#d1d4dc'
		},
		grid: {
			vertLines: {
				color: 'rgba(42, 46, 57, 0)'
			},
			horzLines: {
				color: 'rgba(42, 46, 57, 0.6)'
			}
		}
	};
	let price = [];

	async function getData() {
		const endpoint = `http://199.247.20.57:5000/market/stock?secid=1.600658&interval=day`;
		const response = await axios.get(endpoint);
		const kline = response.data.data;
		price = kline.map(function (item) {
            item['time'] = item.datetime;
			return item;
		});
		console.log(price);
	}

	onMount(async function () {
		getData();
	});
</script>

<Chart {...options} {width} {height} container={{ ref }}>
	<CandlestickSeries
		data={price}
		reactive={true}
		upColor="rgba(244, 67, 54, 255)"
		downColor="rgba(76, 175, 80, 255)"
        borderDownColor="rgba(76, 175, 80, 255)"
        borderUpColor="rgba(244, 67, 54, 255)"
        wickDownColor="rgba(76, 175, 80, 255)"
        wickUpColor="rgba(244, 67, 54, 255)"
	/>
</Chart>
