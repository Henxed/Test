import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '../pages/about.vue')
  }, {
    path: "/news",
    component: () => import('../pages/news/NewsIndex.vue'),
    name: "news"
  }, {
    path: "/news/create",
    component: () => import('../pages/news/PostCreate.vue'),
    name: "news-create"
  }, {
    path: "/news/:id",
    component: () => import('../pages/news/PostOne.vue'),
    name: "news-id"
  }, {
    path: "/news/:id/edit",
    component: () => import('../pages/news/PostEdit.vue'),
    name: "news-id-edit"
  }, {
    path: "/",
    component: () => import('../pages/IndexPage.vue'),
    name: "IndexPage"
  }, {
    path: "/error",
    component: () => import('../pages/ErrorPage.vue'),
    name: "ErrorPage"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
