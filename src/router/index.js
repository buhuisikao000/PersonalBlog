import Vue from 'vue'
import VueRouter from 'vue-router'
import addBlog from '@/views/addBlog'
import showBlog from '@/views/showBlog'
import details from '@/views/details'
import edit from '@/views/edit'


Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    name: 'addBlog',
    component: addBlog
  },
  {
    path: '/show',
    name: 'showBlog',
    component: showBlog
  },
  {
    path:'/details/:id',
    name:'details',
    component:details
  },
  {
    path:'/edit/:id',
    name:'edit',
    component:edit
  },
  {
    path:'*',
    component: showBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
