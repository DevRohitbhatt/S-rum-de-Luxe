<template>
	<div>
		<!-- header -->

		<div class="header">
			<div class="container">
				<div class="row d-flex align-items-center">
					<div class="col-md-4">
						<div class="header-logo">
							<h2><NuxtLink class="logo-text" to="/">Sérum de Luxe</NuxtLink></h2>
						</div>
					</div>
					<div class="col-md-4"></div>
					<div class="col-md-4 text-end">
						<div class="email-id">
							<a href="mailto:support@sérumdeluxe.com">{{}}</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<slot />
		<!-- footer -->
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<h4>ABOUT THE SHOP</h4>
						<p>TRANSFORM YOUR BEAUTY ROUTINE WITH EFFECTIVE PRODUCTS MADE FROM HIGH QUALITY INGREDIENTS</p>
					</div>
					<div class="col-md-3">
						<h4>Reach us</h4>
						<ul>
							<li>Email id : <a href="mailto:support@sérumdeluxe.com">support@sérumdeluxe.com</a></li>
						</ul>
					</div>
					<div class="col-md-3">
						<h4>OUR LINKS</h4>
						<ul>
							<li><a href="#" target="_blank">Privacy Policy</a></li>
							<li><a href="#" target="_blank">Terms Of Service</a></li>
							<li><a href="#" target="_blank">Shipping Policy</a></li>
							<li><a href="#" target="_blank">Refund Policy</a></li>
						</ul>
					</div>
					<div class="col-md-3">
						<h4>WE OFFER</h4>
						<img src="/images/payrole.png" class="img-fluid" />
					</div>
				</div>

				<div class="row mt-5 ftr-2">
					<p class="text-center">Copyright © 2024 All rights reserved.</p>
					<img src="/images/dmca-protected.png" class="img-fluid" />
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup></script>

<style scoped>
@import url('~/assets/css/checkout.css');
</style>
