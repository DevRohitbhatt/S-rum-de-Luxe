const useFormValidation = (formData, errors) => {
	// VALIDATION METHODS
	const validateEmailAddress = (emailAddress) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return regex.test(emailAddress);
	};

	const validatePhoneNumber = (phoneNumber) => {
		const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return regex.test(phoneNumber);
	};

	const validateCreditCardNumber = (creditCardNumber) => {
		const cleanedCardNumber = creditCardNumber.replace(/[^\d]/g, '');
		//const number = card.parse(cleanedCardNumber);
		// console.log('number', number);

		// Use regular expressions to validate the credit card number format
		// const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
		// const mastercardPattern = /^5[1-5][0-9]{14}$/;
		// const amexPattern = /^3[47][0-9]{13}$/;

		// if (
		// 	visaPattern.test(cleanedCardNumber) ||
		// 	mastercardPattern.test(cleanedCardNumber) ||
		// 	amexPattern.test(cleanedCardNumber)
		// ) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return true;
	};

	const validateExpiryDate = (month, year) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth() + 1;
		if (year < currentYear) {
			return false;
		} else if (year == currentYear && month < currentMonth) {
			return false;
		}
		return true;
	};

	const checkValidation = () => {
		let isValid = true;
		// Email Validation
		if (!formData.value.email) {
			errors.value.email = 'Please enter email';
			isValid = false;
		} else if (!validateEmailAddress(formData.value.email)) {
			errors.value.email = 'Please enter valid email';
			isValid = false;
		} else {
			delete errors.value.email;
		}

		// Phone Number Validation
		if (!formData.value.phoneNumber) {
			errors.value.phoneNumber = 'Please enter phone number';
			isValid = false;
		} else if (!validatePhoneNumber(formData.value.phoneNumber)) {
			errors.value.phoneNumber = 'Please enter valid phone number';
			isValid = false;
		} else {
			delete errors.value.phoneNumber;
		}

		//Shipping Info Validation
		if (!formData.value.fname) {
			errors.value.fname = 'Please enter first name';
			isValid = false;
		} else {
			delete errors.value.fname;
		}

		if (!formData.value.lname) {
			errors.value.lname = 'Please enter last name';
			isValid = false;
		} else {
			delete errors.value.lname;
		}

		if (!formData.value.address_1) {
			errors.value.address_1 = 'Please enter address';
			isValid = false;
		} else {
			delete errors.value.address_1;
		}

		if (!formData.value.city) {
			errors.value.city = 'Please enter city';
			isValid = false;
		} else {
			delete errors.value.city;
		}

		if (!formData.value.country) {
			errors.value.country = 'Please select country';
			isValid = false;
		} else {
			delete errors.value.country;
		}

		if (!formData.value.state) {
			errors.value.state = 'Please select state';
			isValid = false;
		} else {
			delete errors.value.state;
		}

		if (!formData.value.postalcode) {
			errors.value.postalcode = 'Please enter postal code';
			isValid = false;
		} else {
			delete errors.value.postalcode;
		}

		if (!formData.value.shippingMethod) {
			errors.value.shippingMethod = 'Please select shipping method';
			isValid = false;
		} else {
			delete errors.value.shippingMethod;
		}

		if (formData.value.billSame == 0) {
			if (!formData.value.billDetails.billfname) {
				errors.value.billfname = 'Please enter first name';
				isValid = false;
			} else {
				delete errors.value.billfname;
			}

			if (!formData.value.billDetails.billlname) {
				errors.value.billlname = 'Please enter last name';
				isValid = false;
			} else {
				delete errors.value.billlname;
			}

			if (!formData.value.billDetails.billaddress_1) {
				errors.value.billaddress_1 = 'Please enter address';
				isValid = false;
			} else {
				delete errors.value.billaddress_1;
			}

			if (!formData.value.billDetails.billcity) {
				errors.value.billcity = 'Please enter city';
				isValid = false;
			} else {
				delete errors.value.billcity;
			}

			if (!formData.value.billDetails.billcountry) {
				errors.value.billcountry = 'Please select country';
				isValid = false;
			} else {
				delete errors.value.billcountry;
			}

			if (!formData.value.billDetails.billstate) {
				errors.value.billstate = 'Please select state';
				isValid = false;
			} else {
				delete errors.value.billstate;
			}

			if (!formData.value.billDetails.billpostalcode) {
				errors.value.billpostalcode = 'Please enter postal code';
				isValid = false;
			} else {
				delete errors.value.billpostalcode;
			}
		}

		// Credit Card Validation
		if (!formData.value.creditCardNumber) {
			errors.value.creditCardNumber = 'Please enter credit card number';
			isValid = false;
		} else if (formData.value.creditCardNumber.length < 16) {
			errors.value.creditCardNumber = 'Please enter valid credit card number';
			isValid = false;
		} else if (!validateCreditCardNumber(formData.value.creditCardNumber)) {
			errors.value.creditCardNumber = 'Please enter valid credit card number';
			isValid = false;
		} else {
			delete errors.value.creditCardNumber;
		}

		if (!formData.value.creditCardMonth) {
			errors.value.creditCardMonth = 'Please select expiry month';
			isValid = false;
		} else if (!validateExpiryDate(formData.value.creditCardMonth, formData.value.creditCardYear)) {
			errors.value.creditCardMonth = 'Please select valid expiry month';
			isValid = false;
		} else {
			delete errors.value.creditCardMonth;
		}

		if (!formData.value.creditCardYear) {
			errors.value.creditCardYear = 'Please select expiry year';
			isValid = false;
		} else {
			delete errors.value.creditCardYear;
		}

		if (!formData.value.creditCardCVV) {
			errors.value.creditCardCVV = 'Please enter CVV code';
			isValid = false;
		} else {
			delete errors.value.creditCardCVV;
		}
		return isValid;
	};

	return {
		checkValidation,
	};
};

export default useFormValidation;
