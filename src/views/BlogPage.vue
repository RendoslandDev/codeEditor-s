<template>
	<section id="blog-page">
		<div class="blog-intro">
			<router-link to="/" class="back-link link">
				<span class="decoration" aria-hidden="true">—</span>back
			</router-link>
			<h1 class="heading outline-font" v-fill-heading>Blog🐿️</h1>
			<p class="subheading">notes on what I'm building and learning.</p>
		</div>

		<div class="entries">
			<article
				class="entry"
				v-for="(post, index) in posts"
				:key="index"
				v-reveal="index"
			>
				<span class="entry-date">{{ post.date }}</span>

				<h3 class="entry-title">
					<a
						v-if="post.link"
						:href="post.link"
						target="_blank"
						rel="noopener noreferrer"
					>{{ post.title }}</a>
					<template v-else>{{ post.title }}</template>
				</h3>

				<p class="entry-excerpt">{{ post.excerpt }}</p>

				<a
					v-if="post.link"
					:href="post.link"
					class="entry-link link"
					target="_blank"
					rel="noopener noreferrer"
				>read<span class="decoration" aria-hidden="true">—</span></a>
				<span v-else class="entry-status">coming soon</span>
			</article>
		</div>
	</section>
</template>

<script>
export default {
	name: 'BlogPage',
	data() {
		return {
			posts: [
				{
					title: "PLACEHOLDER POST",
					date: "2026",
					excerpt: "short summary of what this post covers.",
					link: "",
				},
        	{
					title: "PLACEHOLDER POST",
					date: "2026",
					excerpt: "short summary of what this post covers.",
					link: "",
				},
			],
		};
	},
};
</script>

<style lang="scss">
#blog-page {
	padding-inline: 5%;
	padding-top: 6rem;
	padding-bottom: 10rem;

	.blog-intro {
		max-width: 800px;
		margin: 0 auto 6rem auto;

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

	.entries {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.entry {
		padding: 2.5rem 0;
		border-top: 1px solid rgba(0, 0, 0, 0.15);
		text-align: left;
		transition: transform 0.3s ease;

		&:last-child {
			border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		}

		&:hover {
			transform: translateX(6px);
		}

		.entry-date {
			font-family: monospace;
			font-size: 0.7rem;
			letter-spacing: 0.05em;
			opacity: 0.5;
			text-transform: uppercase;
		}

		.entry-title {
			font-size: $step-3;
			font-family: "Le Murmure";
			margin: 0.5rem 0 0.75rem 0;

			a {
				color: inherit;
				text-decoration: none;

				&:hover {
					color: $rose-gold;
				}
			}
		}

		.entry-excerpt {
			margin: 0;
			max-width: 600px;
			opacity: 0.85;
		}

		.entry-link {
			display: inline-block;
			margin-top: 1rem;
			font-size: $step-2;
			color: $rose-gold;
			font-family: "le murmure";

			.decoration {
				position: absolute;
			}
		}

		.entry-status {
			display: inline-block;
			margin-top: 1rem;
			font-family: monospace;
			font-size: 0.75rem;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			padding: 0.3rem 0.7rem;
			border: 1px solid currentColor;
			border-radius: 999px;
			opacity: 0.6;
			color: $rose-gold;
		}
	}

	@media (max-width: $breakpoint-md) {
		.blog-intro .heading {
			text-align: center;
		}
	}
}
</style>