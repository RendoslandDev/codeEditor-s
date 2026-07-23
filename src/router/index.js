import Vue from 'vue';
import VueRouter from 'vue-router';
import Merchant from '@/views/Merchant.vue';
import Home from '@/views/Home.vue';
import BlogPage from '@/views/BlogPage.vue';
import Production from '@/views/Production.vue';

Vue.use(VueRouter);

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
    path:'/merchant',
    name:'merchant',
    component:Merchant,
  }
];

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;