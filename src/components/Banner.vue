<template>
	<transition name="banner-fade">
		<div v-if="visible" class="banner">
			<p class="banner-text">
				<span class="dot"></span>
				{{ message }}
			</p>
			<button
				class="banner-close"
				aria-label="Dismiss banner"
				@click="dismiss"
			>×</button>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		message: {
			type: String,
			default: 'a few projects here are still in progress — more shipping soon.',
		},
	},
	data() {
		return {
			visible: true,
		};
	},
	mounted() {
		if (sessionStorage.getItem('banner-dismissed') === 'true') {
			this.visible = false;
		}
	},
	methods: {
		dismiss() {
			this.visible = false;
			sessionStorage.setItem('banner-dismissed', 'true');
		},
	},
};
</script>

<style lang="scss" scoped>
.banner {
	position: sticky;
	top: 0;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 0.75rem 1.5rem;
	background: #111;
	color: #fff;

	.banner-text {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: monospace;
		font-size: 0.8rem;
		letter-spacing: 0.03em;
		text-transform: lowercase;

		.dot {
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: $rose-gold;
			animation: pulse 1.6s ease-in-out infinite;
			flex-shrink: 0;
		}
	}

	.banner-close {
		background: none;
		border: none;
		color: #fff;
		font-size: 1.1rem;
		line-height: 1;
		cursor: pointer;
		opacity: 0.6;
		padding: 0 0.25rem;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 1;
		}
	}
}

@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.3; }
}

.banner-fade-enter-active,
.banner-fade-leave-active {
	transition: all 0.3s ease;
}
.banner-fade-enter-from,
.banner-fade-leave-to {
	opacity: 0;
	transform: translateY(-100%);
}

@media (max-width: 480px) {
	.banner .banner-text {
		font-size: 0.7rem;
	}
}
</style>