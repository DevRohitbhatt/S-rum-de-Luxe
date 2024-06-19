export const getCampaignData = async () => {
	const campaignId = useRuntimeConfig().public.CC_CAMPAIGN_ID;
	const secretKey = useRuntimeConfig().public.SECRET_KEY;
	const shift = 3;
	const encrypted = encrypt(secretKey, shift);
	const myHeaders = new Headers();
	myHeaders.append('key', 'value');
	myHeaders.append('Authorization', encrypted);

	try {
		const { data } = await useFetch('/api/campaign/getCampaignData');
		return JSON.parse(data.value).message.data[campaignId];
	} catch (err) {
		console.error('Error fetching campaign data: ', err);
	}
};

export const getRequestUri = () => {
	return (
		window.location.protocol +
		'//' +
		window.location.hostname +
		':' +
		window.location.port +
		window.location.pathname +
		window.location.hash
	);
};

// export const setSessionData = async (data) => {
// 	const requestUri = '/api/session/setSessionData';
// 	const myHeaders = new Headers();
// 	myHeaders.append('Content-Type', 'application/json');
// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: data,
// 		redirect: 'follow',
// 	};

// 	const response = await $fetch(requestUri, requestOptions);
// 	// const data = await response.json();
// 	console.log('response', response);

// 	return response;
// };
