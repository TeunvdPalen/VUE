import { createWebHistory, createRouter } from 'vue-router';
import HomeRoute from '@/views/HomeRoute.vue';
import WinkelwagenRoute from '@/views/WinkelwagenRoute.vue';
import NotFound from '@/views/NotFound.vue';
import CommentRoute from '@/views/CommentRoute.vue';

const routes = [
	{
		path: '/',
		name: 'HomeRoute',
		component: HomeRoute,
	},
	{
		path: '/winkelwagen',
		name: 'WinkelwagenRoute',
		component: WinkelwagenRoute,
	},
	{
		path: '/comments',
		name: 'CommentRoute',
		component: CommentRoute,
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
