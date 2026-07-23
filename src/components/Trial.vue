<template>
	<section id="trials">
		<div class="intro">
			<div class="intro-text">
				<h2 class="heading outline-font" v-fill-heading>Rust🦦 </h2>
				<p class="subheading">systems experiments, one crate at a time.</p>
			</div>

			<div class="badge">
				<div class="badge-photo"></div>
				<span class="badge-text outline-font" v-fill-heading>Stay&nbsp;Tuned</span>
			</div>
		</div>

		<div class="log">
			<div
				class="trial"
				v-for="(trial, index) in trials"
				:key="index"
				v-reveal="index"
			>
				<div class="trial-index">
					<span class="outline-font black trial-number">{{ String(index + 1).padStart(2, '0') }}</span>
					<span class="trial-status" :class="trial.status">{{ trial.status || 'in progress' }}</span>
				</div>

				<div class="trial-body">
					<div class="trial-top">
						<h3 class="title">{{ trial.title }}</h3>
						<p class="date">{{ trial.date }}</p>
					</div>

					<p
						class="description"
						v-fill-text
						v-html="trial.description"
					></p>

					<ul class="tools" v-if="trial.tools && trial.tools.length">
						<li v-for="(tool, i) in trial.tools" :key="i">{{ tool }}</li>
					</ul>

					<a
						v-if="trial.link"
						:href="trial.link"
						class="trial-link link"
						target="_blank"
						rel="noopener noreferrer"
					>see the work<span class="decoration" aria-hidden="true">—</span></a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			trials: [
				{
					title: "corn-sms",
					date: "2026",
					description: "using rust to create an end to end messaging",
					tools: ["Rust", "Tokio"],
					status: "in progress",
				},
			],
		};
	},
};
</script>

<style lang="scss">
#trials {
	padding-inline: 5%;
	margin-top: 12rem;

	// intro row: heading + circular photo badge
	.intro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		max-width: 1100px;
		margin: 0 auto 6rem auto;
		flex-wrap: wrap;

		.intro-text {
			flex: 1 1 320px;

			.heading {
				text-align: left;
				margin: 0;
				line-height: 0.9;
			}

			.subheading {
				margin: 1rem 0 0 0;
				font-family: monospace;
				font-size: $step--1;
				letter-spacing: 0.04em;
				opacity: 0.6;
				text-transform: lowercase;
			}
		}

		.badge {
			position: relative;
			flex: 0 0 auto;
			width: 220px;
			height: 220px;
			border-radius: 50%;
			border: 1px solid black;
			background: url("@/assets/rendos.png") no-repeat center / cover;
			display: flex;
			align-items: center;
			justify-content: center;
			transform: rotate(-6deg);
			transition: transform 0.4s ease;

			&:hover {
				transform: rotate(0deg) scale(1.03);
			}

			.badge-photo {
				position: absolute;
				inset: 0;
				border-radius: 50%;
				background: rgba(0, 0, 0, 0.45);
			}

			.badge-text {
				position: relative;
				z-index: 1;
				color: #fff;
				font-size: $step-1;
				text-align: center;
				text-transform: uppercase;
				letter-spacing: 0.08em;
			}
		}
	}

	// trial log
	.log {
		max-width: 1000px;
		margin: 0 auto;
		border-top: 1px solid rgba(0, 0, 0, 0.15);
	}

	.trial {
		display: flex;
		gap: 2.5rem;
		padding: 2.5rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		transition: transform 0.3s ease, opacity 0.3s ease;

		&:hover {
			transform: translateX(6px);

			.trial-number {
				opacity: 1;
			}
		}

		.trial-index {
			flex: 0 0 auto;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
			width: 90px;

			.trial-number {
				font-size: $step-6;
				line-height: 1;
				opacity: 0.5;
				transition: opacity 0.3s ease;
			}

			.trial-status {
				font-family: monospace;
				font-size: 0.7rem;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				padding: 0.25rem 0.6rem;
				border: 1px solid currentColor;
				border-radius: 999px;
				white-space: nowrap;
				opacity: 0.7;

				&.shipped {
					color: #2e7d32;
				}
				&.in.progress,
				&.in-progress {
					color: $rose-gold;
				}
			}
		}

		.trial-body {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			.trial-top {
				display: flex;
				align-items: baseline;
				justify-content: space-between;
				gap: 1rem;
				flex-wrap: wrap;
			}

			.title {
				font-size: $step-3;
				font-family: "Le Murmure";
				margin: 0;
			}

			.date {
				margin: 0;
				font-family: monospace;
				font-size: $step--1;
				opacity: 0.5;
				white-space: nowrap;
			}

			.description {
				max-width: 620px;
				margin: 0;
				opacity: 0.85;
			}

			.tools {
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
						content: "$ ";
						opacity: 0.5;
					}
				}
			}

			.trial-link {
				margin-top: 0.25rem;
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
		.intro {
			justify-content: center;
			text-align: center;

			.intro-text {
				flex: 1 1 100%;

				.heading {
					text-align: center;
				}
			}

			.badge {
				width: 180px;
				height: 180px;
			}
		}

		.trial {
			gap: 1.5rem;

			.trial-index {
				width: 64px;

				.trial-number {
					font-size: $step-4;
				}

				.trial-status {
					font-size: 0.6rem;
					padding: 0.2rem 0.5rem;
					text-align: center;
				}
			}
		}
	}

	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;

		.intro {
			gap: 2rem;
			margin-bottom: 3rem;
		}

		.trial {
			flex-direction: column;
			gap: 1rem;

			.trial-index {
				flex-direction: row;
				align-items: center;
				width: auto;
			}

			.trial-body .trial-top {
				flex-direction: column;
				gap: 0.25rem;
			}
		}
	}
}
</style>