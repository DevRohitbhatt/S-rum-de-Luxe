<script setup>
definePageMeta({
	layout: 'custom',
});

const store = usecheckoutChampStore();
store.setPageType('thankyouPage');

const importClick = async () => {
	const requestUrl = '/api/campaign/importClick';
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');
	myHeaders.append('Content-Type', 'application/json');

	const importClickQuery = {
		pagetype: store.pageType,
		requestUri: getRequestUri(),
		sessionId: store.sessionId,
	};

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: importClickQuery,
		redirect: 'follow',
	};

	try {
		const response = await $fetch(requestUrl, requestOptions);
		const data = await JSON.parse(response);
		if (data.result == 'SUCCESS') {
			orderConfirm();
		}
	} catch (error) {
		throw new Error('Error:', error);
	}
};

const orderConfirm = async () => {
	const requestUrl = '/api/campaign/orderConfirm';
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');
	myHeaders.append('Content-Type', 'application/json');

	const orderConfirmQuery = {
		orderId: store.orderId,
	};

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: orderConfirmQuery,
		redirect: 'follow',
	};

	try {
		const response = await $fetch(requestUrl, requestOptions);
		const data = await JSON.parse(response);
	} catch (error) {
		throw new Error('Error:', error);
	}
};

onMounted(() => {
	importClick();
});
</script>

<template>
	<div>
		<div class="up-top-hdng">
			<div class="container">
				<p class="hdng-txt1">
					<img src="/images/left-arw.png" class="left-arw tadda" />
					<span> Congrats - Order Complete! </span>
					<img src="/images/rgt-arw.png" class="rgt-arw taddaR" />
				</p>
				<p class="hdng-txt2 hdng-txtprs pratupr">"Thank you for your purchase."</p>
			</div>
		</div>

		<div class="up-sec1 contact">
			<div class="container">
				<div class="up-s1-Box">
					<div class="up-s1-lft">
						<img src="/images/thanksyou.jpg" class="img-fluid" />
					</div>
					<div class="row managerow">
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<div class="checkout">
								<div id="emailBlock">
									<div id="mailText">
										<div id="mail1">Email: support@sérumdeluxe.com</div>
										<div id="mail2">
											If you have any questions about your order, please send us an email and we
											will get back to you within 24 hours.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="header header-mobile" id="thankyou-header">
			<div class="container">
				<div class="custmr-suprt">
					<span>Customer Service</span><br />
					support@sérumdeluxe.com
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url('~/assets/css/checkout.css');
</style>
