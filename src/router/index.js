import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'Home', component: () => import('@/view/Home') },
        { path: '/shop', name: 'Shop', component: () => import('@/view/Shop') },
        { path: '/:notFound(.*)', name: 'NotFound', component: () => import('@/view/NotFound404') },
        { path: '/shop/:id', name: 'Product', component: () => import('@/view/Product') }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})