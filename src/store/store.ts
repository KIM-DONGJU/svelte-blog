import {writable} from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => {
			if (n > 10) {
				return n - 1
			} else {
				return n - 2
			}
		}),
		reset: () => set(0)
	};
}

export const count = createCount();