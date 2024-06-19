// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt'],
	pinia: {
		storesDirs: ['./stores'],
	},
	app: {
		head: {
			meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
			title: 'Sérum de Luxe',
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon.ico',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
				},
			],
			script: [],
		},
	},
	runtimeConfig: {
		CC_LOGIN_ID: 'revbdevdsg.helikon',
		CC_LOGIN_PASSWORD: 'yk5Z549ZN2KFz',
		public: {
			CC_CAMPAIGN_ID: '4',
			SECRET_KEY: 'darkAngle',
			email: 'support@sérumdeluxe.com',
		},
	},
});
