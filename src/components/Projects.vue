<template>
	<section id="projects">
		<h2 class="heading outline-font" v-fill-heading>projects 🦜 </h2>
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
					class="browser"
					v-for="(img, i) in project.images"
					:key="i"
					:style="{ '--i': i }"
				>
					<div class="browser-bar">
						<span class="browser-dot"></span>
						<span class="browser-dot"></span>
						<span class="browser-dot"></span>
						<span class="browser-address">{{ project.domain || 'localhost' }}</span>
					</div>
					<div class="browser-screen">
						<img
							:src="img"
							:alt="`${project.title} screenshot ${i + 1}`"
							loading="lazy"
						/>
					</div>
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
					title: "IBH MODEl",
					date: "2025",
					description:
						"A modern portfolio and personal branding platform developed for a professional model and creative talent. The website was designed to showcase modeling work, photography portfolios, brand collaborations, and professional achievements through a clean, visually engaging user experience. My focus was on creating a responsive interface, optimizing image presentation and gallery performance, implementing intuitive navigation, and ensuring the platform effectively highlights the client's personal brand while providing potential agencies, photographers, and clients with a seamless browsing experience.",
					tools: ["Vue.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
					link: "https://github.com/RendoslandDev/ibhmodel",
					domain: "ibhmodel.com",
					images: [
						"/projects/ibh-model-1.png",
						"/projects/ibh-model-2.png",
					],
				},
				{
					title: "DEVLOOTs",
					date: "2026",
					description: "Newsletter for programmers, influencers etc",
					tools: ["Typescript", "Tailwindcss"],
					link: "https://github.com/RendoslandDev/Devloot",
					domain: "devloot.com",
					images: [
						"/projects/devloots-1.png",
						"/projects/devloots-2.png",
					],
				},
				{
					title: "EDITORIAL-CONNECt",
					date: "2026",
					description:
						"a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["vue", "Tailwindcss", "Python"],
					link: "https://github.com/RendoslandDev/group4",
					domain: "editorial-connect.com",
					images: [
						"/editorialconnect-1.png",
						"/editorialconnect-2.png",
					],
				},
				{
					title: "OSLANd",
					date: "2026",
					description:
						"Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Electron", "React", "Code Mirror"],
					link: "https://github.com/RendoslandDev/osland",
					domain: "osland.app",
					images: [
						"/osland-1.png",
						"/osland-2.png",
					],
				},
				{
					title: "VLOg",
					date: "2026",
					description:
						"Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Electron", "React", "Code Mirror"],
					link: "https://github.com/RendoslandDev/vlog",
					domain: "vlog.app",
					images: [
						"/vlog-1.png",
						"/vlog-2.png",
					],
				},
				{
					title: "TRIPNESt",
					date: "2026",
					description:
						"Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Electron", "React", "Code Mirror"],
					link: "https://github.com/RendoslandDev/tripnest",
					domain: "tripnest.app",
					images: [
						"/tripnest-1.png",
						"/tripnest-2.png",
					],
				},
				{
					title: "STROVEx",
					date: "2026",
					description:
						"Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Electron", "React", "Code Mirror"],
					link: "https://github.com/RendoslandDev/osland",
					domain: "strovex.app",
					images: [
						"/strovex-1.png",
						"/strovex-2.png",
					],
				},
				{
					title: "RENDO-GUIDEs",
					date: "2026",
					description:
						"Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Electron", "React", "Code Mirror"],
					link: "https://github.com/RendoslandDev/rendo-guides",
					domain: "rendo-guides.app",
					images: [
						"/projects/rendo-guides-1.png",
						"/projects/rendo-guides-2.png",
					],
				},
			],
		};
	},
};
</script>

<style lang="scss">
#projects {
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
			font-size: $step-7;
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
			flex: 1 1 45%;
			display: flex;
			justify-content: flex-end;
			min-height: 260px;
			margin-top: 3.5rem; // sits slightly lower than the content block
		}

		.browser {
			--i: 0;
			position: absolute;
			top: calc(var(--i) * 1.4rem);
			left: calc(var(--i) * 1.6rem);
			width: 380px;
			background: #f4f3f1;
			border-radius: 10px;
			box-shadow:
				0 24px 48px rgba(0, 0, 0, 0.24),
				inset 0 0 0 1px rgba(0, 0, 0, 0.06);
			transform: rotate(calc(var(--i) * 2.5deg - 2.5deg));
			transform-origin: bottom left;
			transition: transform 0.4s ease, top 0.4s ease, left 0.4s ease;
			overflow: hidden;
			z-index: calc(10 - var(--i));

			.browser-bar {
				display: flex;
				align-items: center;
				gap: 0.4rem;
				padding: 0.55rem 0.75rem;
				background: #e4e2de;
			}

			.browser-dot {
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: rgba(0, 0, 0, 0.18);
				flex-shrink: 0;

				&:first-child {
					background: #ec6a5e;
				}
				&:nth-child(2) {
					background: #f4bf4f;
				}
				&:nth-child(3) {
					background: #61c454;
				}
			}

			.browser-address {
				margin-left: 0.6rem;
				flex: 1;
				background: #fff;
				border-radius: 999px;
				padding: 0.15rem 0.7rem;
				font-family: monospace;
				font-size: 0.65rem;
				color: rgba(0, 0, 0, 0.45);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.browser-screen {
				aspect-ratio: 16 / 10;
				overflow: hidden;

				img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: top center;
				}
			}
		}

		&:hover .browser {
			transform: rotate(calc(var(--i) * 2.5deg - 2.5deg)) translateY(-6px);
		}

		&.reverse .browser {
			left: auto;
			right: calc(var(--i) * 1.6rem);
			transform-origin: bottom right;
			transform: rotate(calc(var(--i) * -2.5deg + 2.5deg));

			&:hover {
				transform: rotate(calc(var(--i) * -2.5deg + 2.5deg)) translateY(-6px);
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

			// on mobile: not centered, offset to the right and pushed down
			.mockup {
				justify-content: flex-start;
				width: 100%;
				margin-top: 1.5rem;
				margin-left: 10%;
				min-height: 220px;
			}

			.browser {
				width: 280px;
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
				margin-left: 5%;
				min-height: 180px;
			}

			.browser {
				width: 220px;

				.browser-address {
					font-size: 0.55rem;
				}
			}
		}
	}
}
</style>