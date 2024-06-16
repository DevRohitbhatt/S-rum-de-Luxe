const campaignQueryEndpoint = 'https://api.checkoutchamp.com/campaign/query/?';

// const router = createRouter();

// router.get(
// 	'/getCampaignData',
// 	defineEventHandler((event) => {
// 		const runtimeConfig = useRuntimeConfig(event);
// 		const loginId = runtimeConfig.CC_LOGIN_ID;
// 		const password = runtimeConfig.CC_LOGIN_PASSWORD;
// 		const campaignId = runtimeConfig.public.CC_CAMPAIGN_ID;

// 		const queryParams = new URLSearchParams();
// 		queryParams.append('loginId', loginId);
// 		queryParams.append('password', password);
// 		queryParams.append('campaignId', campaignId);

// 		console.log('queryParams', queryParams);

// 		const url = `${campaignQueryEndpoint}${queryParams.toString()}`;

// 		const response = await $fetch(url, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});

// 		return response;
// 	})
// );

export default defineEventHandler((event) => {
	// const runtimeConfig = useRuntimeConfig(event);
	// const loginId = runtimeConfig.CC_LOGIN_ID;
	// const password = runtimeConfig.CC_LOGIN_PASSWORD;
	// const campaignId = runtimeConfig.public.CC_CAMPAIGN_ID;
	// const queryParams = new URLSearchParams();
	// queryParams.append('loginId', loginId);
	// queryParams.append('password', password);
	// queryParams.append('campaignId', campaignId);

	// const url = `${campaignQueryEndpoint}${queryParams.toString()}`;

	// console.log(url);
	// const response = await $fetch(url, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	// return response;
	return {
		id: 'getCampaignData',
	};
});
