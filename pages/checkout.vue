<script setup>
import states from '~/assets/states.json';
import img from '/images/product.png';

// CUSTOM LAYOUT
definePageMeta({
	layout: 'custom',
});

const countryList = [
	{
		countryName: 'United States',
		countryCode: 'US',
		continent: 'NA',
		currencyCode: 'USD',
		numericCode: '840',
	},
	{
		countryName: 'Australia',
		countryCode: 'AU',
		continent: 'AU',
		currencyCode: 'AUD',
		numericCode: '036',
	},
];
const product = {
	productName: 'Sérum de Luxe',
	productDescription:
		'Advanced Antioxidant Skincare That Erases Wrinkles In A Single Bottle. The All-In-One Facial Serum Designed To Lift Fine Lines, Wrinkles, and bring back your skin’s youthful glow.',
	productPrice: 47,
	productImage: img,
	productRating: 5,
};

// VARIABLES DECLARATION
let stateList = ref({});
let stateListBilling = ref({});
let errors = ref({});
let timer = ref(300);
let timerExpired = ref(false);
const cart = ref({
	subTotal: 0,
	discount: 0,
	tax: 0,
	shipping: 0,
	total: 0,
	quantity: 1,
});
const shippingMethods = [
	{
		name: 'Flat Rate (4-7 business days)',
		value: 'flat_rate',
		price: 0,
	},
	{
		name: 'Express (2-3 business days)',
		value: 'express',
		price: 10,
	},
	{
		name: 'Overnight (1 business day)',
		value: 'overnight',
		price: 20,
	},
];
const formData = ref({
	email: '',
	phoneNumber: '',
	fname: '',
	lname: '',
	address_1: '',
	address_2: '',
	city: '',
	country: '',
	state: '',
	postalcode: '',
	shippingMethod: '',
	couponCode: '',
	billSame: 1,
	billDetails: {
		billfname: '',
		billlname: '',
		billaddress_1: '',
		billaddress_2: '',
		billcity: '',
		billcountry: '',
		billstate: '',
		billpostalcode: '',
	},
	creditCardNumber: '',
	creditCardMonth: '',
	creditCardYear: '',
	creditCardCVV: '',
	shippingMethod: '',
	couponCode: '',
});

//METHODS;

// TIMER
const formatTimer = () => {
	const interval = setInterval(() => {
		timer.value--;
		if (timer.value === 0) {
			timerExpired.value = true;
			clearInterval(interval);
		}
	}, 1000);

	return timer.value;
};

// Creating Spaces in Credit Card Number
const formatCreditCard = () => {
	const ccNumber = document.getElementById('cc_number');
	ccNumber.addEventListener('input', function (e) {
		let x = e.target.value.replace(/\D/g, '').match(/.{1,4}/g);
		e.target.value = x ? x.join(' ') : '';
	});
};

const formatCreditCardaAfter = () => {
	const ccNumber = document.getElementById('cc_number');
	ccNumber.addEventListener('blur', function (e) {
		formData.value.creditCardNumber = e.target.value.replace(/\s/g, '');
	});
};

// get current state based on country
const getCurrentState = () => {
	Object.keys(states.stateList).forEach((key) => {
		if (key === formData.value.country) {
			stateList.value = states.stateList[key];
		}
	});
};

// gettting current state based on billing country
const getCurrentStateBilling = () => {
	Object.keys(states.stateList).forEach((key) => {
		if (key === formData.value.billDetails.billcountry) {
			stateListBilling.value = states.stateList[key];
		}
	});
};

const handleSubmit = () => {
	checkValidation();
	if (checkValidation()) {
		navigateTo('/thankyou');
	}
};

// SESSION METHODS
const getSessionData = () => {
	const requestUri = '/api/session';
	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};

	const { data } = useFetch(requestUri, requestOptions);

	console.log('get-response', data.value);
};

getSessionData();

const setSessionData = async () => {
	const requestUri = '/api/session';
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(formData.value),
		redirect: 'follow',
	};

	const { data } = await useFetch(requestUri, requestOptions);
	// const data = await response.json();
	console.log('response', data.value);
};

