<template>
	<div>
		<section id="top-bar">
			<div class="container">
				<p>Your Discount Upto 37% OFF Has Been Applied</p>
			</div>
		</section>

		<section id="header">
			<div class="container">
				<div class="logo"><img src="/images/Logo.png" alt="logo"></div>
			</div>
		</section>

		<slot />

		<section id="footer">
			<div class="container">
			 <div class="f-logo">
				<img src="/images/Logo-white.png"alt="">
			 </div>
				<p>Copyright 2024 | Sérum de Luxe All Rights Reserved</p>
			</div>
		</section>
	</div>
</template>

<style scoped>
@import url('~/assets/css/style.css');
</style>
