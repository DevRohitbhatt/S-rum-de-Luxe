export default defineEventHandler(async (event) => {
	const req = await readBody(event);
	const access_token = useRuntimeConfig().access_token;
	const APP_ID = useRuntimeConfig().APP_ID;

	const url = `https://graph.facebook.com/v20.0/999255381811406/events?access_token=${access_token}.`;

	const eventData = {
		data: req,
	};

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	};
	let capiRes = await fetch(url, requestOptions);
	capiRes = await capiRes.json();
	console.log(capiRes);

	return capiRes;
});
