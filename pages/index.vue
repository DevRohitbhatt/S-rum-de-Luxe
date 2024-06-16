<script setup>
const store = usecheckoutChampStore();
store.setPageType('leadPage');

const importClick = async () => {
	const requestUrl = '/api/campaign/importClick';
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const importClickQuery = {
		pagetype: store.pageType,
		requestUri: getRequestUri(),
	};

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: importClickQuery,
		redirect: 'follow',
	};

	const response = await $fetch(requestUrl, requestOptions);
	console.log(response);
};

onMounted(() => {
	importClick();
});
</script>

<template>
	<div>
		<section id="banner">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="banner-left">
							<h1>Advanced Antioxidant Skincare That Erases Wrinkles In A Single Bottle</h1>
							<h2>
								The All-In-One Facial Serum Designed To Lift Fine Lines, Wrinkles, and bring back your
								skin’s youthful glow.
							</h2>
							<ul>
								<li>
									<img src="/images/check-mark.png" class="img-fluid check-icon" /> Diminishes your
									age spots
								</li>
								<li>
									<img src="/images/check-mark.png" class="img-fluid check-icon" /> Minimizes the
									appearance of wrinkles
								</li>
								<li>
									<img src="/images/check-mark.png" class="img-fluid check-icon" /> Smoothens and
									revitalizes complexion
								</li>
								<li>
									<img src="/images/check-mark.png" class="img-fluid check-icon" /> Lifts and firms
									sagging skin
								</li>
							</ul>
							<div class="cta-btn">
								<NuxtLink to="/checkout" class="btn">TRY SÉRUM DE LUXE NOW >></NuxtLink>
							</div>
							<p class="cta-text">This is a one-time order. This is not a subscription.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex align-items-end">
						<div class="banner-right">
							<img src="/images/banner-img.png" class="img-fluid banner-image" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="testimonial">
			<div class="container">
				<div class="row">
					<div class="col-md-3 text-center profile-sec">
						<img src="/images/testi-img.png" class="img-fluid profile-pic" />
						<h4>Maria J.</h4>
						<img src="/images/stars.png" class="img-fluid stars-img" />
					</div>
					<div class="col-md-9">
						<h3 class="testi-head">I absolutely Love Sérum de Luxe serum!</h3>
						<p class="testi-text">
							“Within just a few weeks, I began to notice a remarkable difference. Fine lines and wrinkles
							around my eyes and mouth have almost vanished. It’s a huge self confidence boost !”
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="media">
			<div class="container">
				<div class="row">
					<h2>Sérum de Luxe In Media</h2>
				</div>
				<div class="row">
					<img src="/images/media-img.png" class="img-fluid" />
				</div>
			</div>
		</section>

		<section id="why-buy">
			<div class="container">
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-6">
						<div class="why-middle-sec">
							<h2 class="text-center">Sérum de Luxe Can Replace Every Face Cream In Your Cabinet</h2>
							<p class="text-center">Why buy many when one will do?</p>
							<p class="text-center">Sérum de Luxe can replace all these:</p>
							<ul>
								<li><span class="material-symbols-outlined">check</span> Wrinkle cream</li>
								<li><span class="material-symbols-outlined">check</span> Neck cream</li>
								<li><span class="material-symbols-outlined">check</span> Eye cream</li>
								<li><span class="material-symbols-outlined">check</span> Dark-spot concentrate</li>
								<li><span class="material-symbols-outlined">check</span> Moisturizer</li>
								<li><span class="material-symbols-outlined">check</span> Lifting & firming cream</li>
							</ul>
							<p class="text-center">…and just about any other skincare product you have!</p>

							<div class="rounded-box">
								<h3>Use Sérum de Luxe in the Morning</h3>
								<p>Revives your skin, giving it a fresh, healthy glow.</p>
							</div>

							<div class="rounded-box">
								<h3>Use Sérum de Luxe at Night</h3>
								<p>Nourishes deeply, showing visible results in weeks.</p>
							</div>

							<div class="rounded-box">
								<h3>Use Sérum de Luxe Everywhere</h3>
								<p>
									Targets age spots, crepey skin on arms and neck, and any area needing rejuvenation.
								</p>
							</div>

							<div class="cta-btn">
								<NuxtLink to="/checkout" class="btn">TRY SÉRUM DE LUXE NOW >></NuxtLink>
							</div>
						</div>
					</div>
					<div class="col-md-3"></div>
				</div>
			</div>
		</section>

		<section id="results">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h2>Get Noticeable Results From Just ONE Product Made For Mature Skin</h2>
						<p>
							Our unique Vitamin C extract outperforms standard Vitamin C, delivering remarkable results.
						</p>
						<p>
							We’ve meticulously blended Hyaluronic Acid, Vitamins B5, Vitamin E, and other trademarked
							skin-nourishing ingredients, making Sérum de Luxe a powerful, multi-tasking serum that
							delivers noticeable results.
						</p>
					</div>
					<div class="col-md-6">
						<img src="/images/b-a-img.png" class="img-fluid" />
					</div>
				</div>
			</div>
		</section>

		<section id="star-sec">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<img src="/images/stars.png" class="img-fluid star-main" />
					</div>
					<div class="col-md-8">
						<h4>
							With thousands of <b>5 star reviews</b> and <b>happy customers</b>, we’re proud to take care
							of our loyal and lovely customers. We are available to answer your questions and concerns
							24/7.
						</h4>
					</div>
				</div>
			</div>
		</section>

		<section id="save-time">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<img src="/images/cell-img-left.png" class="img-fluid" />
					</div>
					<div class="col-md-4">
						<div class="save-middle-sec">
							<h2 class="text-center">
								Achieve Amazing Results While Saving Time and Money with Sérum de Luxe
							</h2>
							<img src="/images/white-swirl.png" class="img-fluid swirl-img" />
							<p class="text-center">
								With a single application of Sérum de Luxe, your skin receives nourishment from the
								finest ingredients available.
							</p>
							<p class="text-center">
								Formulated to meet our highest standards, Sérum de Luxe is a monumental breakthrough in
								anti-aging research. Experience it for yourself and discover why it has garnered over
								25,000 glowing reviews.
							</p>

							<p class="text-center">
								Integrate it with your existing skincare routine or streamline your regimen to just one
								step with Sérum de Luxe.
							</p>

							<p class="text-center">Treat your skin to the best that nature and science can offer!</p>
						</div>
					</div>
					<div class="col-md-4">
						<img src="/images/cell-img-right.png" class="img-fluid" />
					</div>
				</div>
			</div>
		</section>

		<section id="feature">
			<div class="container">
				<img src="/images/chart.png" class="img-fluid desktop-only" />
				<img src="/images/chart-mob.png" class="img-fluid mob-only" />
				<div class="row money-back">
					<div class="col-md-9">
						<h3>Ironclad Money-Back Guarantee</h3>
						<img src="/images/pink-swirl.png" class="img-fluid mb-swirl" />
						<p>
							Love Sérum de Luxe or get your money back with our 1-year "bottom of the bottle" guarantee.
							If you're not amazed by the results, get a full refund, even if you’ve used the entire
							bottle.
						</p>
						<div class="cta-btn">
							<NuxtLink to="/checkout" class="btn">TRY SÉRUM DE LUXE NOW >></NuxtLink>
						</div>
					</div>
					<div class="col-md-3">
						<img src="/images/money-back.png" class="img-fluid" />
					</div>
				</div>
			</div>
		</section>

		<section id="eleminate">
			<div class="container">
				<div class="row">
					<h2>Eliminate Age Spots, Wrinkles, Crepey Skin, and More</h2>
				</div>

				<div class="row">
					<div class="col-md-6">
						<div class="left-elem">
							<p>
								Sérum de Luxe’s key active ingredients work to rejuvenate your skin, minimizing wrinkles
								and age spots. It hydrates, brightens, evens skin tone, lifts, firms, and much more.
							</p>
							<p>Skin-Friendly Ingredients for Every Skin Types</p>
							<p>
								Sérum de Luxe contains gentle ingredients that are perfect for all skin types, including
								dry and sensitive skin.
							</p>
							<img src="/images/3-step-img.png" class="img-fluid" />
						</div>
					</div>

					<div class="col-md-6">
						<img src="/images/product.png" class="img-fluid" />
					</div>
				</div>
			</div>
		</section>

		<section id="ingredients">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<img src="/images/product-2.png" class="img-fluid" />
					</div>
					<div class="col-md-6">
						<h2>Gentle ingredients that are good for your skin and your body!</h2>
						<p>
							Sérum de Luxe has gentle ingredients that are suitable for all skin types. Including those
							with dry or sensitive skin.
						</p>
						<div class="cta-btn">
							<NuxtLink to="/checkout" class="btn">TRY SÉRUM DE LUXE NOW >></NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="options">
			<div class="container">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<h2>Experience Better Skincare with Just One Product for Women Over 50</h2>
						<img src="/images/pink-swirl.png" class="img-fluid swirl-last" />
						<p>
							Imagine saving time and achieving better results with one skincare product designed
							specifically for women over 50. Here's what you need to know:
						</p>

						<h3><span class="pink-highlight">Option #1:</span> Stick with the Old Routine</h3>
						<p>
							You could leave this website without ordering Sérum de Luxe and continue using the same old
							skincare products. You might buy an expensive brand-name product from "big fashion"
							designers, which often are just generic formulas with a fancy label. Alternatively, you
							might opt for cheaper products on Amazon, only to find they are often made in China,
							explaining the low prices.
						</p>

						<h3><span class="pink-highlight">Option #2:</span> Try Sérum de Luxe Risk-Free</h3>
						<p>
							Join over 100,000 women over 50 who have tried Sérum de Luxe and experienced incredible
							results. You’ve spent time reading this because you're ready for something new. Trust
							yourself to make the right decision.
						</p>
						<p>
							When you compare these options, the choice is clear. Tap the green button below to select
							your Sérum de Luxe package.
						</p>

						<p>
							Remember, this special offer, saving up to 37%, is only available for those who act today.
							If you leave this page, Sérum de Luxe will only be available at full price on our website,
							nearly double today's offer.
						</p>

						<p>
							And don't forget, you can try Sérum de Luxe completely risk-free. Use the entire bottle, and
							if you're not satisfied with the results, you have a full year to get a complete refund.
						</p>

						<p>
							We can't wait to hear about your experience with Sérum de Luxe —your results after 1 week, 4
							weeks, and beyond. Be sure to take before and after pictures!
						</p>

						<p>Your partners in beauty,</p>

						<p><b>The Sérum de Luxe Family</b></p>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</section>

		<section id="questions">
			<div class="container">
				<div class="row">
					<h2>Common Questions</h2>
					<img src="/images/pink-swirl.png" class="img-fluid swirl-faq" />

					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									What is Sérum de Luxe serum?
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Where is Sérum de Luxe serum made?
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									How do I use Sérum de Luxe serum?
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingFour">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									What makes Sérum de Luxe serum different?
								</button>
							</h2>
							<div
								id="collapseFour"
								class="accordion-collapse collapse"
								aria-labelledby="headingFour"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingFive">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									How much serum should I use?
								</button>
							</h2>
							<div
								id="collapseFive"
								class="accordion-collapse collapse"
								aria-labelledby="headingFive"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingSix">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSix"
									aria-expanded="false"
									aria-controls="collapseSix"
								>
									What is the full ingredients list?
								</button>
							</h2>
							<div
								id="collapseSix"
								class="accordion-collapse collapse"
								aria-labelledby="headingSix"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingSeven">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSeven"
									aria-expanded="false"
									aria-controls="collapseSeven"
								>
									What age is appropriate for using Sérum de Luxe serum?
								</button>
							</h2>
							<div
								id="collapseSeven"
								class="accordion-collapse collapse"
								aria-labelledby="headingSeven"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingEight">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseEight"
									aria-expanded="false"
									aria-controls="collapseEight"
								>
									How long does a bottle last?
								</button>
							</h2>
							<div
								id="collapseEight"
								class="accordion-collapse collapse"
								aria-labelledby="headingEight"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="headingNine">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseNine"
									aria-expanded="false"
									aria-controls="collapseNine"
								>
									Is Sérum de Luxe serum tested on animals?
								</button>
							</h2>
							<div
								id="collapseNine"
								class="accordion-collapse collapse"
								aria-labelledby="headingNine"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
									sollicitudin turpis non pulvinar. In efficitur luctus congue. Sed gravida facilisis
									lectus, quis faucibus nunc pretium in. Nulla ac massa a justo varius convallis.
									Integer quis odio at leo accumsan tempor ut at dui. Maecenas id mauris luctus,
									euismod elit ac, congue quam. Morbi a urna non enim gravida hendrerit. Suspendisse
									potenti. Donec eget congue turpis. Phasellus in felis vehicula, malesuada mi sit
									amet, volutpat sem. Suspendisse at vehicula dolor. Aliquam gravida ante in eros
									egestas rhoncus. Praesent ut turpis vel turpis rutrum efficitur.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
@import url('~/assets/css/style.css');
</style>
