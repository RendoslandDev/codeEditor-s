<template>
	<section class="about-me">
		<img
			:src="headshot"
			alt="headshot of Rendosland"
			class="headshot"
		/>
		<div class="about-text">
			<h2 class="heading outline-font">about me<span
					class="decoration"
					aria-hidden="true"
				>—</span></h2>
			<p class="description"> I am a Full Stack Developer with a strong commitment to web accessibility, user-centered design, and the creation of inclusive digital experiences. My work focuses on developing accessible, well-designed solutions that enhance usability for all users while maintaining high standards of functionality and visual quality.

I approach every project with professionalism, collaboration, and a results-oriented mindset. I value teamwork, positive communication, and leading through example, contributing to environments where colleagues and stakeholders can work effectively toward shared objectives.

Based in Colorado, I have extensive experience working remotely and collaborating with distributed teams across different locations. Outside of my professional work, I have a keen interest in travel, motorcycling, yoga, and reading.

I am currently employed full-time as a Full Stack Developer and am also available for freelance engagements. Whether developing new applications from the ground up or auditing, modernizing, and improving existing systems, I am committed to delivering high-quality, accessible, and maintainable solutions.
<a
					href="mailto:agyapongrendosland53@gmail.com"
					class="link rosegold"
				>get in touch!</a>
			</p>
		</div>
	</section>
</template>

<script>
import headshot from "@/assets/coderend.jpg";

export default {
	data() {
		return {
			headshot,
		};
	},
};
</script>

<style lang="scss">
.about-me {
	display: flex;
	flex-wrap: wrap;
	margin: 5rem 10% 8rem 10%;

	.headshot {
		border-radius: 3%;
		object-fit: cover;
		object-position: 70% 0;
		height: 40vh;
		margin-right: 6rem;
		width: 40vh;
	}

	.about-text {
		text-align: left;
		.heading {
			font-size: $step-8;
			position: relative;
			display: inline-block;
			margin-top: 3rem;
			.decoration {
				position: absolute;
				left: calc(100% + 0.5ch);
			}
		}

		.description {
			color: #000;
			max-width: 600px;
		}
	}
	@media (max-width: $breakpoint-md) {
		margin-left: 0;
		.headshot {
			margin: 0 auto;
		}
		.about-text {
			text-align: center;
			width: 100%;
			.description {
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-block: 2rem;
		margin-inline: 5%;
		.headshot {
			height: 25vh;
			width: 25vh;
		}
		.heading {
			margin: 1.5rem auto;
			.decoration {
				display: none;
			}
		}
	}
}
</style>
