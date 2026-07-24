import { createRouter, createWebHistory } from 'vue-router';
import Merchant from '@/views/Merchant.vue';
import Home from '@/views/Home.vue';
import BlogPage from '@/views/BlogPage.vue';
import Production from '@/views/Production.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{ path: '/blog', name: 'blog', component: BlogPage },
	{
		path: '/production',
		name: 'production',
		component: Production,
	},
	{
		path: '/merchant',
		name: 'merchant',
		component: Merchant,
		children: [
			{ path: 'books', name: 'merchant-books', component: () => import('@/views/merchant/Books.vue') },
			{ path: 'shoes', name: 'merchant-shoes', component: () => import('@/views/merchant/Shoes.vue') },
			{ path: 'sneakers', name: 'merchant-sneakers', component: () => import('@/views/merchant/Sneakers.vue') },
			{ path: 'models/upcoming', name: 'merchant-models-upcoming', component: () => import('@/views/merchant/ModelsUpcoming.vue') },
			{ path: 'models/registered', name: 'merchant-models-registered', component: () => import('@/views/merchant/ModelsRegistered.vue') },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;