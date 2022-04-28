import { createWebHistory, createRouter } from 'vue-router';
import HomeRoute from '@/views/HomeRoute.vue';
import OverzichtRoute from '@/views/OverzichtRoute.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'HomeRoute',
		component: HomeRoute,
	},
	{
		path: '/overzicht',
		name: 'OverzichtRoute',
		component: OverzichtRoute,
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