setSessionData();

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

	// Use regular expressions to validate the credit card number format
	const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const mastercardPattern = /^5[1-5][0-9]{14}$/;
	const amexPattern = /^3[47][0-9]{13}$/;

	if (
		visaPattern.test(cleanedCardNumber) ||
		mastercardPattern.test(cleanedCardNumber) ||
		amexPattern.test(cleanedCardNumber)
	) {
		return true;
	} else {
		return false;
	}
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

//CART METHODS
const changeQuantity = (value) => {
	if (value === 'add') {
		cart.value.quantity++;
	} else {
		cart.value.quantity--;
	}
	calculateSubTotal();
	calculateTax();
	calculateTotal();
};

const calculateSubTotal = () => {
	cart.value.subTotal = cart.value.quantity * product.productPrice;
};

const calculateTax = () => {
	cart.value.tax = cart.value.subTotal * 0.1;
};

const calculateShippingPrice = () => {
	switch (formData.value.shippingMethod) {
		case 'flat_rate':
			cart.value.shipping = 0;
			break;
		case 'express':
			cart.value.shipping = 10;
			break;
		case 'overnight':
			cart.value.shipping = 20;
			break;
		default:
			cart.value.shipping = 0;
			break;
	}

	calculateTotal();
};

const calculateTotal = () => {
	cart.value.total = cart.value.subTotal + cart.value.tax + cart.value.shipping - cart.value.discount;
};

//LIFECYCLE METHODS
onMounted(() => {
	formatTimer(timer.value);
	calculateSubTotal();
	calculateTax();
	calculateTotal();
});
</script>

