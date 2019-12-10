import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientList from '@/components/ClientList'
import ShowClientDetails from '@/components/ShowClientDetails'
import AddClient from '@/components/AddClient'
import EditClient from '@/components/EditClient'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'ClientList',
    component: ClientList
  },
  {
    path: '/showClientDetails/:id',
    name: 'ShowClientDetails',
    component: ShowClientDetails
  },
  {
    path: '/addClient',
    name: 'AddClient',
    component: AddClient
  },
  {
    path: '/editClient',
    name: 'editClient',
    component: EditClient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
