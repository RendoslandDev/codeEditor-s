<template>
	<section id="mobile">
		<h2 class="heading outline-font" v-fill-heading>Mobile 🦦 </h2>
		<div
			class="project"
			v-for="(project, index) in projects"
			:key="index"
			v-reveal="index"
			:class="{ reverse: index % 2 !== 0 }"
		>
			<span class="outline-font black project-number">{{ index + 1 }}</span>

			<div class="content">
				<div class="content-top">
					<h3 class="title">{{ project.title }}</h3>
					<p class="date">{{ project.date }}</p>
				</div>

				<p
					class="description"
					v-fill-text
					v-html="project.description"
				></p>

				<ul class="tools">
					<li
						v-for="(tool, index) in project.tools"
						:key="index"
					>{{ tool }}</li>
				</ul>

				<a
					v-if="project.link"
					:href="project.link"
					class="project-link link"
					target="_blank"
					rel="noopener noreferrer"
				>see the work<span
						class="decoration"
						aria-hidden="true"
					>—</span></a>
			</div>

			<div class="mockup" v-if="project.images && project.images.length">
				<div
					class="phone"
					v-for="(img, i) in project.images"
					:key="i"
					:style="{ '--i': i }"
				>
					<div class="phone-notch"></div>
					<img
						:src="img"
						:alt="`${project.title} mockup ${i + 1}`"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: "osland- mobile",
					date: "2025",
					description: "",
					tools: ["Flutter"],
					link: "https://github.com/RendoslandDev/osland",
					images: [
						"/osland-1.png",
						"/osland-2.png",
					],
				},
				{
					title: "OSp-mobile",
					date: "2026",
					description: "Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Flutter", "Dart"],
					link: "https://github.com/RendoslandDev/osp",
					images: [
            "/osp.png",
						"/osp-1.png",
						"/osp-2.png",
					],
				},
				{
					title: "EDITORIALCONNECt - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["Flutter", "dart", "superbase"],
					link: "https://github.com/RendoslandDev/group4",
					images: [
						"/editorial-connect-1.png",
						"/editorial-connect-2.png",
					],
				},
				{
					title: "WYEd - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["Flutter", "superbase"],
					link: "https://github.com/RendoslandDev/wyed",
					images: [
						"/wyed-1.png",
						"/wyed-2.png",
					],
				},
				{
					title: "COMPLIANCe - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["vue", "Tailwindcss", "Python"],
					link: "https://github.com/RendoslandDev/compliance",
					images: [
						"/compiance-1.png",
						"/compliance-2.png",
					],
				},
				{
					title: "SEANCe - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["vue", "Tailwindcss", "Python"],
					link: "https://github.com/RendoslandDev/seance",
					images: [
						"/seance-1.png",
						"/seance-2.png",
					],
				},
			],
		};
	},
};
</script>

<style lang="scss">
#mobile {
	padding-inline: 5%;
	margin-top: 12rem;

	.heading {
		text-align: left;
		margin-left: 10%;
		margin-top: 0;
		margin-bottom: 4rem;
	}

	.project {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: 3rem;
		max-width: 1100px;
		margin: 0 auto 10rem auto;
		padding: 2rem 0;
		border-radius: 6px;
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-6px);
		}

		&.reverse {
			flex-direction: row-reverse;

			.project-number {
				right: 0;
				left: auto;
			}

			.mockup {
				justify-content: flex-start;
			}
		}

		.project-number {
			position: absolute;
			top: -2rem;
			left: 0;
			font-size: $step-6;
			line-height: 1;
			opacity: 0.9;
			pointer-events: none;
			z-index: 0;
		}

		.content {
			position: relative;
			z-index: 1;
			flex: 1 1 55%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding-top: 0.5rem;

			.content-top {
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
				white-space: nowrap;
				opacity: 0.6;
			}

			.description {
				max-width: 520px;
				margin: 0;
			}

			.tools {
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem 1rem;
				margin: 0.5rem 0 0 0;
				padding: 0;

				li {
					font-size: $step--1;
					opacity: 0.7;
					white-space: nowrap;

					&::before {
						content: "— ";
					}
				}
			}

			.project-link {
				margin-top: 0.5rem;
				font-size: $step-2;
				color: $rose-gold;
				font-family: "le murmure";
				align-self: flex-start;

				.decoration {
					position: absolute;
				}
			}
		}

		// mockup: not centered — pushed to the outer edge, offset downward
		.mockup {
			position: relative;
			flex: 0 0 auto;
			display: flex;
			justify-content: flex-end;
			width: 240px;
			min-height: 320px;
			margin-top: 3.5rem;
		}

		.phone {
			--i: 0;
			position: absolute;
			top: calc(var(--i) * 1.6rem);
			left: calc(var(--i) * 1.4rem);
			width: 200px;
			aspect-ratio: 9 / 19.5;
			background: #111;
			border-radius: 2.2rem;
			padding: 0.55rem;
			box-shadow:
				0 20px 40px rgba(0, 0, 0, 0.28),
				inset 0 0 0 2px rgba(255, 255, 255, 0.06);
			transform: rotate(calc(var(--i) * 4deg - 4deg));
			transform-origin: bottom left;
			transition: transform 0.4s ease, top 0.4s ease, left 0.4s ease;
			overflow: hidden;
			z-index: calc(10 - var(--i));

			.phone-notch {
				position: absolute;
				top: 0.55rem;
				left: 50%;
				transform: translateX(-50%);
				width: 40%;
				height: 1rem;
				background: #111;
				border-radius: 0 0 0.7rem 0.7rem;
				z-index: 2;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 1.6rem;
			}
		}

		&:hover .phone {
			transform: rotate(calc(var(--i) * 4deg - 4deg)) translateY(-6px);
		}

		&.reverse .phone {
			left: auto;
			right: calc(var(--i) * 1.4rem);
			transform-origin: bottom right;
			transform: rotate(calc(var(--i) * -4deg + 4deg));

			&:hover {
				transform: rotate(calc(var(--i) * -4deg + 4deg)) translateY(-6px);
			}
		}
	}

	@media (max-width: $breakpoint-md) {
		.heading {
			margin-left: 0;
			text-align: center;
		}

		.project {
			flex-direction: column;
			gap: 2rem;
			text-align: center;

			&.reverse {
				flex-direction: column;
			}

			.project-number {
				position: static;
				margin-bottom: 0.5rem;
			}

			.content {
				align-items: center;
				padding-top: 0;

				.content-top {
					flex-direction: column;
					gap: 0.25rem;
				}

				.description {
					max-width: 100%;
				}

				.tools {
					justify-content: center;
				}

				.project-link {
					align-self: center;
				}
			}

			.mockup {
				justify-content: flex-start;
				width: 100%;
				margin-top: 1.5rem;
				margin-left: 15%;
				min-height: 260px;
			}

			.phone {
				width: 160px;
			}

			&.reverse .mockup {
				justify-content: flex-start;
			}
		}
	}

	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;

		.project {
			margin-bottom: 6rem;

			.mockup {
				margin-left: 10%;
				min-height: 220px;
			}

			.phone {
				width: 140px;
			}
		}
	}
}
</style>