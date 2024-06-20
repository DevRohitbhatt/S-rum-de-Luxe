export const getCampaignData = async () => {
	const campaignId = useRuntimeConfig().public.CC_CAMPAIGN_ID;
	const secretKey = useRuntimeConfig().public.SECRET_KEY;
	const shift = 3;
	const encrypted = encrypt(secretKey, shift);
	const myHeaders = new Headers();
	// myHeaders.append('key', 'value');
	myHeaders.append('Authorization', encrypted);

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	try {
		const response = await $fetch('/api/campaign/getCampaignData', requestOptions);
		return JSON.parse(response).message.data[campaignId];
	} catch (err) {
		console.error('Error fetching campaign data: ', err);
	}
};

export const getIpAddress = async () => {
	const res = await $fetch('https://api.ipify.org?format=json');

	return res.ip;
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

// Function to hash data using SHA-256
export const hashSHA256 = async (data) => {
	const encoder = new TextEncoder();
	const dataBuffer = encoder.encode(data);
	const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

// Encrypt getCampaignData
const encrypt = (text, shift) => {
	const encryptedText = text + '';
	return encryptedText
		.split('')
		.map((char) => {
			const code = char.charCodeAt(0);
			if (code >= 65 && code <= 90) {
				return String.fromCharCode(((code - 65 + shift) % 26) + 65); // Uppercase letters
			} else if (code >= 97 && code <= 122) {
				return String.fromCharCode(((code - 97 + shift) % 26) + 97); // Lowercase letters
			} else if (code >= 48 && code <= 57) {
				return String.fromCharCode(((code - 48 + shift) % 10) + 48); // Digits
			} else {
				return char; // Non-alphanumeric characters
			}
		})
		.join('');
};

// import { H3Event } from 'h3';

// export default defineEventHandler((event: H3Event) => {
// 	const { req } = event.node;
// 	const SecretKey = useRuntimeConfig(event).public.SECRET_KEY;
// 	const Authorization = getRequestHeader(event, 'Authorization');
// 	const response = decrypt(Authorization, 3);
// 	if (req.url == '/api/campaign/getCampaignData') {
// 		if (response == SecretKey) {
// 			return event;
// 		} else {
// 			throw createError({
// 				status: 401,
// 				message: 'Key not found',
// 			});
// 		}
// 	}
// });
