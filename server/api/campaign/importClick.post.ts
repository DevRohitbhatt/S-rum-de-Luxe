export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const loginId = useRuntimeConfig().CC_LOGIN_ID;
	const password = useRuntimeConfig().CC_LOGIN_PASSWORD;
	const campaignId = useRuntimeConfig().CC_CAMPAIGN_ID;

	const formData = new FormData();
	formData.append('loginId', loginId);
	formData.append('password', password);
	formData.append('campaignId', campaignId);
	formData.append('pagetype', data.pagetype);
	formData.append('requestUri', data.requestUri);

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: formData,
	};

	return {
		id: 'importClick',
	};
});
