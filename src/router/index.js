import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: (r) => {
				require.ensure([], () => r(require('@/components/HelloWorld')), 'chunkname')
			}
		}, {
			path: '/home',
			name: 'Home',
			component: (r) => {
				require.ensure([], () => r(require('@/views/home')), 'chunkname1')
			}
		}, {
			path: '/menu',
			name: 'Menu',
			component: (r) => {
				require.ensure([], () => r(require('@/views/menu')), 'chunkname1')
			}
		}, {
			path: '/foodmaterial',
			name: 'Foodmaterial',
			component: (r) => {
				require.ensure([], () => r(require('@/views/foodmaterial')), 'chunkname1')
			}
		}, {
			path: '/selection',
			name: 'selection',
			component: (r) => {
				require.ensure([], () => r(require('@/views/selection')), 'chunkname1')
			}
		}, {
			path: '/healthy',
			name: 'healthy',
			component: (r) => {
				require.ensure([], () => r(require('@/views/healthy')), 'chunkname1')
			}
		}, {
			path: '/special',
			name: 'special',
			component: (r) => {
				require.ensure([], () => r(require('@/views/special')), 'chunkname1')
			}
		}, {
			path: '/community',
			name: 'community',
			component: (r) => {
				require.ensure([], () => r(require('@/views/community')), 'chunkname1')
			}
		}, {
			path: '/search',
			name: 'search',
			component: (r) => {
				require.ensure([], () => r(require('@/views/search')), 'chunkname1')
			}
		}, {
			path: '/baking',
			name: 'baking',
			component: (r) => {
				require.ensure([], () => r(require('@/views/baking')), 'chunkname1')
			}
		}, {
			path: '/mamapai',
			name: 'mamapai',
			component: (r) => {
				require.ensure([], () => r(require('@/views/mamapai')), 'chunkname1')
			}
		}
	]
})