<template>
	<form @submit.prevent="">
		<div class="formbody">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="alert alert-primary shadow-sm" role="alert">
							<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
							<span v-if="!timerExpired">Due to high demand, your order is only reserved for: </span>
							<span v-if="timerExpired">Offer Expired</span>
							<strong v-if="!timerExpired"
								>{{ Math.floor(timer / 60) }}:{{
									timer % 60 < 10 ? '0' + Math.floor(timer % 60) : Math.floor(timer % 60)
								}}</strong
							>
						</div>
					</div>
				</div>

				<div class="row gx-5">
					<div class="col-md-6">
						<div class="left-side-form">
							<div class="div-1 controlform fr-2">
								<h4>Contact information</h4>
								<span id="timer"></span>
								<div class="row">
									<div class="form-group col-md-12 mb-2">
										<input
											type="email"
											name="email"
											placeholder="Email Address"
											class="form-control"
											v-model="formData.email"
											@input="validateEmail"
										/>
										<p class="text-error-msg" v-if="errors.email">{{ errors.email }}</p>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12 mb-2">
										<input
											type="text"
											name="phoneNumber"
											id="phoneNumber"
											class="form-control"
											placeholder="Phone Number"
											maxlength="10"
											v-model="formData.phoneNumber"
											onkeypress="return /[0-9]/i.test(event.key);"
										/>

										<p class="text-error-msg" v-if="errors.phoneNumber">{{ errors.phoneNumber }}</p>
									</div>
								</div>
							</div>

							<hr />
							<div class="div-1 controlform fr-2 controlform2">
								<h4>Shipping Information</h4>
								<div class="row">
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											class="form-control"
											type="text"
											name="fname"
											id="shipfname"
											placeholder="First Name"
											v-model="formData.fname"
										/>
										<p class="text-error-msg" v-if="errors.fname">{{ errors.fname }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											class="secss form-control"
											name="lname"
											id="shiplname"
											placeholder="Last Name"
											v-model="formData.lname"
										/>
										<p class="text-error-msg" v-if="errors.lname">{{ errors.lname }}</p>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12 px-1 mb-2">
										<input
											class="ads1 form-control"
											type="text"
											name="address_1"
											id="shipaddress1"
											placeholder="Address 1"
											v-model="formData.address_1"
										/>
										<p class="text-error-msg" v-if="errors.address_1">{{ errors.address_1 }}</p>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12 px-1 mb-2">
										<input
											type="text"
											name="address_2"
											id="shipAddress2"
											placeholder="Apartment, suite, etc. (optional)"
											class="form-control secss"
											v-model="formData.address_2"
										/>
										<p class="text-error-msg" v-if="errors.address_1"></p>
									</div>
								</div>

								<div class="row">
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											class="form-control"
											type="text"
											name="city"
											id="city"
											placeholder="Town / City"
											v-model="formData.city"
										/>
										<p class="text-error-msg" v-if="errors.city">{{ errors.city }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<select
											name="country"
											v-model="formData.country"
											@change="getCurrentState"
											class="form-control-custom fk-form-select form-select"
										>
											<option disabled value="">Select Country</option>
											<option
												v-for="(item, index) in countryList"
												:key="index"
												:value="item.countryCode"
											>
												{{ item.countryName }}
											</option>
										</select>
										<p class="text-error-msg" v-if="errors.country">{{ errors.country }}</p>
									</div>

									<div class="form-group col-md-6 px-1 mb-2">
										<select
											v-model="formData.state"
											class="form-control-custom fk-form-select form-select"
										>
											<option disabled value="">Select State</option>
											<option v-for="(item, index) in stateList" :key="index" :value="item">
												{{ item }}
											</option>
										</select>
										<p class="text-error-msg" v-if="errors.state">{{ errors.state }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											class="form-control"
											type="text"
											maxlength="6"
											name="postalcode"
											id="postalcode"
											placeholder="Postal Code"
											onkeypress="return /[0-9]/i.test(event.key);"
											v-model="formData.postalcode"
										/>
										<p class="text-error-msg" v-if="errors.postalcode">{{ errors.postalcode }}</p>
									</div>
								</div>

								<div class="row">
									<div class="form-group col-md-6 px-1 mb-2">
										<select
											class="form-control-custom fk-form-select form-select"
											name="shippingMethod"
											id="shippingMethod"
											v-model="formData.shippingMethod"
											@change="calculateShippingPrice"
										>
											<option disabled value="">Select Shipping Method</option>
											<option
												v-for="(item, index) in shippingMethods"
												:key="index"
												:value="item.value"
											>
												{{ item.name + ': $' + item.price }}
											</option>
										</select>
										<p class="text-error-msg" v-if="errors.shippingMethod">
											{{ errors.shippingMethod }}
										</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											name="couponCode"
											placeholder="Coupon Code"
											v-model="formData.couponCode"
											class="secss form-control"
										/>
									</div>
								</div>

								<div class="input-ship-add">
									<input
										v-model="formData.billSame"
										id="checkbox-sh"
										name="billShipSame"
										type="checkbox"
										true-value="1"
										false-value="0"
									/>
									Billing Address is Same As Shipping Address?
								</div>
							</div>
							<!-----------Billing Information-->
							<div class="div-1 controlform fr-2 controlform2" v-if="formData.billSame == 0">
								<h4>Billing Information</h4>
								<div class="row">
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											class="form-control"
											name=" billfname"
											id="billfname"
											placeholder="First Name"
											v-model="formData.billDetails.billfname"
										/>
										<p class="text-error-msg" v-if="errors.billfname">{{ errors.billfname }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											class="form-control"
											name=" billlname"
											id="billlname"
											placeholder="Last Name"
											v-model="formData.billDetails.billlname"
										/>
										<p class="text-error-msg" v-if="errors.billlname">{{ errors.billlname }}</p>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12 px-1 mb-2">
										<input
											type="text"
											name="billaddress_1"
											id="billaddress_1"
											class="form-control"
											placeholder=" Address 1"
											v-model="formData.billDetails.billaddress_1"
										/>
										<p class="text-error-msg" v-if="errors.billaddress_1">
											{{ errors.billaddress_1 }}
										</p>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12 px-1 mb-2">
										<input
											type="text"
											name="shipAddress2"
											placeholder="Apt, suite, etc. (optional)"
											v-model="formData.billDetails.billaddress_2"
											class="form-control secss"
										/>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											class="form-control"
											name="shipCity"
											placeholder="Town / City"
											spellcheck="false"
											isrequired=""
											v-model="formData.billDetails.billcity"
										/>
										<p class="text-error-msg" v-if="errors.billcity">{{ errors.billcity }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<select
											v-model="formData.billDetails.billcountry"
											name="billCountry"
											@change="getCurrentStateBilling"
											class="form-control-custom fk-form-select form-select"
										>
											<option disabled value="">Select Country</option>
											<option
												v-for="(item, index) in countryList"
												:key="index"
												:value="item.countryCode"
											>
												{{ item.countryName }}
											</option>
										</select>
										<p class="text-error-msg" v-if="errors.billcountry">{{ errors.billcountry }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<select
											name="billState"
											v-model="formData.billDetails.billstate"
											class="form-control-custom fk-form-select form-select"
										>
											<option disabled value="">State/Province</option>
											<option
												v-for="(item, index) in stateListBilling"
												:key="index"
												:value="item"
											>
												{{ item }}
											</option>
										</select>
										<p class="text-error-msg" v-if="errors.billstate">{{ errors.billstate }}</p>
									</div>
									<div class="form-group col-md-6 px-1 mb-2">
										<input
											type="text"
											maxlength="6"
											name="shipPostalCode"
											placeholder="Postal Code"
											spellcheck="false"
											class="shipzip form-control"
											isrequired=""
											data-threeds="shippingZipCode"
											onkeypress="return /[0-9]/i.test(event.key);"
											v-model="formData.billDetails.billpostalcode"
										/>
										<p class="text-error-msg" v-if="errors.billpostalcode">
											{{ errors.billpostalcode }}
										</p>
									</div>
								</div>
							</div>

							<hr />
							<div class="div-1 controlform fr-2">
								<h4 class="mb-0">Payment Info</h4>
								<p class="ptag">All transactions are secure and encrypted</p>
								<div class="row">
									<div class="col-10 mx-auto mb-3 mt-2">
										<img src="/images/secure-1.png" class="img-fluid" />
									</div>
								</div>

								<div class="payment-card">
									<div class="row">
										<div class="form-group col-md-12 px-1 mb-2">
											<div class="car-info">
												<input
													type="text"
													name="creditCardNumber"
													id="cc_number"
													class="form-control"
													placeholder="Credit Card"
													onkeypress="return /[0-9]/i.test(event.key);"
													v-model="formData.creditCardNumber"
													maxlength="19"
													@input="formatCreditCard()"
													@blur="formatCreditCardaAfter()"
												/>

												<i class="fa fa-credit-card" aria-hidden="true"></i>
											</div>
											<p class="text-error-msg" v-if="errors.creditCardNumber">
												{{ errors.creditCardNumber }}
											</p>
										</div>
									</div>

									<div class="row">
										<div class="form-group col-md-3 px-1 mb-2">
											<select
												name="creditCardMonth"
												class="block form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm required"
												data-error-message="Please select a valid expiry month!"
												v-model="formData.creditCardMonth"
											>
												<option disabled value="">Month</option>
												<option value="01">(01) January</option>
												<option value="02">(02) February</option>
												<option value="03">(03) March</option>
												<option value="04">(04) April</option>
												<option value="05">(05) May</option>
												<option value="06">(06) June</option>
												<option value="07">(07) July</option>
												<option value="08">(08) August</option>
												<option value="09">(09) September</option>
												<option value="10">(10) October</option>
												<option value="11">(11) November</option>
												<option value="12">(12) December</option>
											</select>
											<p class="text-error-msg" v-if="errors.creditCardMonth">
												{{ errors.creditCardMonth }}
											</p>
										</div>

										<div class="form-group col-md-3 px-1 mb-2">
											<select
												name="creditCardYear"
												v-model="formData.creditCardYear"
												class="block form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm required"
											>
												<option disabled value="">Year</option>
												<option
													v-for="(num, index) in 10"
													:key="index + 'year'"
													:value="new Date().getFullYear() + index"
												>
													{{ new Date().getFullYear() + index }}
												</option>
											</select>
											<p class="text-error-msg" v-if="errors.creditCardYear">
												{{ errors.creditCardYear }}
											</p>
										</div>

										<div class="form-group col-md-6 px-1 mb-2">
											<input
												type="text"
												name="creditCardCVV"
												onkeypress="return /[0-9]/i.test(event.key);"
												v-model="formData.creditCardCVV"
												class="form-control"
												placeholder="CVV Code"
												maxlength="3"
											/>
											<p class="text-error-msg" v-if="errors.creditCardCVV">
												{{ errors.creditCardCVV }}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Side Form -->
					<div class="col-md-6">
						<div class="right-side-form">
							<h4>Order summary</h4>
							<div class="checkout-cart-design">
								<div class="cart-details">
									<div class="row">
										<p class="text-center p-4 text-bold" v-if="cart.quantity === 0">
											Cart Is Empty
										</p>
										<table id="kcartTable" style="margin-top: 2px">
											<tbody>
												<tr id="kcartDetail">
													<td class="product__image">
														<div class="product-thumbnail" v-if="cart.quantity !== 0">
															<div class="product-thumbnail__wrapper">
																<img
																	class="product-thumbnail__image"
																	:src="product.productImage"
																	alt="Product Image"
																/>
															</div>

															<span
																class="product-thumbnail__quantity"
																aria-hidden="true"
																>{{ cart.quantity }}</span
															>
														</div>
													</td>
													<td class="product__description disb">
														<span
															class="product__description__name order-summary__emphasis"
															style="font-weight: 600; font-size: 18px"
														>
															{{ product.productName }}</span
														>
														<p class="quantity-text">Max Quantity: 3</p>
													</td>
													<td class="">
														<div style="white-space: nowrap">
															<button
																class="border-2 px-2 cursor-pointer py-1 rounded-md mr-2"
																@click="cart.quantity > 1 ? changeQuantity() : ''"
															>
																-
															</button>
															<span class="">{{ cart.quantity }}</span>
															<button
																class="border-2 px-2 cursor-pointer py-1 rounded-md ml-2"
																@click="cart.quantity < 3 ? changeQuantity('add') : ''"
															>
																+
															</button>
														</div>
													</td>
													<td class="product__price disb">
														<span class="order-summary__emphasis skeleton-while-loading">
															<span
																class="kcartItemTotal"
																style="font-weight: 600; font-size: 18px"
																>${{ product.productPrice.toFixed(2) }}</span
															>
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<hr />

									<div class="row">
										<div class="products-deetais-price">
											<div class="d-flex align-items-center justify-content-between py-2">
												<dt class="text-base">Sub Total</dt>
												<dd class="text-base font-medium text-gray-900 productMsrp">
													${{ cart.subTotal.toFixed(2) }}
												</dd>
											</div>

											<div class="d-flex align-items-center justify-content-between py-2">
												<dt class="text-base">Discount:</dt>
												<dd
													class="text-base text-gray-900 font-medium productDiscount"
													id="discount"
												>
													${{ cart.discount.toFixed(2) }}
												</dd>
											</div>

											<div class="d-flex align-items-center justify-content-between py-2" i7>
												<dt class="text-base">Estimated taxes</dt>
												<dd class="text-base font-medium text-gray-900 productMsrp">
													${{ cart.tax.toFixed(2) }}
												</dd>
											</div>

											<div class="d-flex align-items-center justify-content-between py-2">
												<dt class="text-base">Shipping</dt>
												<dd
													class="text-base text-gray-900 font-medium productDiscount"
													id="discount"
												>
													${{ cart.shipping.toFixed(2) }}
												</dd>
											</div>

											<div
												class="d-flex align-items-center justify-content-between border-top py-3 mt-3"
											>
												<dt class="text-base">Total</dt>
												<dd
													class="text-base text-green-600 font-bold productDiscount"
													id="discount"
												>
													<strong>${{ cart.total.toFixed(2) }}</strong>
												</dd>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-11 mx-auto">
											<div class="place-button">
												<input
													type="submit"
													name=""
													class="btn btn-primary w-100"
													value="Place Order"
													@click="handleSubmit"
												/>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-8 mx-auto mt-3">
											<div class="place-image">
												<img src="/images/scu.png" class="img-fluid" />
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-5 mx-auto secure-role">
											<div class="px-4 py-4 sm:p-6">
												<div
													class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-green-800"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
														class="mr-1 inline h-4 w-4"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
														></path>
													</svg>
													SSL Secure Checkout
												</div>
											</div>
										</div>
									</div>

									<div class="row money-back-pre">
										<div class="money-back">
											<img src="/images/money-back.jpg" />
											<h4>30 Day Money Back Guarantee</h4>
											<p>
												If you are not fully satisfied with your product we offer a 30 day money
												back guarantee. Simply send the item(s) back to us for a full refund or
												replacement, less S&H + restocking fee.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<div
		class="modal fade custom-class"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		data-backdrop="static"
		data-keyboard="false"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header errorModelPopup">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Form Error</h1>
					<button
						type="button"
						class="btn-close text-white"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<p class="text-danger">
						<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
						FormErrorMessage
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url('~/assets/css/checkout.css');
</style>