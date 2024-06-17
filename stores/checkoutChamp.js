import { defineStore } from 'pinia';

export const usecheckoutChampStore = defineStore('checkoutChamp', () => {
	let cart = ref([]);
	const sessionId = ref('');
	const pageType = ref('');
	const customerId = ref(0);
	const orderId = ref('');

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

	const setOrderId = (order) => {
		orderId.value = order;
	};

	return {
		cart,
		sessionId,
		pageType,
		customerId,
		orderId,
		setCartOnStore,
		setSessionId,
		setPageType,
		setCustomerId,
		setOrderId,
	};
});
