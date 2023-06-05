import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cep',
      name: 'DadosApi',
      component: () => import('../views/DadosApi.vue')
    },
    {
      path:'/manga',
      name: 'Apimanga',
      component: () => import('../views/Apimanga.vue')
    }
  ]
})

export default router
