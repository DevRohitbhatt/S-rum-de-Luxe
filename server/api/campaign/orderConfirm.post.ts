const orderConfirmEndpoint = 'https://api.checkoutchamp.com/order/confirm/?';

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const loginId = useRuntimeConfig().CC_LOGIN_ID;
	const password = useRuntimeConfig().CC_LOGIN_PASSWORD;
	const campaignId = useRuntimeConfig().public.CC_CAMPAIGN_ID;

	const queryParams = new URLSearchParams();
	queryParams.append('loginId', loginId);
	queryParams.append('password', password);
	queryParams.append('campaignId', campaignId);
	queryParams.append('orderId', data.orderId);

	const url = `${orderConfirmEndpoint}${queryParams.toString()}`;

	const response = await $fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response;
});
