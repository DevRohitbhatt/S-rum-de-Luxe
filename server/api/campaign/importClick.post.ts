const importClickEndpoint = 'https://api.checkoutchamp.com/landers/clicks/import/?';

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const loginId = useRuntimeConfig().CC_LOGIN_ID;
	const password = useRuntimeConfig().CC_LOGIN_PASSWORD;
	const campaignId = useRuntimeConfig().public.CC_CAMPAIGN_ID;

	const queryParams = new URLSearchParams();
	queryParams.append('loginId', loginId);
	queryParams.append('password', password);
	queryParams.append('campaignId', campaignId);
	queryParams.append('pageType', data.pagetype);
	queryParams.append('requestUri', data.requestUri);
	queryParams.append('sessionId', data.sessionId);

	const url = `${importClickEndpoint}${queryParams.toString()}`;

	const response = await $fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: '',
	});

	return response;
});
