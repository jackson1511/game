import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  
    {
      path: '/offer',
      name: 'offer',
      component: () => import('../views/offer/OfferView.vue'),
    },
    
    {
      path: '/offer-rebate',
      name: 'offer-rebate',
      component: () => import('../views/offer/OfferRebateView.vue'),
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/ProfileView.vue'),
    },
    {
      path: '/message-center',
      name: 'profile-message',
      component: () => import('../views/profile/components/MessageCenter.vue'),
      meta: { noLayout: true },
    },
    {
      path: '/profile-view',
      name: 'profile-view',
      component: () => import('../views/profile/components/ProfileSetting.vue'),
      meta: { noLayout: true },
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/SearchView.vue'),
      meta: { noLayout: true },
    },

    {
      path: '/center-wallet',
      name: 'center-wallet',
      component: () => import('../views/profile/components/RetriveBalance.vue'),
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/profile/components/StatementReport.vue'),
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('../views/profile/components/SecurityCenter.vue'),
      meta: { noLayout: true },
    },
    {
      path: '/device-info',
      name: 'device-info',
      component: () => import('../views/profile/components/LoggedDevice.vue'),
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('../views/profile/components/AgentView.vue'),
      meta: { noLayout: true },
    },
    {
      path: '/profile-avator',
      name: 'profile-avator',
      component: () => import('../views/profile/components/ProfileAvator.vue'),
      meta: { noLayout: true },
    },
    {
      path:"/withdraw",
      name:"withdraw",
      component: () => import('../views/profile/WithdrawView.vue'),
      meta: {noLayout: true},
    },
    {
      path: '/subgame',
      name: 'subgame',
      component: () => import('../views/search/SubGameView.vue'),
      meta: { noLayout: true },
    },
    {
      path: '/test-tabs',
      name: 'TestTabs',
      component: () => import('@/views/TestScrollTabs.vue'),
    },
  ],
})

export default router
