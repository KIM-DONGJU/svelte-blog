import App from '@/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '김동주',
	}
});

export default app;