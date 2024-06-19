export default defineEventHandler((event) => {
	const { req } = event.node;
	if (req.url == '/api/campaign/getCampaignData') {
		const contentType = getRequestHeader(event, 'Authorization');
		const response = decrypt(contentType, 3);
		const SecretKey = useRuntimeConfig().public.SECRET_KEY;
		if (response == SecretKey) {
			event.context.authorized = true;

			//return event.node;
		} else {
			throw createError({
				status: 401,
				message: 'Key not found',
			});
		}
	}
});
