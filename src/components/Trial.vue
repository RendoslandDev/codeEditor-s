<template>

  <section id="trials" >
    <h2 class="heading outline-font" v-fill-heading>Rust -- </h2>
    <div class="rusty">
        
    <span class="outline-font heading" v-fill-heading>Stay-Tuned</span>
    </div>
  
    <div class="trial" v-for="(trial, index) in trials" :key="index" v-reveal="index"
      >
      <span class="outline-font black trial-number">0{{ index + 1 }}</span>
			<h3 class="title">{{ trial.title }}</h3>
			<p class="date">{{ trial.date }}</p>
			<p
				class="description"
				v-fill-text
				v-html="trial.description"
			></p>
      	<a
				v-if="trial.link"
				:href="trial.link"
				class="trial-link link"
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
    dat() {
      return {
        projects: [
          {
  					title: "corn-sms",
  					date: "2026",
  					description:"using rust to create an end to end messaging",
          },
          {
  					title: "corn-sms",
  					date: "2026",
  					description:"using rust to create an end to end messaging",
          }
        ]
      }
    }
  }
</script>



<style lang="scss">
  #trials{
	padding-inline: 5%;
	margin-top: 12rem;
	.heading {
		text-align: left;
		margin-left: 10%;
		margin-top: 0;
  	}
  }
	.trial {
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

		.trial-number {
			align-self: center;
			font-size: $step-7;
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

  .rusty{
  .header-image {
		height: 25vh;
		mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
		object-fit: cover;
		object-position: 0 45%;
		position: absolute;
		top: 0;
		width: 100%;
	}
  
  }
  
 	@media (max-width: $breakpoint-md) {
		.heading {
			margin-left: 0;
			text-align: center;
		}
		.trial {
			.project-number {
				align-self: flex-start;
				grid-row: 1 / span 2;
				margin: 0 1rem 0 1rem;
			}
			.description {
				grid-column: 2;
				max-width: 300px;
			}
			.trial-link {
				grid-column: 2;
			}
		}}
  @media (min-width: $breakpoint-md) {
		background: url("@/assets/rendos.png");
		background-repeat: no-repeat;
		background-position: center;
    border-radius:50%;
		background-size: cover;
		height: 450px;
    width:400px;
	  border:1px solid black;

		.header-image,
		.image-fade {
			display: none;
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;
		.trial {
			grid-template-columns: 1fr 2fr 1fr;
			.trail-number {
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
		
	
			.trial-link {
				grid-column: 1 / span 2;
			}
		}
	}
}
</style>
