import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
// import { router } from '@/main.js'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/cards/view_card',
          component: () => import("@/components/ViewTask.vue"),
        },
        {
          path: '/exit',
          component: () => import("@/views/BoardWithCardsView.vue"),
        },
        {
          path: "/cards/new_card",
          component: () => import('@/components/CreatingTaskView.vue')
        },
        {
          path: "/card/:id",
          component: () => import("@/components/VTask.vue"),
        },
        {
          path: "/login",
          component: () => import("@/views/SignInView.vue"),
        },
        {
          path: "/register",
          component: () => import("@/views/SignUpView.vue"),
        },
        {
          path: "/404",
          component: () => import("@/views/NotFoundView.vue"),
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-in',
      component: SignInView,
    },
    {
      path: '/sign-up',
      component: SignUpView,
    },
  ],
})  

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('userInfo')

//   if (to.meta.requiresAuth && !token) {
//     next('/sign-in  ')
//   } else {
//     next()
//   }
// })

export default router
