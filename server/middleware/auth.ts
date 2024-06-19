import { H3Event } from 'h3';

export default defineEventHandler((event: H3Event) => {
	const { req } = event.node;
	const SecretKey = useRuntimeConfig(event).public.SECRET_KEY;
	const Authorization = getRequestHeader(event, 'Authorization');
	const response = decrypt(Authorization, 3);
	if (req.url == '/api/campaign/getCampaignData') {
		if (response == SecretKey) {
			return event;
		} else {
			throw createError({
				status: 401,
				message: 'Key not found',
			});
		}
	}
});
