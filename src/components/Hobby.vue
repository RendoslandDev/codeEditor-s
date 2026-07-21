<template>
<section id="mobile">
  		<h2 class="heading outline-font" v-fill-heading>Mobile</h2>
		<div
			class="project"
			v-for="(project, index) in projects"
			:key="index"
			v-reveal="index"
		>
			<span class="outline-font black project-number">{{ index + 1 }}</span>
			<h3 class="title">{{ project.title }}</h3>
			<p class="date">{{ project.date }}</p>
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
					description:"",
					tools: ["Flutter"],
					link: "https://github.com/RendoslandDev/osland",
				},
         {
					title: "OSp-mobile",
					date: "2026",
					description: "Software has learned to ask for too much. Osland asks for a folder. Everything else — the accounts, the sync prompts, the telemetry — has been taken out until only the work remains.",
					tools: ["Flutter", "Dart"],
					link: "https://github.com/RendoslandDev/osp"
				},
        {
					title: "EDITORIALCONNECt - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["Flutter", "dart", "superbase"],
					link: "https://github.com/RendoslandDev/group4"
				},
        {
					title: "WYEd - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["Flutter","superbase"],
					link: "https://github.com/RendoslandDev/wyed"
				},
        {
					title: "COMPLIANCe - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["vue", "Tailwindcss", "Python"],
					link: "https://github.com/RendoslandDev/compliance"
				},
        {
					title: "SEANCe - mobile",
					date: "2026",
					description: "a platform for writers ,where they are being able to share their stories and also connect with the production companies worldwide",
					tools: ["vue", "Tailwindcss", "Python"],
					link: "https://github.com/RendoslandDev/seance"
				},
        ]
      }
  }
}
</script>

<style lang="scss">
#mobile {
	padding-inline: 5%;
	margin-top: 12rem;
	.heading {
		text-align: left;
		margin-left: 10%;
		margin-top: 0;
	}
	.project {
		justify-content: start;
		display: grid;
		grid-template-columns: 2fr 4fr 1fr;
		grid-template-rows: auto auto auto;
		gap: 1rem 0;
		max-width: 1000px;
		margin: 0 auto 6rem auto;
		text-align: left;
		transition: transform 0.3s ease;
		border-radius: 6px;
		padding: 1rem 0;

		&:hover {
			transform: translateY(-6px);
		}

		.project-number {
			align-self: center;
			font-size: $step-6;
			grid-row: 1 / span 5  ;
			margin: 0 6rem 0 3rem;
		}

		.title {
			font-size: $step-3;
			font-family: "Le Murmure";
			margin: 0;
			max-width: 220px;
		}

		.date {
			align-self: center;
			justify-self: end;
			margin: 0;
			white-space: nowrap;
		}

		.description {
			max-width: 700px;
			margin: 0;
		}

		.tools {
			list-style: none;
			grid-column: 3;
			grid-row: 2 / span 2;
			justify-self: end;
			margin: 0;
			padding: 0;
			text-align: right;
		}

		.project-link {
			// to do - i feel like this needs a 2.5
			font-size: $step-2;
			color: $rose-gold;
			font-family: "le murmure";
			.decoration {
				position: absolute;
			}
		}
	}
	@media (max-width: $breakpoint-md) {
		.heading {
			margin-left: 0;
			text-align: center;
		}
		.project {
			.project-number {
				align-self: flex-start;
				grid-row: 1 / span 2;
				margin: 0 1rem 0 1rem;
			}
			.description {
				grid-column: 2;
				max-width: 300px;
			}
			.project-link {
				grid-column: 2;
			}
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;
		.project {
			grid-template-columns: 1fr 2fr 1fr;
			.project-number {
				grid-column: 1;
				grid-row: 1;
				line-height: 6rem;
				margin: 0;
			}
			.title {
				grid-column: 2 / span 2;
			}
			.date {
				justify-self: start;
				grid-column: 1 / span 2;
				grid-row: 2;
				padding-bottom: 0;
			}
			.description {
				grid-column: 1 / span 2;
				max-width: 100%;
			}
			.tools {
				grid-column: 3;
				grid-row: 3 / span 2;
			}
			.project-link {
				grid-column: 1 / span 2;
			}
		}
	}
}
</style>
