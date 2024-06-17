export const getCampaignData = async () => {
	const campaignId = useRuntimeConfig().public.CC_CAMPAIGN_ID;
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
