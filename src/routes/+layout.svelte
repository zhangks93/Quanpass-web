<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { Theme, Content } from 'carbon-components-svelte';
</script>

<Theme
	theme="g90"
	tokens={{
		'interactive-01': '#d02670',
		'hover-primary': '#ee5396',
		'active-primary': '#9f1853'
	}}
	><div class="app">
		<Header />
		<Content>
			<main><slot /></main>
		</Content>
	</div>
</Theme>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
