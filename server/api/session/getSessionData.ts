export default defineEventHandler(async (event) => {
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

	return session.data;
});
