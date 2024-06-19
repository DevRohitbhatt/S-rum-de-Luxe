const encrypt = (text: string, shift: number) => {
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

export default encrypt;
