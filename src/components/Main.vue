<template>
	<section class="main">
		<img
			:src="bg"
			class="header-image"
			alt=""
		/>
		<div class="content">
			<h1 class="header">Rendosland Agyapong<span
					class="cursor-blink"
					aria-hidden="true"
				>|</span><span
					class="decoration"
					aria-hidden="true"
				>—</span></h1>
			<div class="desc-container glass">
				<p class="description">Hi there!<br />I'm Rendosland (he/him), a creative developer passionate about creating accessible and beautiful front-end code, curating communities, and moving the needle forward in any environment I can.</p>
				<SocialLinks />
			</div>
			<nav class="site-sections">
				<a
					class="link"
					href="#blog"
				>blogs</a>
				<a
					class="link"
					href="#projects"
				>project</a>
        <a class="link" href="#trials">trial</a>
				<a
					class="link"
					href="#resume"
				>resume/cv</a>
			</nav>
		</div>
	</section>
</template>

<script>
import bg from "@/assets/rend-bg.png";
import SocialLinks from "@/components/SocialLinks.vue";

export default {
	name: "Main",
	components: {
		SocialLinks,
	},
	data() {
		return {
			bg,
		};
	},
	mounted() {
		const reduceMotion = window.matchMedia
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;

		this._parallax = () => {
			const y = window.scrollY;
			const img = this.$el.querySelector('.header-image');
			if (img) img.style.transform = `translateY(${y * 0.28}px)`;
			if (window.innerWidth >= 768) {
				this.$el.style.backgroundPositionY = `calc(center + ${y * 0.18}px)`;
			}
		};
		window.addEventListener('scroll', this._parallax, { passive: true });
	},
	beforeDestroy() {
		if (this._parallax) window.removeEventListener('scroll', this._parallax);
	},
};
</script>

<style lang="scss">
// Note to self - this is the only file that is mobile first breakpoints
@keyframes hero-in {
	from {
		opacity: 0;
		transform: translateY(24px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@media (prefers-reduced-motion: reduce) {
	.main .content .header,
	.main .content .desc-container,
	.main .content .site-sections {
		animation: none;
	}
}

.main {
	background: linear-gradient(#e0a6a4, $light-pink);
	color: #fff;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	position: relative;
	width: 100vw;

	.header-image {
		height: 25vh;
		mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
		object-fit: cover;
		object-position: 0 45%;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.content {
		display: flex;
		padding: 5%;
		padding-top: 5vh;
		flex-wrap: wrap;

		// Hero entrance: each block fades up in sequence on load.
		.header,
		.desc-container,
		.site-sections {
			animation: hero-in 0.8s ease both;
		}
		.desc-container {
			animation-delay: 0.15s;
		}
		.site-sections {
			animation-delay: 0.3s;
		}

		.header {
			font-family: "le murmure";
			margin: 0;

			@media (max-width: 1230px) {
				.decoration {
					display: none;
				}
			}
		}

		.desc-container {
			align-items: flex-start;
			display: flex;
			flex-direction: column;
			padding: 1.5rem 1.75rem;
			gap: 1rem;

			.description {
				font-size: 1rem;
				text-align: left;
				margin-top: 0;
			}
		}

		.site-sections {
			display: flex;
			flex-direction: row;
			font-size: 3rem;
			font-family: "le murmure";
			text-align: right;
			margin-top: 1rem;
			width: 100%;

			.link,
			.link:visited {
				color: #fff;
				position: relative;
			}
			.link:not(:last-child) {
				margin-right: 5%;
			}

			// Animated underline wipe on hover
			.link::after {
				content: '';
				position: absolute;
				bottom: -3px;
				left: 0;
				width: 100%;
				height: 2px;
				background: #fff;
				transform: scaleX(0);
				transform-origin: left center;
				transition: transform 0.3s ease;
			}
			.link:hover {
				text-decoration: none;
			}
			.link:hover::after {
				transform: scaleX(1);
			}
		}
	}

	@media (min-width: $breakpoint-sm) {
		.content .desc-container {
			max-width: 80%;
		}
	}

	@media (min-width: $breakpoint-md) {
		background: url("@/assets/rend-bg.png");
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		height: 100vh;
		padding-bottom: 2rem;

		.header-image,
		.image-fade {
			display: none;
		}

		.content {
			align-items: flex-end;
			background: transparent;
			justify-content: space-between;
			flex-wrap: nowrap;
			padding-block: 0;

			.desc-container {
				max-width: 35%;

				.description {
					margin-top: 0;
					max-width: 75vw;
				}
			}

			.site-sections {
				flex-direction: column;
				margin-top: 0;
				width: auto;

				.link {
					margin-right: 0;
				}
			}
		}
	}
}
</style>
