import { defineStore } from 'pinia';

export const usecheckoutChampStore = defineStore('checkoutChamp', () => {
	let cart = ref([]);
	const sessionId = ref('');
	const pageType = ref('');

	const setCartOnStore = (cartData) => {
		cart.value = cartData;
	};

	return { cart, sessionId, pageType, setCartOnStore };
});
