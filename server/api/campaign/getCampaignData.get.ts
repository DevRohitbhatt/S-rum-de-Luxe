const campaignQueryEndpoint = 'https://api.checkoutchamp.com/campaign/query/?';

export default defineEventHandler(async (event) => {
	const runtimeConfig = useRuntimeConfig(event);
	const loginId = runtimeConfig.CC_LOGIN_ID;
	const password = runtimeConfig.CC_LOGIN_PASSWORD;
	const campaignId = runtimeConfig.public.CC_CAMPAIGN_ID;
	const queryParams = new URLSearchParams();
	queryParams.append('loginId', loginId);
	queryParams.append('password', password);
	queryParams.append('campaignId', campaignId);

	const url = `${campaignQueryEndpoint}${queryParams.toString()}`;

	const response = await $fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response;
});
