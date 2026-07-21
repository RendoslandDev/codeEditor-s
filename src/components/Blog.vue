<template>
	<section
		id="blog"
		v-reveal
	>
		<h2 class="heading outline-font" v-fill-heading>blog</h2>
		<div class="posts">
			<a
				class="link"
				href="https://medium.com/@agyapongrendosland53/my-story-is-one-you-may-have-heard-a-few-times-i-went-to-school-to-study-one-thing-started-doing-85e28e9905b6"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="list-number">01. </span>From One Non-Expert to Another - Learning What I Didn't Know I Didn't Know
			</a>
			<a
				class="link"
				href="https://medium.com/@bryn.newell/a-request-to-stop-saying-accessibility-is-hard-7ff0314c3280"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="list-number">02. </span>A Request to Stop Saying Accessibility Is Hard
			</a>
		</div>

	</section>

</template>

<style lang="scss">
#blog {
	padding-inline: 5%;
	.heading {
		margin-top: 5rem;
		margin-bottom: 2rem;
	}
}

	.heading {
		margin-top: 0rem;
		margin-right: 4rem;
		.sm-only {
			display: none;
		}
	}
	.posts {
		font-size: $step-2;
		font-weight: 500;
		max-width: 850px;
		margin: 0 auto;
		a {
			color: black;
			&:not(:last-child) {
				&:after {
					content: "/";
					display: inline-block;
					margin-right: 0.5rem;
				}
			}
		}
		.list-number {
			color: $rose-gold;
		}
	}

	@media (max-width: $breakpoint-sm) {
		.heading {
			margin-top: 2rem;
		}
		.posts {
			// to do - find a different step since i still want it smaller on mobile
			font-size: $step-1;
		}
	}

</style>
