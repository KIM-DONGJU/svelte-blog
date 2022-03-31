<script lang="ts">
	import { count } from '@/store/store';
	export let name: string;
</script>

<main>
	<h1 on:click={count.decrement}>Hello {name}!</h1>
	<p on:click={count.increment}>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps. {$count}</p>
</main>


<style lang="scss">
main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
	
	h1 {
	color: #ff3e00;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}
}

@media (min-width: 640px) {
	main {
		max-width: none;
	}
}
</style>