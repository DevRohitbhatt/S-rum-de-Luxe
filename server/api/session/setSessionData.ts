export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const session = await useSession(event, {
		name: 'my-session',
		password: '80d42cfb-1cd2-462c-8f17-e3237d9027e9',
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
		},
		maxAge: 60 * 60 * 24 * 7,
	});

	let oldData = session.data.sessionData || {};
	let newData = { ...oldData, ...data };
	if (oldData === newData) {
		await session.update({
			sessionData: oldData,
		});
	} else {
		await session.update({
			sessionData: newData,
		});
	}

	if (data.body === '') {
		await session.clear();
	}

	return session.data;
});
