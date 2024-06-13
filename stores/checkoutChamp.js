import { defineStore } from 'pinia';

export const usecheckoutChampStore = defineStore('checkoutChamp', () => {
	const cart = ref([]);
	const sessionId = ref(null);
	const pageType = ref(null);
});
