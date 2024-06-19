import encrypt from './encrypt';

function decrypt(text: any, shift: number): string {
	return encrypt(text, 26 - shift); // Decryption is just encryption with the inverse shift
}

export default decrypt;
