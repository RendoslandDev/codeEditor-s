<template>
	<footer
		class="footer"
		:class="{sticky}"
	>
		<div class="rendosland">
			<div>Agyapong Rendosland<span
					class="decoration"
					aria-hidden="true"
				>—</span></div>
			<div class="year">2025</div>
		</div>

        <div class="block">
<SocialLinks />
		<p class="rendosland">design by<span
					class="decoration"
					aria-hidden="true"
				>—</span> <a
				class="link"
				href=""
				target="_blank"
				ref="noopener noreferrer"
			>Agyapong Rendosland</a>
        </p>
        </div>

	</footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";

export default {
	name: "Main",
	components: {
		SocialLinks,
	},
	computed: {
		sticky() {
			return true;
		},
	},
};
</script>

<style lang="scss">
.footer {
	display: grid;
	grid-template-columns: repeat(2, auto);
	margin: 0 5%;
	.rendosland {
		align-items: center;
		display: flex;
		font-family: "le murmure";
		font-size: 2rem;
		grid-row: 1 / span 2;
		text-align: left;
	}
	.year {
		font-family: Avenir;
		font-size: 1rem;
		margin-left: 4px;
		padding-bottom: 4px;
	}
	.social-links {
		justify-self: end;
		@media (max-width: $breakpoint-sm) {
			justify-content: center;
		}
	}
	.logo path {
		fill: black;
	}
	.Agyapong {
		grid-column: 2;
		text-align: right;
		margin-right: 0.75rem;
		a {
			color: $rose-gold;
		}
	}

	@media (max-width: $breakpoint-sm) {
		display: flex;
		flex-direction: column;
		align-items: center;
		.rendosland {
			margin-bottom: 1rem;
		}
	}
}
</style>
