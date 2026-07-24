import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Scroll-reveal: fades/slides an element into view the first time it
// intersects the viewport. Falls back to "always visible" when the browser
// lacks IntersectionObserver or the user prefers reduced motion.
app.directive('reveal', {
	mounted(el, binding) {
		const reduceMotion = window.matchMedia
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion || typeof IntersectionObserver === 'undefined') {
			el.classList.add('reveal--visible');
			return;
		}

		el.classList.add('reveal');

		// Optional stagger: `v-reveal="2"` delays the reveal by 2 * 120ms.
		const order = Number(binding.value) || 0;
		// eslint-disable-next-line no-param-reassign
		el.style.transitionDelay = `${order * 120}ms`;

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal--visible');
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });

		observer.observe(el);
	},
});

// Scroll-fill text: the element starts faint and fills with colour from top
// to bottom as it travels up through the viewport. Driven by a `--fill` CSS
// custom property (0% -> 100%); the actual paint happens in `_styles.scss`.
const fillHandlers = new WeakMap();

app.directive('fill-text', {
	mounted(el) {
		el.classList.add('fill-text');

		const reduceMotion = window.matchMedia
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion) {
			el.style.setProperty('--fill', '100%');
			return;
		}

		let ticking = false;
		const update = () => {
			ticking = false;
			const rect = el.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			// Begin filling once the top reaches 82% down the viewport,
			// finish by the time it reaches 38% down.
			const start = vh * 0.82;
			const end = vh * 0.38;
			const progress = (start - rect.top) / (start - end);
			const clamped = Math.min(1, Math.max(0, progress));
			el.style.setProperty('--fill', `${(clamped * 100).toFixed(1)}%`);
		};
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(update);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		fillHandlers.set(el, onScroll);
		update();
	},
	unmounted(el) {
		const handler = fillHandlers.get(el);
		if (handler) {
			window.removeEventListener('scroll', handler);
			window.removeEventListener('resize', handler);
			fillHandlers.delete(el);
		}
	},
});

// Scroll-fill for headings: sweeps a mask from top to bottom as the heading
// travels up through the viewport, revealing the full outline-font heading.
// Uses mask-image (not background-clip) so it works alongside -webkit-text-fill-color.
app.directive('fill-heading', {
	mounted(el) {
		el.classList.add('fill-heading');

		const reduceMotion = window.matchMedia
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion) {
			el.style.setProperty('--fill', '100%');
			return;
		}

		let ticking = false;
		const update = () => {
			ticking = false;
			const rect = el.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			// Start sweeping when the heading top hits 85% down the viewport,
			// finish by the time it reaches 25% down.
			const start = vh * 0.85;
			const end = vh * 0.25;
			const progress = (start - rect.top) / (start - end);
			const clamped = Math.min(1, Math.max(0, progress));
			el.style.setProperty('--fill', `${(clamped * 100).toFixed(1)}%`);
		};
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(update);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		fillHandlers.set(el, onScroll);
		update();
	},
	unmounted(el) {
		const handler = fillHandlers.get(el);
		if (handler) {
			window.removeEventListener('scroll', handler);
			window.removeEventListener('resize', handler);
			fillHandlers.delete(el);
		}
	},
});

// Scroll-reveal from left: fades/slides an element in from the left side
// the first time it enters the viewport. Used for section headings.
app.directive('reveal-left', {
	mounted(el, binding) {
		const reduceMotion = window.matchMedia
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion || typeof IntersectionObserver === 'undefined') {
			el.classList.add('reveal-left--visible');
			return;
		}

		el.classList.add('reveal-left');

		const order = Number(binding.value) || 0;
		// eslint-disable-next-line no-param-reassign
		el.style.transitionDelay = `${order * 120}ms`;

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal-left--visible');
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });

		observer.observe(el);
	},
});

app.use(router);
app.mount('#app');