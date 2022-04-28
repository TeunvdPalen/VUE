import { createWebHistory, createRouter } from 'vue-router';
import HomeRoute from '@/views/HomeRoute.vue';
import AboutRoute from '@/views/AboutRoute.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'HomeRoute',
		component: HomeRoute,
	},
	{
		path: '/about',
		name: 'AboutRoute',
		component: AboutRoute,
	},
	{
		path: '/:catchAll(.*)',
		component: NotFound,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
