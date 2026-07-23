<template>
	<nav class="social-links">
		<a
			href="https://github.com/RendoslandDev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="sr-only">Visit my Github</span>
			<github class="logo" />
		</a>
		<a
			href="https://bsky.app/profile/rendosland"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="sr-only">Visit my Bluesky</span>
			<bsky class="logo" />
		</a>
		<a
			href="https://medium.com/@rendosland"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="sr-only"> Visit my Medium</span>
			<medium class="logo" />
		</a>
		<a
			href="https://www.linkedin.com/in//"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="sr-only"> visit my Linked In</span>
			<linkedin class="logo" />
		</a>
	</nav>
</template>

<script>
import github from "@/assets/github.vue";
import medium from "@/assets/medium.vue";
import bsky from "@/assets/bsky.vue";
import linkedin from "@/assets/linkedin.vue";

export default {
	components: {
		github,
		medium,
		bsky,
		linkedin,
	},
};
</script>

<style lang="scss">
.social-links {
	display: flex;
	a {
		margin: 0 0.75rem;
	}
	:first-child {
		margin-left: 0;
	}
	.logo {
		height: 2rem;
		fill: white;
		transition: transform 0.25s ease, opacity 0.25s ease;
	}
	a:hover .logo {
		transform: translateY(-4px) scale(1.1);
		opacity: 0.85;
	}
	@media (prefers-reduced-motion: reduce) {
		.logo {
			transition: none;
		}
	}
	@media (max-width: $breakpoint-sm) {
		text-align: left;
		width: 100%;
	}
}
</style>
