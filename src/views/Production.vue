<template>
	<section id="production">
		<div class="production-intro">
			<router-link to="/" class="back-link link">
				<span class="decoration" aria-hidden="true">—</span>back
			</router-link>
			<h1 class="heading outline-font" v-fill-heading>Production 🦦 </h1>
			<p class="subheading">independent releases — written, built, and shipped alone.</p>
		</div>

		<div class="catalog">
			<article
				class="release"
				v-for="(work, index) in works"
				:key="index"
				v-reveal="index"
				:class="{ 'is-upcoming': !work.link }"
			>
				<div class="release-cover">
					<img
						v-if="work.cover"
						:src="work.cover"
						:alt="`${work.title} cover art`"
						loading="lazy"
					/>
					<div v-else class="release-cover-placeholder">
						<span class="outline-font">{{ String(index + 1).padStart(2, '0') }}</span>
					</div>
					<span class="release-status" v-if="!work.link">in progress</span>
				</div>

				<div class="release-meta">
					<span class="release-catalog">REL. {{ String(index + 1).padStart(3, '0') }}</span>

					<h3 class="release-title">{{ work.title }}</h3>
					<p class="release-year">{{ work.date }}</p>

					<p
						class="release-description"
						v-fill-text
						v-html="work.description"
					></p>

					<ul class="release-tools" v-if="work.tools && work.tools.length">
						<li v-for="(tool, i) in work.tools" :key="i">{{ tool }}</li>
					</ul>

					<a
						v-if="work.link"
						:href="work.link"
						class="release-link link"
						target="_blank"
						rel="noopener noreferrer"
					>listen / view<span class="decoration" aria-hidden="true">—</span></a>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Production',
	data() {
		return {
			works: [
				{
					title: "Vlog - PODCAST",
					date: "2026",
					description: "description of this independent release.",
					tools: [],
					link: "",
					cover: "",
				},
        {
					title: "OSLAND - CODE EDITOR",
					date: "2026",
					description: "Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: [],
					link: "",
					cover: "",
				},
			],
		};
	},
};
</script>

<style lang="scss">
#production {
	padding-inline: 5%;
	padding-top: 6rem;
	padding-bottom: 10rem;

	.production-intro {
		max-width: 1100px;
		margin: 0 auto 6rem auto;
		position: relative;

		.back-link {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			font-size: $step--1;
			color: $rose-gold;
			font-family: "le murmure";
			margin-bottom: 1.5rem;
		}

		.heading {
			text-align: left;
			margin: 0;
		}

		.subheading {
			margin: 1rem 0 0 0;
			font-family: monospace;
			font-size: $step--1;
			opacity: 0.6;
			letter-spacing: 0.03em;
		}
	}

	.catalog {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.release {
		position: relative;
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 3rem;
		align-items: start;
		padding: 4rem 0;
		border-top: 1px solid rgba(0, 0, 0, 0.15);
		transition: opacity 0.3s ease;

		&:last-child {
			border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		}

		&.is-upcoming {
			.release-cover img,
			.release-cover-placeholder {
				filter: grayscale(1);
				opacity: 0.55;
			}
		}

		.release-cover {
			position: relative;
			width: 280px;
			aspect-ratio: 1 / 1;
			border-radius: 4px;
			overflow: hidden;
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
			transition: transform 0.4s ease;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.release-cover-placeholder {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #111;

				span {
					font-size: $step-6;
					color: rgba(255, 255, 255, 0.25);
				}
			}

			.release-status {
				position: absolute;
				bottom: 0.75rem;
				left: 0.75rem;
				font-family: monospace;
				font-size: 0.65rem;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				color: #fff;
				background: rgba(0, 0, 0, 0.65);
				padding: 0.3rem 0.6rem;
				border-radius: 999px;
			}
		}

		&:hover .release-cover {
			transform: translateY(-6px);
		}

		.release-meta {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			padding-top: 0.25rem;

			.release-catalog {
				font-family: monospace;
				font-size: 0.7rem;
				letter-spacing: 0.08em;
				opacity: 0.45;
				text-transform: uppercase;
			}

			.release-title {
				font-size: $step-4;
				font-family: "Le Murmure";
				margin: 0;
				line-height: 1.05;
			}

			.release-year {
				margin: 0;
				font-family: monospace;
				font-size: $step--1;
				opacity: 0.5;
			}

			.release-description {
				max-width: 560px;
				margin: 0.5rem 0 0 0;
			}

			.release-tools {
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem 1rem;
				margin: 0.25rem 0 0 0;
				padding: 0;
				font-family: monospace;

				li {
					font-size: $step--1;
					opacity: 0.6;

					&::before {
						content: "— ";
					}
				}
			}

			.release-link {
				margin-top: 0.75rem;
				align-self: flex-start;
				font-size: $step-2;
				color: $rose-gold;
				font-family: "le murmure";

				.decoration {
					position: absolute;
				}
			}
		}
	}

	@media (max-width: $breakpoint-md) {
		.production-intro .heading {
			text-align: center;
		}

		.release {
			grid-template-columns: 1fr;
			text-align: center;
			padding: 3rem 0;

			.release-cover {
				width: 220px;
				margin: 0 auto;
			}

			.release-meta {
				align-items: center;

				.release-description {
					max-width: 100%;
				}

				.release-tools {
					justify-content: center;
				}

				.release-link {
					align-self: center;
				}
			}
		}
	}

	@media (max-width: $breakpoint-sm) {
		padding-top: 4rem;

		.release {
			padding: 2.5rem 0;
			gap: 1.5rem;

			.release-cover {
				width: 170px;
			}

			.release-title {
				font-size: $step-3;
			}
		}
	}
}
</style>