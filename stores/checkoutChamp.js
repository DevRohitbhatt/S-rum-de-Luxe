import { defineStore } from 'pinia';

export const usecheckoutChampStore = defineStore('checkoutChamp', () => {
	let cart = ref([]);
	const sessionId = ref('');
	const pageType = ref('');
	const customerId = ref('');

	const setCartOnStore = (cartData) => {
		cart.value = cartData;
	};

	const setSessionId = (session) => {
		sessionId.value = session;
	};

	const setPageType = (page) => {
		pageType.value = page;
	};

	const setCustomerId = (customer) => {
		customerId.value = customer;
	};

	return { cart, sessionId, pageType, setCartOnStore, setSessionId, setPageType, setCustomerId };
});
